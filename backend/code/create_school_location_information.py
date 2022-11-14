#!/usr/bin/env python3
from dotenv import dotenv_values
from pathlib import Path
import pandas as pd
import numpy as np
import re
import json
from urllib.parse import quote_plus

import utilities.constants as constants
from utilities import get_geocode_information, replace_na

SCHOOL_LOCATION_INFORMATION_CSV = Path('../parsed_data/school_location_information.csv')
SCHOOL_LOCATION_INFORMATION_JSON = constants.JSON_FILE_TARGET_LOCATION / 'school_location_information.json'

VARS = dotenv_values('.env')
GOOGLE_API_KEY = VARS['GOOGLE_API_KEY']

def main() -> None:
    print(GOOGLE_API_KEY)

    # load in the basic information
    df = pd.read_excel("../sources/authority_and_school.xlsx", header=2, na_values="", dtype=str)

    # load in the already parsed schools

    # make whatever geocoding calls
    with_geocode = dict()
    for index, row in df.iterrows():
        if index > 5:
            break
        school_code = row['School Code']
        components = [ row["School Address1"], row["School Address2"], row['School City'], row['School Province'], "Canada", row['School Postal Code'] ]
        print(components)
        address = " ".join([replace_na(component) for component in components ])
        formatted_address = re.sub(r"\s+", " ", address)
        safe_address = quote_plus(formatted_address)
        result = get_geocode_information(address=safe_address, key=GOOGLE_API_KEY)
        if result:
            with_geocode[school_code] = dict(formatted_address=result.formatted_address, lat=result.lat, lng=result.lng)

    # write the results to the CSV
    print(f"Done writing CSV file to {SCHOOL_LOCATION_INFORMATION_CSV}")

    # generate the JSON
    with open(SCHOOL_LOCATION_INFORMATION_JSON, "w") as file:
        json.dump(with_geocode, file)
    print(f"Done writing JSON file to {SCHOOL_LOCATION_INFORMATION_JSON}")

if __name__ == "__main__":
    main()
