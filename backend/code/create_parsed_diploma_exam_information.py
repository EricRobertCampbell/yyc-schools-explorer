#!/usr/bin/env python3

""" Parse the diploma exam information """

import pandas as pd
import numpy as np
import json
import re

from utilities import replace_na

def main() -> None:
    df = pd.read_excel('../sources/diploma-multiyear-sch-list-annual.xlsx', dtype=str)
    exam_info = []
    for index, row in df.iterrows():
        for year in range(2015, 2019 + 1):
            exam_info.append(dict(year=year, school_code=row['School Code'], exam=row['Diploma Course'], exam_mean=row[f"{year} Sch Exam Average %"], exam_std=row[f"{year} Sch Exam Standard Deviation %"]))
    exam_info_df = pd.DataFrame(exam_info)

    PARSED_JSON_FILE_LOCATION = "../../frontend/public/data/diploma_information_by_school.json"
    with open(PARSED_JSON_FILE_LOCATION, "w") as json_file:
        json_string = exam_info_df.to_json(orient="records")
        json_file.write(json_string)
    print(f"Done writing to {PARSED_JSON_FILE_LOCATION}")
if __name__ == "__main__":
    main()
