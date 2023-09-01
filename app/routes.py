from app.data_handler import calculate_avg
from flask import Flask, jsonify

def create_app():
    app = Flask(__name__)

    @app.route('/')
    def home():
        return "¡Bienvenido a la aplicación de precios de gasolina!"

    # this will return avg from one type of gasoline (query param) for whole Spain or for every Municipio
    @app.route('/api/avg_gasoline')
    def get_avg_gasolina():
        media = calculate_avg()
        return jsonify({"avg_price": media})

    return app
