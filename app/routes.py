from app.data_handler import calculate_avg
from flask import Flask, jsonify, request

def create_app():
    app = Flask(__name__)

    @app.route('/')
    def home():
        return "¡Welcome to gas-tracker app!"

    # this will return avg from one type of gasoline (query param) for whole Spain or for one Provincia
    @app.route('/api/avg_gasoline')
    def get_avg_gasolina():
        gasoline_type = request.args.get('gasoline_type')
        id_provincia = request.args.get('id_provincia')
        average = calculate_avg(gasoline_type, id_provincia)
        return jsonify({"avg_price": average})

    return app
