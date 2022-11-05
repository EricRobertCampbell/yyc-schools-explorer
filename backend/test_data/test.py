#!/usr/bin/env python3
import json

TARGET_FILE = "../../frontend/public/data/test.json"

def main():
    test_data = dict(
        name="Test School",
        results=[
            dict(
                year=2015,
                average=90.5,
            ),
            dict(
                year=2016,
                average=89.5,
            ),
            dict(
                year=2017,
                average=100,
            ),
            dict(
                year=2018,
                average=85,
            ),
            dict(
                year=2019,
                average=83.4,
            ),
            dict(
                year=2020,
                average=90.3,
            ),
        ]
    )
    with open(TARGET_FILE, 'w') as target_file:
        print(f"Opened test file")
        json.dump(test_data, target_file)
    print(f"Done writing to {TARGET_FILE}")

if __name__ == "__main__":
    main()

