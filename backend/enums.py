import enum


class Action(str, enum.Enum):
    ALERT = "ALERT"
    FLAG = "FLAG"


class RuleType(str, enum.Enum):
    SK_CATEGORY = "SK_CATEGORY"
    MERCHANT = "MERCHANT"
    DEPARTMENT = "DEPARTMENT"
