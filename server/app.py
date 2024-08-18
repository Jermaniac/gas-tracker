from utils.data_handler import get_filtered_gas_data_by_province
from flask import Flask, jsonify
from flask_caching import Cache

ip = '0.0.0.0'
app = Flask(__name__)
cache = Cache(app, config={'CACHE_TYPE': 'simple'})

@app.route('/province/<string:id_provincia>')
@cache.cached(timeout=300)
def get_info_province(id_provincia):
    try:
        data = get_filtered_gas_data_by_province(id_provincia)
        return jsonify({"gasStationInfo": data})
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
@app.errorhandler(404)
def page_not_found(e):
    return jsonify({"error": "Resource not found"}), 404

@app.errorhandler(500)
def internal_server_error(e):
    return jsonify({"error": "Internal server error"}), 500

if __name__ == "__main__":
    app.run(host=ip, port=9004)