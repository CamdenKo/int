def test_create_alerts_and_flags_for_admin_and_owner(client, fds):
    department = DepartmentFactory.create(business=fds.business)
    sk_category = SkCategoryFactory.create()
    merchant = MerchantFactory.create()

    request = {
        "alert_rules": [
            {"type": "DEPARTMENT", "department_id": department.id},
            {"type": "SK_CATEGORY", "sk_category_id": sk_category.id},
            {"type": "MERCHANT", "merchant_id": merchant.id},
        ],
        "transaction_amount_threshold": 99.9,
    }
    response = client.post(
        "/v1/auth/alerts_and_flags",
        content_type="application/json",
        data=json.dumps(request),
    )
    assert response.status_code == 201, response.data
    result = AlertDefinition.query.filter(
        AlertDefinition.uuid == response.json.get("id")
    ).one()
    assert (
        float(result.transaction_amount_threshold)
        == request["transaction_amount_threshold"]
    )
    assert len(result.alert_rules) == 3
