from app.data_handler import get_filtered_gas_data_by_province
from flask import Flask, jsonify

app = Flask(__name__)
def create_app():

    # this will return info from a province
    @app.route('/province/<string:id_provincia>')
    def get_info_province(id_provincia):
        try:
            data = get_filtered_gas_data_by_province(id_provincia)
            return jsonify({"info": data})
        except Exception as e:
            return jsonify({"error": str(e)}), 500
    
    @app.errorhandler(404)
    def page_not_found(e):
        return jsonify({"error": "Resource not found"}), 404

    @app.errorhandler(500)
    def internal_server_error(e):
        return jsonify({"error": "Internal server error"}), 500
    
    return app

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=9004)