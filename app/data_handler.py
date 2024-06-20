import config
import requests
import json
import numpy as np
import pandas as pd

# Constants from the config module
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

class APIException(Exception):
    """Custom exception for API errors"""
    pass

def call_api_data():
    """Fetches data from the API and returns it as a dictionary."""
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

def get_prices_by_type_with_pandas(gasoline_type, data, id_provincia):
    # Convert data to DataFrame
    df = pd.DataFrame(data[LIST_PRICES_NAME])
    
    # Replace commas with dots and convert to float
    df[gasoline_type] = df[gasoline_type].str.replace(COMMA_STRING, DOT_STRING).astype(float, errors='coerce')
    
    # Filter by province if id_provincia is not "0"
    if id_provincia != ZERO_STRING:
        df = df[df[ID_PROVINCIA_STRING] == id_provincia]
    
    # Drop rows with NaN values in the gasoline_type column
    df = df.dropna(subset=[gasoline_type])
    
    # Return the list of prices
    return df[gasoline_type].tolist()

def get_prices_by_type(gasoline_type, data, id_provincia):
    """
    Extracts prices of a specific gasoline type from the data.

    Args:
        gasoline_type (str): The type of gasoline to filter prices.
        data (dict): The data containing gasoline prices.
        id_provincia (str): The ID of the province to filter prices.

    Returns:
        list: A list of prices for the specified gasoline type and province.
    """
    prices_by_type = []
    for entry in data.get(LIST_PRICES_NAME, []):
        entry_price_by_type = entry.get(gasoline_type, EMPTY_STRING).replace(COMMA_STRING, DOT_STRING)
        entry_id_provincia = entry.get(ID_PROVINCIA_STRING, EMPTY_STRING)
        if (id_provincia == ZERO_STRING or entry_id_provincia == id_provincia) and entry_price_by_type:
            try:
                prices_by_type.append(float(entry_price_by_type))
            except ValueError:
                print(f"There is an error with entry: {entry}")
    return prices_by_type

def get_prices_by_province_using_pandas(data, id_provincia):
    df = pd.DataFrame(data[LIST_PRICES_NAME])
    filtered_df = df[df[ID_PROVINCIA_STRING] == id_provincia]
    return filtered_df.to_dict(orient='records')

def get_prices_by_province(data ,id_provincia):
    prices_by_province = []
    for entry in data.get(LIST_PRICES_NAME, []):
        entry_id_provincia = entry.get(ID_PROVINCIA_STRING, EMPTY_STRING)
        if (entry_id_provincia == id_provincia):
            try:
                prices_by_province.append(entry)
            except ValueError:
                print(f"There is an error with entry: {entry}")
    return prices_by_province


def calculate_avg(gasoline_type, id_provincia):
    """
    Calculates the average price of a specific gasoline type for a given province.

    Args:
        gasoline_type (str): The type of gasoline.
        id_provincia (str): The ID of the province.

    Returns:
        str: The average price formatted to two decimal places.
    """
    data = call_api_data()
    prices_gasoline_by_type = get_prices_by_type(gasoline_type, data, id_provincia)
    if not prices_gasoline_by_type:
        return NONE_STRING
    average_price = np.mean(prices_gasoline_by_type)
    formatted_number = "{:.2f}".format(average_price)
    return formatted_number

def return_params(id_provincia):
    data = call_api_data()
    prices_gasoline_by_type = get_prices_by_province_using_pandas(data ,id_provincia)
    return prices_gasoline_by_type

def calculate_avg_with_pandas(gasoline_type, id_provincia):
    """
    Extracts and calculates the average price of a specific gasoline type from the data.

    Args:
        gasoline_type (str): The type of gasoline to filter prices.
        data (dict): The data containing gasoline prices.
        id_provincia (str): The ID of the province to filter prices.

    Returns:
        float: The average price for the specified gasoline type and province, or None if no valid prices are found.
    """
    data = call_api_data()
    print("HELLO")

    # Convert data to DataFrame
    df = pd.DataFrame(data[LIST_PRICES_NAME])
    
    # Replace commas with dots and convert to float
    df[gasoline_type] = df[gasoline_type].astype(str).str.replace(COMMA_STRING, DOT_STRING)
    
    # Convert the gasoline type column to numeric, coercing errors to NaN
    df[gasoline_type] = pd.to_numeric(df[gasoline_type], errors='coerce')  
      
    # Filter by province if id_provincia is not "0"
    if id_provincia != ZERO_STRING:
        df = df[df[ID_PROVINCIA_STRING] == id_provincia]
    
    # Drop rows with NaN values in the gasoline_type column
    df = df.dropna(subset=[gasoline_type])
    
    # Calculate the average price
    if df.empty:
        return None  # Return None if no valid prices are found
    else:
        return df[gasoline_type].mean()
