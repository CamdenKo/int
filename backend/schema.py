class AlertRuleSchema(ma.Schema):  # type: ignore
    type = TextEnumField(RuleType, by_value=True, required=True)
    department_id = ma.Integer(attribute="department.id")
    department_name = ma.String(attribute="department.department_name")
    merchant_id = ma.Integer(attribute="merchant.id")
    merchant_name = ma.String(attribute="merchant.merchant_name")
    sk_category_id = ma.Integer(attribute="sk_category.id")
    sk_category_name = ma.String(attribute="sk_category.sk_category_name")

    @post_dump(pass_many=False)
    def remove_empty_values(self, data, **kwargs):
        return {key: value for key, value in data.items() if value is not None}

    class Meta:
        fields = (
            "type",
            "department_id",
            "department_name",
            "sk_category_id",
            "sk_category_name",
            "merchant_id",
            "merchant_name",
        )

class AlertDefinitionSchema(ma.Schema):  # type: ignore
    id = UUID(attribute="uuid")
    alert_rules = ma.Nested(AlertRuleSchema, many=True, missing=[])
    transaction_amount_threshold = ma.Decimal(required=True)

    class Meta:
        fields = (
            "id",
            "alert_rules",
            "transaction_amount_threshold",
        )
