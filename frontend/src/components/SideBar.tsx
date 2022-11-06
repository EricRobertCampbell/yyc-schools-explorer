import { useCallback, useEffect, useState } from 'react';
import { Home } from './Home';
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

// assets, &c.
import './SideBar.css';
import testImage from '../assets/images/chris-liverani-ViEBSoZH6M4-unsplash.jpg';

// types and classes
import type { $TSFixMe } from '../types';
import { Line } from 'react-chartjs-2';

const FirstComponent = () => {
	return (
		<>
			<p>I am the first component</p>
		</>
	);
};
const SecondComponent = () => {
	return (
		<>
			<h2>Second Component</h2>
			<figure>
				<img
					style={{ width: '100%', height: 'auto' }}
					src={testImage}
					alt="taking a test"
				/>
				<figcaption>
					Photo by{' '}
					<a href="https://unsplash.com/@chrisliverani?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
						Chris Liverani
					</a>{' '}
					on{' '}
					<a href="https://unsplash.com/s/photos/test?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
						Unsplash
					</a>{' '}
				</figcaption>
			</figure>
		</>
	);
};
const ThirdComponent = () => {
	return (
		<>
			<h2>Third Component</h2>
			<p>Lorem ipsum</p>
		</>
	);
};

interface SchoolData {
	name: string;
	results: Array<{ year: number; average: number }>;
}
const JsonLoadTest = () => {
	const [schoolData, setSchoolData] = useState<null | SchoolData>(null);

	useEffect(() => {
		(async () => {
			const result = await fetch('/data/test.json');
			const json = await result.json();
			setSchoolData(json);
		})();
	}, []);

	return (
		<>
			<h2>Testing Ability to Load JSON Data</h2>
			{schoolData ? <pre>{JSON.stringify(schoolData, null, 4)}</pre> : <p>No Data Loaded</p>}
		</>
	);
};

const GraphTest = () => {
	const [schoolData, setSchoolData] = useState<null | SchoolData>(null);
	const [data, setData] = useState<$TSFixMe>({ datasets: [] });

	useEffect(() => {
		(async () => {
			const result = await fetch('/data/test.json');
			const json = await result.json();
			setSchoolData(json);
		})();
	}, []);

	// when the data loads, create the graph
	useEffect(() => {
		if (schoolData) {
			const labels = schoolData.results.map(({ year }) => year);
			const dataset = {
				label: schoolData.name,
				data: labels.map(
					(year) => schoolData.results.find((result) => result.year === year)?.average
				),
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)'
			};
			const parsedData = {
				labels,
				datasets: [dataset]
			};
			console.log({ parsedData });
			setData(parsedData);
		}
	}, [schoolData]);

	return (
		<div style={{ flexGrow: 1 }}>
			<h2>Graph Test</h2>
			<Line data={data} options={{ responsive: true }} />
		</div>
	);
};

const MapTest = () => {
	const [schoolLocationData, setSchoolLocationData] = useState<$TSFixMe>(null);

	useEffect(() => {
		(async () => {
			const result = await fetch('/data/locations_test.json');
			const json = await result.json();
			setSchoolLocationData(json);
		})();
	}, []);
	return (
		<div style={{ flexGrow: 1 }}>
			<h2>Map Test</h2>
			{schoolLocationData ? (
				<MapContainer
					center={[
						schoolLocationData.schools[0].location.lat,
						schoolLocationData.schools[0].location.lng
					]}
					zoom={13}
					scrollWheelZoom={false}
					style={{ height: '500px', width: '85vw' }}
				>
					{' '}
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>{' '}
					{schoolLocationData.schools.map((school: $TSFixMe) => (
						<Marker position={[school.location.lat, school.location.lng]}>
							<Popup>
								<h3>{school.name}</h3>
								<p>{school.info}</p>
							</Popup>
						</Marker>
					))}
				</MapContainer>
			) : (
				<p>No location data found</p>
			)}
		</div>
	);
};
interface SideBarProps {
	setComponent: $TSFixMe;
}
export const SideBar = ({ setComponent }: SideBarProps) => {
	const [selectedOption, setSelectedOption] = useState<string>('Home');
	const actualSetComponent = useCallback(
		(func: () => any) => {
			setComponent(() => func);
		},

		[setComponent]
	);
	return (
		<div className="sidebar">
			<ul>
				{(
					[
						['Home', Home],
						['First Component', FirstComponent],
						['Second Component', SecondComponent],
						['Third Component', ThirdComponent],
						['JSON Load Test', JsonLoadTest],
						['Graph Test', GraphTest],
						['Map Test', MapTest]
					] as Array<[string, $TSFixMe]>
				).map(([label, Component]) => (
					<li key={label}>
						<button
							type="button"
							className={label === selectedOption ? 'selected' : ''}
							onClick={() => {
								setSelectedOption(label);
								actualSetComponent(Component);
							}}
						>
							{label}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};
