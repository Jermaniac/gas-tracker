from app.data_handler import calculate_avg_with_pandas
from app.data_handler import return_params
from app.data_handler import calculate_avg
from flask import Flask, jsonify, request

def create_app():
    app = Flask(__name__)

    # this will return avg from one type of gasoline (query param) for whole Spain or for one Provincia
    @app.route('/api/avg_gasoline')
    def get_avg_gasolina():
        gasoline_type = request.args.get('gasoline_type')
        id_provincia = request.args.get('id_provincia')
        average = calculate_avg_with_pandas(gasoline_type, id_provincia)
        return jsonify({"avg_price": average})

    # this will return info from a province
    @app.route('/province/<string:id_provincia>')
    def get_info_province(id_provincia):
        params = return_params(id_provincia)
        return jsonify({"info": params})
    
    return app
