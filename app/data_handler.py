import config
import requests
import numpy as np
import json

SUCCESS_CODE = config.SUCCESS_CODE
DECODE_FORMAT = config.DECODE_FORMAT
API_REST_URL = config.API_REST_URL
LIST_PRICES_NAME = config.LIST_PRICES_NAME
PRICE_GASOLINE_95_E5 = config.PRICE_GASOLINE_95_E5
COMMA_STRING = config.COMMA_STRING
DOT_STRING = config.DOT_STRING
ID_PROVINCIA_STRING = config.ID_PROVINCIA_STRING
NONE_STRING = config.NONE_STRING
ZERO_STRING = config.ZERO_STRING
EMPTY_STRING = config.EMPTY_STRING

def call_api_data():
    response = requests.get(API_REST_URL)
    if response.status_code == SUCCESS_CODE:
        html_content = response.content.decode(DECODE_FORMAT)    
    else:
        print("Failed to fetch data from API")
    data = json.loads(html_content)
    return data

def get_prices_by_type(gasoline_type, data, id_provincia):
    prices_by_type = []
    for entry in data[LIST_PRICES_NAME]:
        try:
            entry_price_by_type = entry.get(gasoline_type, EMPTY_STRING).replace(COMMA_STRING, DOT_STRING)
            entry_id_provincia = entry.get(ID_PROVINCIA_STRING, EMPTY_STRING)
            if (id_provincia == ZERO_STRING or entry_id_provincia == id_provincia) and entry_price_by_type != EMPTY_STRING:
                prices_by_type.append(float(entry_price_by_type))
        except ValueError:
            print("There is an error with entry: ", entry)
    return prices_by_type

def calculate_avg(gasoline_type, id_provincia):
    data = call_api_data()
    prices_gasoline_by_type = get_prices_by_type(gasoline_type, data, id_provincia)
    average_price = np.mean(prices_gasoline_by_type)
    formatted_number = "{:.2f}".format(average_price)
    return (formatted_number)
