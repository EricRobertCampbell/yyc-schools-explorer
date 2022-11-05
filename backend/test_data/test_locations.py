#!/usr/bin/env python3
import json

TARGET_FILE = "../../frontend/public/data/locations_test.json"

def main():
    test_data = dict(
        schools=[
            dict(name="Test School A", location=dict(lat=51.0447, lng=-114.0719), info="This is the first test school!"),
            dict(name="Test School B", location=dict(lat=51.0547, lng=-114.1719), info="This is the second test school!"),
        ]
    )
    with open(TARGET_FILE, 'w') as target_file:
        json.dump(test_data, target_file)
    print(f"Done writing to {TARGET_FILE}")

if __name__ == "__main__":
    main()

