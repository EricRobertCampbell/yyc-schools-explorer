from dataclasses import dataclass, field
import requests
import traceback
import time
from random import uniform

@dataclass
class GeocodeInformation:
    """ Class to represent the returned information from a geocode request"""
    google_place_id: str = field(default="")
    formatted_address: str = field(default="")
    lat: (float, None) = field(default=None)
    lng: (float, None) = field(default=None)

def get_geocode_information(address: str, key: str) -> GeocodeInformation:
    """ Make the geocoding request, and return the relevant information """
    try:
        sleep_time = uniform(1, 2)
        print(f"About to sleep for {sleep_time:.2f} seconds")
        time.sleep(sleep_time)
        print(f"Making call for {address}")
        url = f"https://maps.googleapis.com/maps/api/geocode/json?address={address}&key={key}"
        response = requests.get(url)
        json = response.json()
        if 'results' not in json:
            print(f"Returned response had no results:", json)
            return None
        result = json['results'][0]
        place_id = result['place_id']
        formatted_address = result['formatted_address']
        lat = result['geometry']['location']['lat']
        lng = result['geometry']['location']['lng']
        print(f"Done with {address}")
        return GeocodeInformation(google_place_id=place_id, formatted_address=formatted_address, lat=lat, lng=lng)
    except Exception as e:
        print(f"Error when getting geocode result for {address=}. Error:", e)
        traceback.print_exc()
        return None
