import { Chart } from "react-google-charts";
import ProgressBar from "../../../components/ProgressBar";
import styles from "./styles.module.scss";

declare type OverviewChartProps = {
  completed: number;
  totalEntries: number;
};

function OverviewChart({ completed, totalEntries }: OverviewChartProps) {
  const options = {
    legend: "none",
    pieSliceText: "none",
    tooltip: { trigger: "none" },
    pieHole: 0.8,
    is3D: false,
    slices: {
      0: { color: "#F6F6F6" },
      1: { color: "#a67f56" },
    },
    chartArea: { left: 0, right: 0, bottom: 0, top: 0 },
  };
  const data = [
    ["Entries", "Percentage"],
    ["", totalEntries - completed],
    ["", completed],
  ];
  return (
    <div className={styles.overviewChart}>
      <div className={styles.center}>
        <div className={styles.percent}>
          {Math.floor((completed / totalEntries) * 100) + "%"}
        </div>
        <div
          className={styles.desc}
        >{`${completed}/${totalEntries} entries completed`}</div>
      </div>
      <Chart
        chartType="PieChart"
        width="100%"
        height="100%"
        data={data}
        options={options}
      />
    </div>
  );
}

declare type ProcessStatusProps = {
  name: string;
  process: number;
};

function ProcessStatus({ name, process }: ProcessStatusProps) {
  return (
    <div className={styles.processStatusContainer}>
      <h3>{name}</h3>
      <ProgressBar percent={process * 100} />
    </div>
  );
}

function StatusOverview() {
  const data = [
    {
      name: "Project 1",
      process: 0.2,
    },
    {
      name: "Project 2",
      process: 0.5,
    },
    {
      name: "Project 3",
      process: 0.1,
    },
    {
      name: "Project 4",
      process: 0.6,
    },
    {
      name: "Project 5",
      process: 1,
    },
  ];
  return (
    <div className={styles.statusOverviewContainer}>
      <h2>Status Overview</h2>
      {data.map((item) => (
        <ProcessStatus key={item.name} {...item} />
      ))}
    </div>
  );
}

export default function _View() {
  return (
    <div className={styles.overviewContainer}>
      <OverviewChart completed={7} totalEntries={9} />
      <div style={{ width: 60 }} />
      <StatusOverview />
    </div>
  );
}
