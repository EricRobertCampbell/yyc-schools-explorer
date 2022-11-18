import { useState, useEffect } from 'react';
import './App.css';
import { $TSFixMe } from './types';
import { Home } from './components';
import { BasicSchoolInformationProvider } from './contexts';
import { useJsonFile } from './hooks';
import { Outlet, NavLink, useLoaderData, useNavigation } from 'react-router-dom';

export async function loader() {
	const schools: { [code: string]: { schoolName: string; [key: string]: unknown } } = {
		'1': { schoolName: 'First School' },
		'2': { schoolName: 'Second School' },
		'3': { schoolName: 'Third School' }
	};
	return { schools };
}

function App() {
	// @ts-expect-error
	const { schools } = useLoaderData();
	const navigation = useNavigation();
	const [Component, setComponent] = useState<$TSFixMe>(() => () => <Home />);
	// @ts-expect-error
	const [makeCall, { data }] = useJsonFile('basic_school_information.json');

	useEffect(() => {
		(async () => {
			// @ts-expect-error
			await makeCall();
		})();
	}, []);

	return (
		<BasicSchoolInformationProvider value={data}>
			<div className="App">
				<header>
					<h1>Alberta School Explorer</h1>
					<nav>
						<ul>
							{Object.values(schools).length > 0 ? (
								Object.entries(schools).map(([code, information]) => {
									return (
										<li>
											<NavLink
												className={({ isActive, isPending }) => {
													return isActive
														? 'active'
														: isPending
														? 'pending'
														: '';
												}}
												to={`schools/${code}`}
											>
												{
													// @ts-expect-error
													information.schoolName
												}
											</NavLink>
										</li>
									);
								})
							) : (
								<p>No Schools Found</p>
							)}
						</ul>
					</nav>
				</header>
				<div id="main" className={navigation === 'loading' ? 'loading' : ''}>
					<Outlet />
				</div>
			</div>
		</BasicSchoolInformationProvider>
	);
}

export default App;
