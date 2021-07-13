from backend.schema import AlertDefinitionSchema

class AlertDefinitionsResource(Resource):
    def post(self):
        user = g.user
        alert_definition_request = AlertDefinitionSchema().load(data=request.get_json())

        try:
            if _can_manage_business_alerts(user):
                alert_definition = alerts_services.create_new_alert(
                    user.business.id, alert_definition_request
                )
                db.session.commit()
                return make_response(
                    jsonify(AlertDefinitionSchema().dump(alert_definition)), 201
                )
        except Exception:
            db.session.rollback()
            raise
