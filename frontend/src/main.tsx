import React from 'react';
import ReactDOM from 'react-dom/client';
import App, { loader as rootLoader } from './App';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import './index.css';

import { ErrorPage } from './components/error';
import {
	IndividualSchoolInformation,
	loader as individualSchoolInformationLoader
} from './components/IndividualSchoolInformation';
import { Home } from './components/Home';

const ListOfSchools = () => {
	return <h2>Shool List</h2>;
};

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		loader: rootLoader,
		children: [
			{
				errorElement: <ErrorPage />,
				children: [
					{ index: true, element: <Home /> },
					{
						path: 'schools',
						children: [
							{ index: true, element: <ListOfSchools /> },
							{
								path: ':id',
								element: <IndividualSchoolInformation />,
								loader: individualSchoolInformationLoader
							}
						]
					}
				]
			}
		]
	}
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
