import { useContext, useState, useEffect } from "react";
import { BasicSchoolInformationContext } from "../contexts";
import { useJsonFile } from "../hooks";

// types and classes
import { $TSFixMe } from "../types";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Link } from "react-router-dom";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const SchoolsMap = () => {
  const basicSchoolInformation = useContext(BasicSchoolInformationContext);
  const [makeCall, { data }] = useJsonFile("school_location_information.json");
  const [schoolsWithLatLng, setSchoolsWithLatLng] = useState<{
    [code: string]: $TSFixMe;
  }>({});

  // load the location data
  useEffect(() => {
    (async () => {
      makeCall();
    })();
  }, []);

  // get the school data once everything else is loaded
  useEffect(() => {
    if (!data || !basicSchoolInformation) {
      return;
    }
    console.log({ data });
    const latLngInfo = Object.entries(data).reduce(
      // @ts-expect-error
      (
        acc: typeof schoolsWithLatLng,
        [locationSchoolCode, otherLocationInfo]
      ) => {
        const matchingBasicInformation = Object.entries(
          basicSchoolInformation
        ).find(
          ([
            basicSchoolInformationSchoolCode,
            _basicInformation,
          ]: Array<$TSFixMe>) => {
            return locationSchoolCode === basicSchoolInformationSchoolCode;
          }
        );
        if (!matchingBasicInformation) {
          return null;
        }
        console.log({ matchingBasicInformation });
        acc[locationSchoolCode] = {
          // @ts-expect-error
          name: matchingBasicInformation[1].schoolName,
          lat: otherLocationInfo.lat,
          lng: otherLocationInfo.lng,
        };
        return acc;
      },
      {}
    );
    // console.log({ latLngInfo });
    setSchoolsWithLatLng(latLngInfo);
  }, [data, basicSchoolInformation]);

  return (
    <div style={{ flexGrow: 1 }}>
      <h2>Schools</h2>
      <MapContainer
        center={[51.0447, -114.0719]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "500px", width: "85vw" }}
      >
        {" "}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />{" "}
        {schoolsWithLatLng
          ? Object.entries(schoolsWithLatLng).map(
              ([code, school]: [string, $TSFixMe]) => {
                return (
                  <Marker position={[school.lat, school.lng]}>
                    <Popup>
                      <h3>{school.name}</h3>
                      <Link to={`/schools/${code}`}>
                        Additional Information
                      </Link>
                    </Popup>
                  </Marker>
                );
              }
            )
          : null}
      </MapContainer>
    </div>
  );
};
