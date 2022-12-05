import Link from "next/link";
import { Chart } from "react-google-charts";
import { MdArrowForward } from "react-icons/md";
import styles from "./styles.module.scss";

function _ButtonLink({ href, children }: any) {
  return (
    <Link href={href}>
      <div className={styles.buttonLink}>
        <div className={styles.wrapper}>{children}</div>
        <MdArrowForward size={20} />
      </div>
    </Link>
  );
}

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
      <div className={styles.processBackground}>
        <div
          style={{ width: `${process * 100}%` }}
          className={styles.processPercent}
        />
      </div>
    </div>
  );
}

function StatusOverview() {
  const data = [
    {
      name: "Idea",
      process: 0.2,
    },
    {
      name: "Impact",
      process: 0.5,
    },
    {
      name: "Differentiation",
      process: 0.1,
    },
    {
      name: "Function",
      process: 0.6,
    },
    {
      name: "Innovation",
      process: 1,
    },
  ];
  return (
    <div className={styles.statusOverviewContainer}>
      <h2>PROJECT 1</h2>
      {data.map((item) => (
        <ProcessStatus {...item} />
      ))}
      <_ButtonLink href="#">COMPLETE YOUR SUBMISSION</_ButtonLink>
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
