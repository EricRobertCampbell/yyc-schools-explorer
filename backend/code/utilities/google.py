from dataclasses import dataclass, field
import requests
import traceback

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
        url = f"https://maps.googleapis.com/maps/api/geocode/json?address={address}&key={key}"
        response = requests.get(url)
        json = response.json()
        print(json)
        if 'results' not in json:
            return None
        result = json['results'][0]
        place_id = result['place_id']
        formatted_address = result['formatted_address']
        lat = result['geometry']['location']['lat']
        lng = result['geometry']['location']['lng']
        return GeocodeInformation(google_place_id=place_id, formatted_address=formatted_address, lat=lat, lng=lng)
    except Exception as e:
        print(f"Error when getting geocode result for {address=}. Error:", e)
        traceback.print_exc()
        return None
