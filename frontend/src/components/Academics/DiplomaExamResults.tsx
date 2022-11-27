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
      Object.keys(data)
        .map((schoolCode) => {
          const schoolInfo = basicSchoolInformation[schoolCode];
          const schoolName = schoolInfo ? schoolInfo["schoolName"] : undefined;

          const option = {
            code: schoolCode,
            name: schoolName,
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
          const [_exam, results] = schoolEntry;
          // @ts-expect-error
          return !Object.values(results).every((result) => result === "");
        })
        .map(([exam, _results]) => exam)
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
      />
      <DiplomaExamGraph code={selectedSchoolCode} exam={selectedExam} />
    </>
  );
};
