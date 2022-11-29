import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Fuse from "fuse.js";

import { useJsonFile } from "../../hooks";
import { BasicSchoolInformationContext } from "../../contexts";
import { DiplomaExamGraph } from "../Academics";

import { $TSFixMe } from "../../types";

export const IndividualSchoolInformation = () => {
  const basicInformation = useContext(BasicSchoolInformationContext);
  const { id } = useParams();
  const [makeCall, { data }] = useJsonFile(
    "diploma_information_by_school.json"
  );

  const [individualInformation, setIndividualInformation] =
    useState<$TSFixMe>();
  const [individualBasicInformation, setIndividualBasicInformation] = useState<
    Array<$TSFixMe>
  >([]);
  const [examOptions, setExamOptions] = useState<Array<string>>([]);
  const [selectedExam, setSelectedExam] = useState<string>("");

  useEffect(() => {
    if (basicInformation && id) {
      const result = Object.entries(basicInformation).find(
        ([code, _info]) => code === id
      );
      if (result) {
        const [_code, individual] = result;
        setIndividualInformation(individual);
      }
    }
  }, [basicInformation, id]);

  // set the basic information as soon as we have it
  useEffect(() => {
    if (individualInformation) {
      setIndividualBasicInformation([
        [
          "Address",
          [
            individualInformation.schoolAddress1,
            individualInformation.schoolAddress2,
            individualInformation.schoolCity,
            individualInformation.schoolProvince,
            individualInformation.schoolPostalCode,
          ].join(", "),
        ],
        [
          "Phone Number",
          individualInformation.schoolPhone ? (
            <a href={`tel:${individualInformation.schoolPhone}`}>
              {individualInformation.schoolPhone}
            </a>
          ) : undefined,
        ],
      ]);
    }
  }, [individualInformation]);

  // once they select a school, set the exams that they have written
  useEffect(() => {
    if (!id || !data) {
      setExamOptions([]);
      return;
    }
    // @ts-expect-error
    const schoolInfo = data.filter(
      (examInformation: $TSFixMe) => examInformation.school_code === id
    );
    if (schoolInfo.length === 0) {
      setExamOptions([]);
      return;
    }
    setExamOptions(
      Array.from(
        new Set(
          schoolInfo
            // @ts-expect-error
            .filter((info) => info.exam_mean !== null)
            // @ts-expect-error
            .map((info) => info.exam)
        )
      )
      // Object.entries(schoolInfo)
      //   .filter((schoolEntry) => {
      //     const [exam, results] = schoolEntry;
      //     // @ts-expect-error
      //     return !Object.values(results).every((result) => result === "");
      //   })
      //   .map(([exam, results]) => exam)
    );
  }, [id, data]);

  // load the exam information as soon as you load
  useEffect(() => {
    makeCall();
  }, []);

  return individualInformation ? (
    <section id="individual-information">
      <h2>{individualInformation.schoolName}</h2>
      <section id="basic-information">
        <h3>Basic Information</h3>
        <ul>
          {individualBasicInformation
            .filter(([_label, info]) => !!info)
            .map(([label, info]) => {
              return (
                <li key={label}>
                  <span className="label">{label}</span>:{" "}
                  <span className="info">{info}</span>
                </li>
              );
            })}
        </ul>
      </section>
      <section>
        <h3>Academics</h3>
        <section>
          <h4>Diploma Exam Results</h4>
          {examOptions.length > 0 ? (
            <>
              <Autocomplete
                id="exam"
                onChange={(_e, newValue: $TSFixMe) => {
                  setSelectedExam(newValue.value);
                }}
                renderInput={(options: $TSFixMe) => (
                  <TextField {...options} label="Choose Exam" />
                )}
                options={[
                  { value: "", label: "None" },
                  ...examOptions
                    .map((option) => ({
                      value: option,
                      label: option,
                    }))
                    .sort((a, b) => a.label.localeCompare(b.label)),
                ]}
                isOptionEqualToValue={(option, value) =>
                  option.value === value.value
                }
              />
              <DiplomaExamGraph code={id} exam={selectedExam} />
            </>
          ) : (
            <p>No Diploma Exam Information Found</p>
          )}
        </section>
      </section>
      <section>
        <h3>Athletics</h3>
        <p>No athletic information found</p>
      </section>
      <section>
        <h3>Accessibility</h3>
        <p>No accessibility information found</p>
      </section>
    </section>
  ) : (
    <h2>No Information Found</h2>
  );
};
