import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BasicSchoolInformationContext } from '../../contexts';

import './ListOfSchools.css';

export const ListOfSchools = () => {
	const data = useContext(BasicSchoolInformationContext);
	const navigate = useNavigate();
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
								<tr onClick={() => navigate(`${schoolCode}`)}>
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
