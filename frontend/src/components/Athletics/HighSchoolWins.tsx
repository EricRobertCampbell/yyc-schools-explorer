import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useJsonFile } from "../../hooks";

import TextField from "@mui/material/TextField";
import Fuse from "fuse.js";

interface SportsTableData {
  schoolCode: string;
  schoolName: string;
  yearRange: string;
  sport: string;
  wins: number;
}

export const HighSchoolWins = () => {
  const [makeCall, { data }] = useJsonFile("sports_total_wins.json");
  const [parsedData, setParsedData] = useState<Array<SportsTableData>>([]);
  const [sportsTableData, setSportsTableData] = useState<
    Array<SportsTableData>
  >([]);
  const [search, setSearch] = useState<string>("");
  const searchTimeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    makeCall();
  }, []);

  useEffect(() => {
    if (data) {
      // @ts-expect-error
      const parsed = Object.entries(data["wins"])
        .map(([key, numWins]) => {
          const [schoolName, schoolCode, yearRange, sport] = key
            .replace(/[()]/g, "")
            .split(", ")
            .map((elem) => elem.replace(/['"]/g, ""));
          return { schoolCode, schoolName, yearRange, sport, wins: numWins };
        })
        .sort(
          (a, b) =>
            Number(a.yearRange.replace(/-\d*/g, "")) -
            Number(b.yearRange.replace(/-\d*/g, ""))
        );
      console.log({ parsed });
      // @ts-expect-error
      setParsedData(parsed);
    }
  }, [data]);

  // when the search is set, actually filter the data
  useEffect(() => {
    if (!search) {
      setSportsTableData(parsedData);
    } else {
      const fuse = new Fuse(parsedData, {
        keys: ["schoolName", "yearRange", "sport"],
        includeScore: true,
      });
      const results = fuse.search(search);
      setSportsTableData(results.map((result) => result.item));
      console.log({ results });
    }
  }, [search, parsedData]);

  return (
    <>
      <TextField
        name="search"
        id="search"
        label="Search Schools"
        sx={{
          alignSelf: "flex-start",
          paddingBottom: "calc(4 * var(--basic-distance))",
        }}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          clearTimeout(searchTimeout.current);
          const newTimeout = setTimeout(() => setSearch(e.target.value), 500);
          searchTimeout.current = newTimeout;
        }}
      />
      <br />
      <table
        style={{ width: "100%", paddingTop: "calc(4 * var(--basic-distance))" }}
      >
        <thead>
          <tr>
            {["Year", "School Name", "Sport", "Number of Wins"].map((label) => (
              <th>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sportsTableData.map(
            ({ schoolCode, schoolName, yearRange, sport, wins }) => (
              <tr>
                <td>{yearRange}</td>
                <td>
                  <Link to={`/schools/${schoolCode}`}>{schoolName}</Link>
                </td>
                <td>{sport}</td>
                <td>{wins}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  );
};
