export enum AlertRuleType {
  SK_CATEGORY = "SK_CATEGORY",
  MERCHANT = "MERCHANT",
  DEPARTMENT = "DEPARTMENT",
}

export interface OptionValue {
  label: string;
  value: {
    id: number;
    type: AlertRuleType;
  };
}

export interface AlertRule {
  department_id?: number;
  department_name?: string;
  merchant_id?: number;
  merchant_name?: string;
  sk_category_id?: number;
  sk_category_name?: string;
  type: AlertRuleType;
}

export interface AlertsResource {
  alert_rules: AlertRule[];
  transaction_amount_threshold: number;
}
