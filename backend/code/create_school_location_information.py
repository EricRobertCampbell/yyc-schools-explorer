#!/usr/bin/env python3
from dotenv import dotenv_values
from pathlib import Path
import pandas as pd
import numpy as np
import re
import json
from urllib.parse import quote_plus
import traceback

import utilities.constants as constants
from utilities import get_geocode_information, replace_na

SCHOOL_LOCATION_INFORMATION_CSV = Path('../parsed_data/school_location_information.csv')
SCHOOL_LOCATION_INFORMATION_JSON = constants.JSON_FILE_TARGET_LOCATION / 'school_location_information.json'

VARS = dotenv_values('.env')
GOOGLE_API_KEY = VARS['GOOGLE_API_KEY']

def main() -> None:
    # load in the basic information
    df = pd.read_excel("../sources/authority_and_school.xlsx", header=2, na_values="", dtype=str)
    df['google_place_id'] = ''
    df['lat'] = ''
    df['lng'] = ''
    print(f"Done loading in basic school information")

    # load in the already parsed schools
    locations_df = None
    try:
        locations_df = pd.read_csv(f'{ SCHOOL_LOCATION_INFORMATION_CSV }', dtype=str)
        for _, row in locations_df.iterrows():
            for col in ['google_place_id', 'lat', 'lng']:
                df.loc[df['School Code'] == row['School Code'], col] = row[col]
    except Exception as e:
        print(f"Error whel loading existing location information:", e)
        traceback.print_exc()
    print(f"Done loading and incorporating existing location information")

    # make whatever geocoding calls
    with_geocode = dict()
    for index, row in df.iterrows():
        print(f"parsing row for {row['School Name']}")
        school_code = row['School Code']
        components = [ row["School Address1"], row["School Address2"], row['School City'], row['School Province'], "Canada", row['School Postal Code'] ]
        address = " ".join([replace_na(component) for component in components ])
        formatted_address = re.sub(r"\s+", " ", address)
        if not formatted_address:
            print(f"Not making call - formatted address was {formatted_address}, which is falsy and hence unlikely to provide a good search result")
        safe_address = quote_plus(formatted_address)
        if pd.isnull( row['lat']) or pd.isnull(row['lng']) or pd.isnull(row['google_place_id']):
            result = get_geocode_information(address=safe_address, key=GOOGLE_API_KEY)
            if result:
                with_geocode[school_code] = dict(formatted_address=result.formatted_address, lat=result.lat, lng=result.lng)
                df.iloc[ index ]['google_place_id'] = result.google_place_id
                df.iloc[ index ]['lat'] = result.lat
                df.iloc[ index ]['lng'] = result.lng
                print(f"Successfully got location information for {row['School Name']}")
        else:
            print(f"row already has location information - skipping")

    # write the results to the CSV
    df.to_csv(SCHOOL_LOCATION_INFORMATION_CSV, columns=['School Code', 'google_place_id', 'lat', 'lng'], index=False)
    print(f"Done writing CSV file to {SCHOOL_LOCATION_INFORMATION_CSV}")

    # generate the JSON
    with open(SCHOOL_LOCATION_INFORMATION_JSON, "w") as file:
        json.dump(with_geocode, file)
    print(f"Done writing JSON file to {SCHOOL_LOCATION_INFORMATION_JSON}")

if __name__ == "__main__":
    main()
