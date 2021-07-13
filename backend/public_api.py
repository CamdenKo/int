from backend.schema import AlertDefinitionSchema
import backend.services as alerts_services

class AlertDefinitionsResource(Resource):
    def post(self, request):
        alert_definition_request = AlertDefinitionSchema().load(data=request.get_json())

        try:
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
