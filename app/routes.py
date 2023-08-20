from app.data_handler import calculate_avg
from flask import Flask, jsonify

def create_app():
    app = Flask(__name__)

    @app.route('/')
    def home():
        return "¡Bienvenido a la aplicación de precios de gasolina!"

    @app.route('/api/avg_gasoline')
    def get_media_gasolina():
        media = calculate_avg()
        return jsonify({"media_gasolina": media})

    return app
