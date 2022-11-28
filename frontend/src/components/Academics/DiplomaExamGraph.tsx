import { useContext, useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

import { useJsonFile } from "../../hooks";

// types and classes
import type { $TSFixMe } from "../../types";

interface DiplomaExamGraphProps {
  code?: string;
  exam?: string;
}
export const DiplomaExamGraph = ({ code, exam }: DiplomaExamGraphProps) => {
  const [graphData, setGraphData] = useState<
    Array<{ x: $TSFixMe; y: $TSFixMe; [k: string]: unknown }>
  >([]);
  const [labels, setLabels] = useState<Array<$TSFixMe>>([]);
  const [getSchoolDiplomaInformation, { data }] = useJsonFile(
    "diploma_information_by_school.json"
  );

  // load the diploma information
  useEffect(() => {
    getSchoolDiplomaInformation();
  }, []);

  // parse the actual information as soon as we have it
  useEffect(() => {
    if (!code || !exam || !data) {
      setGraphData([]);
      return;
    }
    // @ts-expect-error
    const examInfo = data.filter(
      (examInfo: $TSFixMe) =>
        examInfo.exam === exam && examInfo.school_code === code
    );
    const parsed = // @ts-expect-error
      examInfo.map((info) => ({
        // ...info,
        x: info.year,
        y: info.exam_mean,
        year: info.year,
        std: info.exam_std,
      }));
    console.log({ parsed });
    setGraphData(parsed);
  }, [code, exam, data]);

  // set the labels
  useEffect(() => {
    const years = graphData.map((data) => data.year);
    console.log({ years });
    if (years.length === 0) {
      setLabels([]);
      return;
    }
    const minYear = Math.min(...graphData.map((data) => Number(data.year)));
    const maxYear = Math.max(...graphData.map((data) => Number(data.year)));
    console.log({ minYear, maxYear });
    const newLabels = new Array(Math.max(0, maxYear - minYear + 1))
      .fill(undefined)
      .map((_, index) => String(minYear + index));
    console.log({ labels });
    setLabels(newLabels);
  }, [graphData]);

  return (
    <>
      <Line
        data={{
          labels,
          datasets: [
            {
              label: exam,
              data: graphData,
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
                graphData.length > 0
                  ? Math.floor(
                      0.9 *
                        Math.min(
                          ...graphData
                            .map((value) => Number(value.y))
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
            tooltip: {
              callbacks: {
                label: (context) => {
                  try {
                    console.log({ context });
                    let label = context.dataset.label || "";
                    const item = context.dataset.data[context.dataIndex];
                    // @ts-expect-error
                    label = `Average: ${item.y}%; Standard deviation: ${item.std}%`;
                    return label;
                  } catch (e) {
                    console.error(e);
                    return context.dataset.label || "";
                  }
                },
              },
            },
          },
        }}
      />
    </>
  );
};
