import config
import requests
import json
import pandas as pd

# Constants from the config module
DECODE_FORMAT = config.DECODE_FORMAT
API_REST_URL = config.API_REST_URL
LIST_PRICES_NAME = config.LIST_PRICES_NAME
COMMA_STRING = config.COMMA_STRING
DOT_STRING = config.DOT_STRING
ID_PROVINCIA_STRING = config.ID_PROVINCIA_STRING
ZERO_STRING = config.ZERO_STRING
EMPTY_STRING = config.EMPTY_STRING
GASOLINE_TYPES = config.GASOLINE_TYPES
CUSTOM_NAMES = config.CUSTOM_NAMES

class APIException(Exception):
    pass

def retrieve_gas_data():
    try:
        response = requests.get(API_REST_URL)
        response.raise_for_status()
        html_content = response.content.decode(DECODE_FORMAT)
        data = json.loads(html_content)
        return data
    except requests.RequestException as e:
        raise APIException(f"Request failed: {e}")
    except json.JSONDecodeError as e:
        raise APIException(f"JSON decode error: {e}")
    except Exception as e:
        raise APIException(f"An unexpected error occurred while fetching data: {e}")

def get_filtered_gas_data_by_province(id_provincia):
    raw_data = retrieve_gas_data()
    proccesed_data = process_gas_data(raw_data ,id_provincia)
    return proccesed_data

def process_gas_data(data, id_provincia):
    df = pd.DataFrame(data[LIST_PRICES_NAME])

    filtered_df = df[df[ID_PROVINCIA_STRING] == id_provincia].copy()

    averages = calculate_averages(filtered_df, GASOLINE_TYPES)
        
    result = {
        **averages,
        "data": filtered_df.to_dict(orient='records')
    }
    
    return result

def calculate_averages(df, column_names):
    averages = {}
    for column in column_names:
        df[column] = df[column].astype(str).str.replace(COMMA_STRING, DOT_STRING)
        df[column] = pd.to_numeric(df[column], errors='coerce')
        averages[CUSTOM_NAMES[column]] = df[column].mean()
    return averages
