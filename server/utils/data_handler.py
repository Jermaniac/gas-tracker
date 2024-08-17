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
FUEL_NAMES = config.FUEL_NAMES
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
    processed_data = process_gas_data(raw_data, id_provincia)
    return processed_data

def sanitize_value(value):
    if pd.isna(value) or value == float('inf') or value == -float('inf'):
        return None
    return round(value, 3)

def sanitize_dataframe(df):
    numeric_columns = df.select_dtypes(include='number').columns
    df[numeric_columns] = df[numeric_columns].fillna(0)
    return df

def process_gas_data(data, id_provincia):
    df = pd.DataFrame(data[LIST_PRICES_NAME])

    filtered_df = df[df[ID_PROVINCIA_STRING] == id_provincia].copy()

    averages = calculate_averages(filtered_df, GASOLINE_TYPES)
    
    filtered_df = sanitize_dataframe(filtered_df)

    best_stations = {}

    # Process each fuel type
    for fuel_type in GASOLINE_TYPES:
        if fuel_type in filtered_df.columns:
            # Convert the fuel type's price column to numeric
            filtered_df[fuel_type] = pd.to_numeric(filtered_df[fuel_type].replace(EMPTY_STRING, float('nan')), errors='coerce')

            # Drop rows where the price is NaN or zero
            valid_df = filtered_df[filtered_df[fuel_type].notna() & (filtered_df[fuel_type] > 0)]

            # Check if there are any valid entries
            if not valid_df.empty:
                # Sort by the fuel type's price column, ascending (lowest price first)
                sorted_df = valid_df.sort_values(by=fuel_type, ascending=True)
                
                # Select top 5 stations with the lowest prices
                top_stations = sorted_df.head(5).to_dict(orient='records')
                best_stations[FUEL_NAMES[fuel_type]] = top_stations

    # Construct the final result
    result = {
        "averages": averages,
        "bestStations": best_stations
    }

    return result

def calculate_averages(df, column_names):
    averages = {}
    for column in column_names:
        df[column] = df[column].astype(str).str.replace(COMMA_STRING, DOT_STRING)
        df[column] = pd.to_numeric(df[column], errors='coerce')
        mean_value = df[column].mean()
        sanitized_mean_value = sanitize_value(mean_value)
        averages[CUSTOM_NAMES[column]] = sanitize_value(sanitized_mean_value)
    return averages
