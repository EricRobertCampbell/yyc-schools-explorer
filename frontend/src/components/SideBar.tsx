import { useCallback, useEffect, useState } from 'react';
import { Home } from './Home';

// assets, &c.
import './SideBar.css';
import testImage from '../assets/images/chris-liverani-ViEBSoZH6M4-unsplash.jpg';

// types and classes
import type { $TSFixMe } from '../types';

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
			console.log({ result });
			const json = await result.json();
			console.log({ json });
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
interface SideBarProps {
	setComponent: $TSFixMe;
}
export const SideBar = ({ setComponent }: SideBarProps) => {
	const actualSetComponent = useCallback(
		(func: () => any) => {
			setComponent(() => func);
		},

		[setComponent]
	);
	const oldactualSetComponent = (func: () => any) => {
		setComponent(() => func);
	};
	return (
		<div className="sidebar">
			<ul>
				<li key="home">
					<button
						type="button"
						onClick={() => {
							actualSetComponent(Home);
						}}
					>
						Home
					</button>
				</li>
				<li key="first">
					<button
						type="button"
						onClick={() => {
							actualSetComponent(FirstComponent);
						}}
					>
						First Component
					</button>
				</li>
				<li key="second">
					<button
						type="button"
						onClick={() => {
							actualSetComponent(SecondComponent);
						}}
					>
						Second Component
					</button>
				</li>
				<li key="third">
					<button
						type="button"
						onClick={() => {
							actualSetComponent(ThirdComponent);
						}}
					>
						Third Component
					</button>
				</li>
				<li key="jsonTest">
					<button
						type="button"
						onClick={() => {
							actualSetComponent(JsonLoadTest);
						}}
					>
						JSON Load Test
					</button>
				</li>
			</ul>
		</div>
	);
};
