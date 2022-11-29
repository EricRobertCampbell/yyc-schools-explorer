import { useContext, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { BasicSchoolInformationContext } from "../../contexts";
import Fuse from "fuse.js";

// types and classes
import type { $TSFixMe } from "../../types";

import "./ListOfSchools.css";

export const ListOfSchools = () => {
  const data = useContext(BasicSchoolInformationContext);
  const [parsedData, setParsedData] = useState<Array<$TSFixMe>>([]);
  const [dataToDisplay, setDataToDisplay] = useState<Array<$TSFixMe>>([]);
  const [searchData, setSearchData] = useState<string>("");
  const searchTimeout = useRef<ReturnType<typeof setTimeout>>();
  const [search, setSearch] = useState<string>(""); // what is actually being searched for

  // parse the loaded in data
  useEffect(() => {
    if (data) {
      setParsedData(
        Object.entries(data).map(([code, info]) => ({
          code,
          // @ts-expect-error
          ...info,
        }))
      );
    }
  }, [data]);

  // when the search is set, actually filter the data
  useEffect(() => {
    if (!search) {
      setDataToDisplay(
        parsedData.sort((a, b) => a.schoolName.localeCompare(b.schoolName))
      );
    } else {
      const fuse = new Fuse(parsedData, {
        keys: [
          "schoolName",
          "schoolAddress1",
          "schoolAddress2",
          "schoolCity",
          "schoolPhone",
        ],
        includeScore: true,
      });
      const results = fuse.search(search);
      setDataToDisplay(results.map((result) => result.item));
      console.log({ results });
    }
  }, [search, parsedData]);

  return (
    <>
      <h2>List of Schools</h2>
      <TextField
        name="search"
        id="search"
        label="Search Schools"
        sx={{ alignSelf: "flex-start" }}
        value={searchData}
        onChange={(e) => {
          setSearchData(e.target.value);
          clearTimeout(searchTimeout.current);
          const newTimeout = setTimeout(() => setSearch(e.target.value), 500);
          searchTimeout.current = newTimeout;
        }}
      />
      <table>
        <thead>
          <tr>
            {["Name", "Address", "City", "Postal Code", "Phone"].map(
              (header) => (
                <th>{header}</th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {dataToDisplay.map(
            ({
              code,
              schoolName,
              schoolAddress1,
              schoolAddress2,
              schoolCity,
              schoolPostalCode,
              schoolPhone,
            }) => {
              return (
                <tr>
                  <td>
                    <Link to={code}>{schoolName}</Link>
                  </td>
                  <td>
                    <Link to={code}>
                      {[schoolAddress1, schoolAddress2].join(" ").trim()}
                    </Link>
                  </td>
                  <td>
                    <Link to={code}>{schoolCity}</Link>
                  </td>
                  <td>
                    <Link to={code}>{schoolPostalCode}</Link>
                  </td>
                  <td>
                    <Link to={code}>{schoolPhone}</Link>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </>
  );
};
