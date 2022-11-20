import { useContext, useState, useEffect } from 'react';
import { BasicSchoolInformationContext } from '../contexts';
import { useJsonFile } from '../hooks';

// types and classes
import { $TSFixMe } from '../types';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
} from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const SchoolsMap = () => {
	const basicSchoolInformation = useContext(BasicSchoolInformationContext);
	// @ts-expect-error
	const [makeCall, { data }] = useJsonFile('school_location_information.json');
	const [schoolsWithLatLng, setSchoolsWithLatLng] = useState<$TSFixMe>();

	// load the location data
	useEffect(() => {
		(async () => {
			// @ts-expect-error
			makeCall();
		})();
	}, []);

	// get the school data once everything else is loaded
	useEffect(() => {
		if (!data || !basicSchoolInformation) {
			return;
		}
		console.log({ data });
		const latLngInfo = Object.entries(data)
			.map(([locationSchoolCode, otherLocationInfo]) => {
				const matchingBasicInformation = Object.entries(basicSchoolInformation).find(
					([basicSchoolInformationSchoolCode, basicInformation]: Array<$TSFixMe>) => {
						return locationSchoolCode === basicSchoolInformationSchoolCode;
					}
				);
				if (!matchingBasicInformation) {
					return null;
				}
				console.log({ matchingBasicInformation });
				return {
					// @ts-expect-error
					name: matchingBasicInformation[1].schoolName,
					// @ts-expect-error
					lat: otherLocationInfo.lat,
					// @ts-expect-error
					lng: otherLocationInfo.lng
				};
			})
			.filter((elem) => !!elem);
		console.log({ latLngInfo });
		setSchoolsWithLatLng(latLngInfo);
	}, [data, basicSchoolInformation]);

	return (
		<div style={{ flexGrow: 1 }}>
			<h2>Map Test</h2>
			<MapContainer
				center={[51.0447, -114.0719]}
				zoom={13}
				scrollWheelZoom={false}
				style={{ height: '500px', width: '85vw' }}
			>
				{' '}
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>{' '}
				{schoolsWithLatLng
					? Object.values(schoolsWithLatLng).map((school: $TSFixMe) => {
							return (
								<Marker position={[school.lat, school.lng]}>
									<Popup>
										<h3>{school.name}</h3>
										<p>Other info here</p>
									</Popup>
								</Marker>
							);
					  })
					: null}
			</MapContainer>
		</div>
	);
};
