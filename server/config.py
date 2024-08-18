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
    'Precio Hidrogeno',
    'Precio Gasolina 95 E5 Premium'
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
    'Precio Hidrogeno': 'hydrogen_avg_price',
    'Precio Gasolina 95 E5 Premium': 'g95_e5_premium_avg_price'
}

FUEL_NAMES = {
    'Precio Gasolina 95 E5': 'gas95E5',
    'Precio Gasolina 98 E5': 'gas98E5',
    'Precio Gasolina 95 E10': 'gas95E10',
    'Precio Gasolina 98 E10': 'gas98E10',
    'Precio Biodiesel': 'biodiesel',
    'Precio Bioetanol': 'bioetanol',
    'Precio Gas Natural Comprimido': 'gasNaturalComprimido',
    'Precio Gas Natural Licuado': 'gasNaturalLicuado',
    'Precio Gases licuados del petróleo': 'gasesLicuadosPetroleo',
    'Precio Gasoleo A': 'gasoleoA',
    'Precio Gasoleo B': 'gasoleoB',
    'Precio Gasoleo Premium': 'gasoleoPremium',
    'Precio Hidrogeno': 'hydrogen',
    'Precio Gasolina 95 E5 Premium': 'gas95E5Premium'
}

STATION_KEY_MAPPING = {
    'Rótulo': 'stationName',
    'Dirección': 'address',
    'Municipio': 'municipality',
    'C.P.': 'postalCode',
    'Horario': 'hours',
    'IDCCAA': 'autonomousCommunityId',
    'IDEESS': 'stationId',
    'IDMunicipio': 'municipalityId',
    'IDProvincia': 'provinceId',
    'Latitud': 'latitude',
    'Longitud (WGS84)': 'longitude',
    'Margen': 'margin',
    'Localidad': 'locality',
    'Precio Gasolina 95 E5': 'price95E5',
    'Precio Gasolina 98 E5': 'price98E5',
    'Precio Gasolina 95 E10': 'price95E10',
    'Precio Gasolina 98 E10': 'price98E10',
    'Precio Gasoleo A': 'priceGasoleoA',
    'Precio Gasoleo B': 'priceGasoleoB',
    'Precio Gasoleo Premium': 'priceGasoleoPremium',
    'Precio Biodiesel': 'priceBiodiesel',
    'Precio Bioetanol': 'priceBioethanol',
    'Precio Gas Natural Comprimido': 'priceGasNaturalComprimido',
    'Precio Gas Natural Licuado': 'priceGasNaturalLicuado',
    'Precio Gases licuados del petróleo': 'priceGasesLicuadosPetroleo',
    'Precio Hidrogeno': 'priceHydrogen',
    '% BioEtanol': 'bioethanolPercentage',
    '% Éster metílico': 'methylEsterPercentage',
    'Provincia': 'province',
    'Remisión': 'submission',
    'Tipo Venta': 'saleType',
    'Precio Gasolina 95 E5 Premium': 'price95E5Premium'
}
