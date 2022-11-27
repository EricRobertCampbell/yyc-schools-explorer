import { useContext, useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

import { useJsonFile } from "../../hooks";

interface DiplomaExamGraphProps {
  code?: string;
  exam?: string;
}
export const DiplomaExamGraph = ({ code, exam }: DiplomaExamGraphProps) => {
  const [graphData, setGraphData] = useState<{ [year: string]: string }>({});
  const [getSchoolDiplomaInformation, { data }] = useJsonFile(
    "diploma_information_by_school.json"
  );

  // load the diploma information
  useEffect(() => {
    getSchoolDiplomaInformation();
  }, []);

  // parse the actual information as soon as we have it
  useEffect(() => {
    if (!code || !exam) {
      setGraphData({});
      return;
    }
    // @ts-expect-error
    const examInfo = data[code][exam];
    setGraphData(
      Object.entries(examInfo).reduce((acc, [year, average]) => {
        // @ts-expect-error
        acc[year] = average === "" ? undefined : average;
        return acc;
      }, {})
    );
  }, [code, exam]);

  return (
    <>
      <Line
        data={{
          labels: Object.keys(graphData),
          datasets: [
            {
              label: "Exam Results",
              data: Object.values(graphData).map((avg) => Number(avg)),
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
          ],
        }}
        options={{
          responsive: true,
          scales: {
            x: {
              title: {
                display: true,
                text: "Year",
              },
            },
            y: {
              max: 100,
              min:
                Object.values(graphData).length > 0
                  ? Math.floor(
                      0.9 *
                        Math.min(
                          ...Object.values(graphData)
                            .map((value) => Number(value))
                            .filter((value) => !Number.isNaN(value))
                        )
                    )
                  : 0,
              ticks: {
                callback: (value) => `${value}%`,
              },
              title: {
                display: true,
                text: "Average Diploma Mark",
              },
            },
          },
          plugins: {
            title: {
              display: true,
              text: `Diploma Exam Results${exam ? `: ${exam}` : ""}`,
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </>
  );
};
