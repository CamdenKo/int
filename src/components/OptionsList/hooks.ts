import { AlertRuleType, AlertsResource, OptionValue } from "../../types";

let lastId = 0;

export const useAlert = (): AlertsResource => {
  return {
    id: lastId++,
    alert_rules: [],
    transaction_amount_threshold: 100,
  };
};

export const useListSelectOptions = (): OptionValue[] => [
  {
    label: "Travel",
    value: {
      id: 14,
      type: AlertRuleType.SK_CATEGORY,
    },
  },
  {
    label: "Electronics",
    value: {
      id: 19,
      type: AlertRuleType.SK_CATEGORY,
    },
  },
  {
    label: "SaaS",
    value: {
      id: 92,
      type: AlertRuleType.SK_CATEGORY,
    },
  },
  {
    label: "Facebook",
    value: {
      id: 14,
      type: AlertRuleType.MERCHANT,
    },
  },
  {
    label: "Apple",
    value: {
      id: 44,
      type: AlertRuleType.MERCHANT,
    },
  },
  {
    label: "United Airlines",
    value: {
      id: 39,
      type: AlertRuleType.MERCHANT,
    },
  },
  {
    label: "Engineering",
    value: {
      id: 14,
      type: AlertRuleType.DEPARTMENT,
    },
  },
  {
    label: "Marketing",
    value: {
      id: 4,
      type: AlertRuleType.DEPARTMENT,
    },
  },
  {
    label: "Sales",
    value: {
      id: 32,
      type: AlertRuleType.DEPARTMENT,
    },
  },
];
