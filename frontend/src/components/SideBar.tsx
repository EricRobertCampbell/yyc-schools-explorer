import { useCallback, useEffect, useState, useContext } from 'react';
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
import { useJsonFile } from '../hooks';
import { BasicSchoolInformationContext } from '../contexts';

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

const JsonLoadTest = () => {
	const [schoolData, setSchoolData] = useState<null | unknown>(null);
	// @ts-expect-error
	const [loadData, { loading, error, data }] = useJsonFile('test.json');

	useEffect(() => {
		(async () => {
			// @ts-expect-error
			await loadData();
		})();
		/* (async () => { */
		/* 	const result = await fetch('/data/test.json'); */
		/* 	const json = await result.json(); */
		/* 	setSchoolData(json); */
		/* })(); */
	}, []);

	return (
		<>
			<h2>Testing Ability to Load JSON Data</h2>
			<pre>{JSON.stringify({ loading, error, data }, null, 4)}</pre>
		</>
	);
};

type SchoolData = any;
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
			// @ts-expect-error
			const labels = schoolData.results.map(({ year }) => year);
			const dataset = {
				label: schoolData.name,
				data: labels.map(
					// @ts-expect-error
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

const SchoolMapDisplay = () => {
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

const ContextTest = () => {
	const data = useContext(BasicSchoolInformationContext);
	if (!data) {
		return (
			<>
				<h2>Basic School Information</h2>
				<p>No school information found</p>
			</>
		);
	}
	return (
		<>
			<h2>Basic School Information</h2>
			<table>
				<thead>
					<tr>
						{[
							'School Code',
							'Name',
							'Address 1',
							'Address 2',
							'City',
							'Province',
							'Postal Code',
							'Phone'
						].map((header) => (
							<th>{header}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{Object.entries(data).map(
						([
							schoolCode,
							{
								// @ts-expect-error
								schoolName,
								// @ts-expect-error
								schoolAddress1,
								// @ts-expect-error
								schoolAddress2,
								// @ts-expect-error
								schoolCity,
								// @ts-expect-error
								schoolProvince,
								// @ts-expect-error
								schoolPostalCode,
								// @ts-expect-error
								schoolPhone
							}
						]) => {
							return (
								<tr>
									<td>{schoolCode}</td>
									<td>{schoolName}</td>
									<td>{schoolAddress1}</td>
									<td>{schoolAddress2}</td>
									<td>{schoolCity}</td>
									<td>{schoolProvince}</td>
									<td>{schoolPostalCode}</td>
									<td>{schoolPhone}</td>
								</tr>
							);
						}
					)}
				</tbody>
			</table>
		</>
	);
};

const DiplomaExamResults = () => {
	const basicSchoolInformation = useContext(BasicSchoolInformationContext);
	// @ts-expect-error
	const [makeCall, { data }] = useJsonFile('diploma_information_by_school.json');
	const [schoolOptions, setSchoolOptions] = useState<Array<{ code: number; name: string }>>([]);
	const [selectedSchoolCode, setSelectedSchoolCode] = useState<string>('');
	const [examOptions, setExamOptions] = useState<Array<string>>([]);
	const [selectedExam, setSelectedExam] = useState<string>('');
	const [graphData, setGraphData] = useState<{ [year: string]: string }>({});

	// When the data is loaded, set the schools as the options in the dropdown
	useEffect(() => {
		if (!basicSchoolInformation || !data) {
			return;
		}
		setSchoolOptions(
			// @ts-expect-error
			Object.keys(data)
				.map((schoolCode) => {
					const schoolInfo = basicSchoolInformation[schoolCode];
					const schoolName = schoolInfo ? schoolInfo['schoolName'] : undefined;

					const option = {
						code: schoolCode,
						name: schoolName
					};
					console.log({ option });
					return option;
				})
				.filter((option) => !!option.name)
		);
	}, [basicSchoolInformation, data]);

	// once they select a school, set the exams that they have written
	useEffect(() => {
		if (!selectedSchoolCode) {
			setExamOptions([]);
			return;
		}
		const schoolInfo = data[selectedSchoolCode];
		if (!schoolInfo) {
			setExamOptions([]);
			return;
		}
		console.log({ schoolInfo });
		setExamOptions(Object.keys(schoolInfo));
	}, [selectedSchoolCode]);

	// once they have selected a school and exam, load in the data
	useEffect(() => {
		if (!basicSchoolInformation || !selectedSchoolCode || !selectedExam) {
			setGraphData({});
			return;
		}
		const examInfo = data[selectedSchoolCode][selectedExam];
		console.log(selectedExam, data[selectedSchoolCode]);
		setGraphData(
			Object.entries(examInfo).reduce((acc, [year, average]) => {
				// @ts-expect-error
				acc[year] = average === '' ? undefined : average;
				return acc;
			}, {})
		);
	}, [selectedSchoolCode, selectedExam]);

	// load the diploma exam data
	useEffect(() => {
		(async () => {
			// @ts-expect-error
			makeCall();
		})();
	}, []);

	if (!basicSchoolInformation || !data) {
		return null;
	}
	return (
		<>
			<h2>Diploma Exam Results</h2>
			<label>
				Choose School <br />
				<select
					name="school"
					id="school"
					onChange={(e) => {
						setSelectedExam('');
						setSelectedSchoolCode(e.target.value);
					}}
					value={selectedSchoolCode}
				>
					<option value="" key="null">
						None
					</option>
					{schoolOptions.map((option) => (
						<option key={option.code} value={option.code}>
							{option.name}
						</option>
					))}
				</select>
			</label>
			<br />
			<label>
				Choose Exam <br />
				<select
					id="exam"
					name="exam"
					onChange={(e) => {
						setSelectedExam(e.target.value);
					}}
					value={selectedExam}
				>
					<option key="null" value={''}>
						None
					</option>
					{examOptions.map((option) => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
			</label>
			<Line
				data={{
					labels: Object.keys(graphData),
					datasets: [
						{
							label: 'Exam Results',
							data: Object.values(graphData).map((avg) => Number(avg)),
							borderColor: 'rgb(255, 99, 132)',
							backgroundColor: 'rgba(255, 99, 132, 0.5)'
						}
					]
				}}
				options={{ responsive: true }}
			/>
		</>
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
						['School Map', SchoolMapDisplay],
						['Basic School Information', ContextTest],
						['Diploma Exam Results', DiplomaExamResults]
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
