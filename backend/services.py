from typing import Dict, List, Mapping
from backend.schema import AlertDefinitionSchema, AlertRuleSchema
from backend.enums import Action, RuleType


def _materialize_alert_rules(
    business_id: int, rules: List[AlertRuleSchema]
) -> List[AlertRule]:
    """
    Turns a list of dumped AlertRuleSchema into AlertRule
    objects by resolving their relationships.

    The complexity arises mostly from doing one db read
    per RuleType rather than per AlertRule.
    """
    rules_by_type: Mapping[RuleType, List] = {k: list() for k in RuleType}
    for rule in rules:
        rules_by_type[rule.get("type")].append(rule)

    department_schemas = rules_by_type[RuleType.DEPARTMENT]
    department_uuids = [d["department"]["uuid"] for d in department_schemas]
    departments = get_departments_by_uuids(business_id, department_uuids)

    department_rules = [
        AlertRule(type=RuleType.DEPARTMENT, department_id=department.id)
        for department in departments.all()
    ]

    merchant_schemas = rules_by_type[RuleType.MERCHANT]
    merchant_uuids = [d.get("merchant").get("uuid") for d in merchant_schemas]
    merchants = get_merchants_by_uuids(business_id, merchant_uuids)

    merchant_rules = [
        AlertRule(type=RuleType.MERCHANT, merchant_id=merchant.id)
        for merchant in merchants.all()
    ]

    category_schemas = rules_by_type[RuleType.SK_CATEGORY]
    category_rules = [
        AlertRule(type=RuleType.SK_CATEGORY, sk_category_id=s.get("sk_category_id"))
        for s in category_schemas
    ]

    return department_rules + merchant_rules + category_rules

def create_new_alert(
    business_id: int, alert_definition_request: AlertDefinitionSchema,
) -> AlertDefinition:
    alert_definition_kwargs: Dict = {
        **alert_definition_request,
        "business_id": business_id,
    }
    alert_definition_kwargs["alert_rules"] = _materialize_alert_rules(
        business_id, alert_definition_kwargs.pop("alert_rules")
    )

    return alert_definition_kwargs
