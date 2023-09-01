from app.data_handler import calculate_avg
from flask import Flask, jsonify, request

def create_app():
    app = Flask(__name__)

    @app.route('/')
    def home():
        return "¡Bienvenido a la aplicación de precios de gasolina!"

    # this will return avg from one type of gasoline (query param) for whole Spain or for every Municipio
    @app.route('/api/avg_gasoline')
    def get_avg_gasolina():
        gasoline_type = request.args.get('gasoline_type')
        city = request.args.get('city')
        media = calculate_avg(gasoline_type, city)
        return jsonify({"avg_price": media})

    return app
