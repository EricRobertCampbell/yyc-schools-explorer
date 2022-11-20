import { useContext, useState, useEffect } from 'react';
import { BasicSchoolInformationContext } from '../../contexts';
import { useJsonFile } from '../../hooks';
import { DiplomaExamGraph } from './DiplomaExamGraph';

// types and classes
import { $TSFixMe } from '../../types';

export const DiplomaExamResults = () => {
	const basicSchoolInformation = useContext(BasicSchoolInformationContext);
	const [makeCall, { data }] = useJsonFile('diploma_information_by_school.json');
	const [schoolOptions, setSchoolOptions] = useState<Array<{ code: number; name: string }>>([]);
	const [selectedSchoolCode, setSelectedSchoolCode] = useState<string>('');
	const [examOptions, setExamOptions] = useState<Array<string>>([]);
	const [selectedExam, setSelectedExam] = useState<string>('');

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
					/*console.log({ option }); */
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
		// @ts-expect-error
		const schoolInfo = data[selectedSchoolCode];
		if (!schoolInfo) {
			setExamOptions([]);
			return;
		}
		console.log({ schoolInfo });
		setExamOptions(
			Object.entries(schoolInfo)
				.filter((schoolEntry) => {
					const [exam, results] = schoolEntry;
					// @ts-expect-error
					return !Object.values(results).every((result) => result === '');
				})
				.map(([exam, results]) => exam)
		);
	}, [selectedSchoolCode]);

	// load the diploma exam data
	useEffect(() => {
		(async () => {
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
			<DiplomaExamGraph code={selectedSchoolCode} exam={selectedExam} />
		</>
	);
};
