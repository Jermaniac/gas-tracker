API_REST_URL = "https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/"
LIST_PRICES_NAME = "ListaEESSPrecio"
DECODE_FORMAT = "utf-8"
COMMA_STRING = ","
DOT_STRING = "."
ID_PROVINCIA_STRING = "IDProvincia"
ZERO_STRING = "0"
EMPTY_STRING = ""
GASOLINE_TYPES = [
    'Precio Gasolina 95 E5', 
    'Precio Gasolina 98 E5', 
    'Precio Gasolina 95 E10', 
    'Precio Gasolina 98 E10'
]
CUSTOM_NAMES = {
    'Precio Gasolina 95 E5': 'gas_95_e5_avg',
    'Precio Gasolina 98 E5': 'gas_98_e5_avg',
    'Precio Gasolina 95 E10': 'gas_95_e10_avg',
    'Precio Gasolina 98 E10': 'gas_98_e10_avg'
}