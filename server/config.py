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
    'Precio Gasolina 98 E10',
    'Precio Biodiesel',
    'Precio Bioetanol',
    'Precio Gas Natural Comprimido',
    'Precio Gas Natural Licuado',
    'Precio Gases licuados del petróleo',
    'Precio Gasoleo A',
    'Precio Gasoleo B',
    'Precio Gasoleo Premium',
    'Precio Hidrogeno'
]

CUSTOM_NAMES = {
    'Precio Gasolina 95 E5': 'g95_e5_avg_price',
    'Precio Gasolina 98 E5': 'g98_e5_avg_price',
    'Precio Gasolina 95 E10': 'g95_e10_avg_price',
    'Precio Gasolina 98 E10': 'g98_e10_avg_price',
    'Precio Biodiesel': 'biodiesel_avg_price',
    'Precio Bioetanol': 'bioetanol_avg_price',
    'Precio Gas Natural Comprimido': 'gas_natural_comprimido_avg_price',
    'Precio Gas Natural Licuado': 'gas_natural_licuado_avg_price',
    'Precio Gases licuados del petróleo': 'gases_licuados_petroleo_avg_price',
    'Precio Gasoleo A': 'gasoleo_a_avg_price',
    'Precio Gasoleo B': 'gasoleo_b_avg_price',
    'Precio Gasoleo Premium': 'gasoleo_premium_avg_price',
    'Precio Hidrogeno': 'hidrogeno_avg_price'
}

FUEL_NAMES = {
    'gas95E5': "Gasoline 95 E5",
    'gas98E5': "Gasoline 98 E5",
    'gas95E10': "Gasoline 95 E10",
    'gas98E10': "Gasoline 98 E10",
    'biodiesel': "Biodiesel",
    'bioetanol': "Bioethanol",
    'gasNaturalComprimido': "Compressed Natural Gas (CNG)",
    'gasNaturalLicuado': "Liquefied Natural Gas (LNG)",
    'gasesLicuadosPetroleo': "Liquefied Petroleum Gas (LPG)",
    'gasoleoA': "Diesel A",
    'gasoleoB': "Diesel B",
    'gasoleoPremium': "Premium Diesel",
    'hidrogeno': "Hydrogen"
}
