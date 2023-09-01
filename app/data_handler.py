import config
import requests
import numpy as np
import json

SUCCESS_CODE = config.SUCCESS_CODE
DECODE_FORMAT = config.DECODE_FORMAT
API_REST_URL = config.API_REST_URL
LIST_PRICES_NAME = config.LIST_PRICES_NAME
PRICE_GASOLINE_95_E5 = config.PRICE_GASOLINE_95_E5

def call_api_data():
    response = requests.get(API_REST_URL)
    if response.status_code == SUCCESS_CODE:
        html_content = response.content.decode(DECODE_FORMAT)    
    else:
        print("Failed to fetch data from API")
    data = json.loads(html_content)
    return data

def get_prices_by_type(type, data):
    prices_by_type = []
    for entry in data[LIST_PRICES_NAME]:
        price_by_type = entry.get(type, "").replace(",", ".")
        try:
            prices_by_type.append(float(price_by_type))
        except ValueError:
            print(f"Could not convert '{price_by_type}' to float")
    return prices_by_type

def calculate_avg():
    data = call_api_data()
    prices_gasoline_95_e5 = get_prices_by_type(PRICE_GASOLINE_95_E5, data)
    average_price = np.mean(prices_gasoline_95_e5)
    formatted_number = "{:.2f}".format(average_price)
    return (formatted_number)
