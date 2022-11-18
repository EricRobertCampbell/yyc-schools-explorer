import { useLoaderData } from 'react-router-dom';
import { $TSFixMe } from '../../types';

export async function loader({ params }: { params: $TSFixMe }) {
	const schools = {
		'1': { schoolName: 'First School' },
		'2': { schoolName: 'Second School' },
		'3': { schoolName: 'Third School' }
	};

	return params.id in schools
		? // @ts-expect-error
		  Object.entries(schools).find(([code, _information]) => code === params.id)[1]
		: null;
}

export const IndividualSchoolInformation = () => {
	const information = useLoaderData();
	return (
		<>
			<h2>Individual School Information</h2>
			<p>Here is some information about the school</p>
			<pre>{JSON.stringify(information, null, 4)}</pre>
		</>
	);
};
