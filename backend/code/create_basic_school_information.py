#!/usr/bin/env python3

""" Create a JSON file from the school authority information which has basic school information. This should serve as the ssot for e.g. school names and ids"""

import pandas as pd
import numpy as np
import json

def replace_na(arg, replacement_value=""):
    return arg if not pd.isnull(arg) else replacement_value

def main() -> None:
    df = pd.read_excel("../sources/authority_and_school.xlsx", header=2, na_values="")
    relevant_school_information = df[["School Code", "School Name", "School Address1", "School Address2", "School City", "School Province", "School Postal Code", "School Phone"]]
    print(relevant_school_information["School Phone"])

    CSV_FILE_LOCATION = "../parsed_data/basic_school_information.csv"
    relevant_school_information.to_csv(CSV_FILE_LOCATION, index=False)
    print(f"Done writing to {CSV_FILE_LOCATION}")

    school_data_for_json = dict()
    columnObjectPropCorrespondence = {
        "School Name": "schoolName",
        "School Address1": "schoolAddress1",
        "School Address2": 'schoolAddress2',
        "School City": "schoolCity",
        "School Province": "schoolProvince",
        "School Postal Code": "schoolPostalCode",
        "School Phone": "schoolPhone"
    }
    for index, row in df.iterrows():
        school_data_for_json[row['School Code']]={
            key: replace_na(row[column]) for column, key in columnObjectPropCorrespondence.items()
        }
    JSON_FILE_TARGET_LOCATION = "../../frontend/public/data/basic_school_information.json"
    with open(JSON_FILE_TARGET_LOCATION, 'w') as json_file:
        json.dump(school_data_for_json, json_file)
    print(f"Done writing JSON file to {JSON_FILE_TARGET_LOCATION}")




if __name__ == "__main__":
    main()

