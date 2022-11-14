#!/usr/bin/env python3

""" Parse the diploma exam information """

import pandas as pd
import numpy as np
import json
import re

from utilities import replace_na

def main() -> None:
    df = pd.read_excel('../sources/diploma-multiyear-sch-list-annual.xlsx', dtype=str)
    parsed_information = dict()
    all_courses = df['Diploma Course'].unique()
    for course in all_courses:
        by_course = df[df['Diploma Course'] == course]
        for index, row in by_course.iterrows():
            school_code = row['School Code']
            if str(school_code) == 'nan':
                break
            if school_code not in parsed_information:
                parsed_information[school_code] = dict()
            parsed_information[school_code][course] = dict()
            for year in range(2015, 2019+1):
                parsed_information[school_code][course][year] = replace_na(row[f"{year} Sch Exam Average %"])
    print(parsed_information)

    PARSED_JSON_FILE_LOCATION = "../../frontend/public/data/diploma_information_by_school.json"
    with open(PARSED_JSON_FILE_LOCATION, "w") as json_file:
        json.dump(parsed_information, json_file)
    print(f"Done writing to {PARSED_JSON_FILE_LOCATION}")
if __name__ == "__main__":
    main()
