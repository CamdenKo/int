import { AlertRule, AlertRuleType, AlertsResource } from "./types";

const ruleValid = (rule: AlertRule) => {
  if (!rule.type) return false;
  if (rule.type === AlertRuleType.DEPARTMENT && !("department_id" in rule))
    return false;
  if (rule.type === AlertRuleType.MERCHANT && !("merchant_id" in rule))
    return false;
  if (rule.type === AlertRuleType.SK_CATEGORY && !("sk_category_id" in rule))
    return false;

  return true;
};

const alertValid = (alert: AlertsResource) => {
  if (Number.isNaN(alert.transaction_amount_threshold)) return false;
  if (alert.transaction_amount_threshold <= 0) return false;
  if (alert.alert_rules.some((rule) => !ruleValid(rule))) return false;

  return true;
};

export const submitData = (alert: AlertsResource) => {
  const isAlertValid = alertValid(alert);

  window.alert(`
  ${isAlertValid ? "VALID" : "INVALID"} rule submitted
  with values: ${JSON.stringify(alert)}`);
};
