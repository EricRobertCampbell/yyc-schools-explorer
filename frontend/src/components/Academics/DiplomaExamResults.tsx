import { useContext, useState, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Fuse from "fuse.js";
import { BasicSchoolInformationContext } from "../../contexts";
import { useJsonFile } from "../../hooks";
import { DiplomaExamGraph } from "./DiplomaExamGraph";

// types and classes
import { $TSFixMe } from "../../types";

export const DiplomaExamResults = () => {
  const basicSchoolInformation = useContext(BasicSchoolInformationContext);
  const [makeCall, { data }] = useJsonFile(
    "diploma_information_by_school.json"
  );
  const [schoolOptions, setSchoolOptions] = useState<
    Array<{ code: number; name: string }>
  >([]);
  const [selectedSchoolCode, setSelectedSchoolCode] = useState<string>("");
  const [examOptions, setExamOptions] = useState<Array<string>>([]);
  const [selectedExam, setSelectedExam] = useState<string>("");

  // When the data is loaded, set the schools as the options in the dropdown
  useEffect(() => {
    if (!basicSchoolInformation || !data) {
      return;
    }
    setSchoolOptions(
      // @ts-expect-error
      Array.from(
        new Set(
          data
            // @ts-expect-error
            .map((examInfo: $TSFixMe) => examInfo.school_code)
        )
      )
        // @ts-expect-error
        .map((schoolCode: string) => {
          const schoolInfo = basicSchoolInformation[schoolCode];
          const schoolName = schoolInfo ? schoolInfo["schoolName"] : undefined;

          const option = {
            code: schoolCode,
            name: schoolName,
          };
          /*console.log({ option }); */
          return option;
        })
        .filter((option: $TSFixMe) => !!option.name)
    );
  }, [basicSchoolInformation, data]);

  // once they select a school, set the exams that they have written
  useEffect(() => {
    if (!selectedSchoolCode) {
      setExamOptions([]);
      return;
    }
    // @ts-expect-error
    const schoolInfo = data.filter(
      (examInfo: $TSFixMe) => examInfo.school_code === selectedSchoolCode
    );
    if (schoolInfo.length === 0) {
      setExamOptions([]);
      return;
    }
    console.log({ schoolInfo });
    setExamOptions(
      Array.from(
        new Set(
          schoolInfo
            .filter((examInfo: $TSFixMe) => examInfo.exam_mean !== null)
            .map((examInfo: $TSFixMe) => examInfo.exam)
        )
      )
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
      <Autocomplete
        id="school"
        onChange={(e, newValue) => {
          setSelectedExam("");
          console.log({ event: e });
          // @ts-expect-error
          console.log({ value: e.target.value });
          // @ts-expect-error
          setSelectedSchoolCode(newValue.value);
        }}
        options={[
          { value: "", label: "None" },
          ...schoolOptions
            .map((option) => ({
              value: option.code,
              label: option.name,
            }))
            .sort((a, b) => a.label.localeCompare(b.label)),
        ]}
        filterOptions={(options, state) => {
          // console.log({options})
          if (!state.inputValue) return options;
          const fuse = new Fuse(options, {
            includeScore: true,
            keys: ["label"],
          });
          const results = fuse
            .search(state.inputValue)
            .map((result) => result.item);
          console.log({ results });
          return results;
        }}
        renderInput={(options: $TSFixMe) => (
          <TextField {...options} label="Choose School" />
        )}
        isOptionEqualToValue={(option, value) => option.value === value.value}
      />
      <br />
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
        isOptionEqualToValue={(option, value) => option.value === value.value}
      />
      <DiplomaExamGraph code={selectedSchoolCode} exam={selectedExam} />
    </>
  );
};
