import { createSelector } from "@reduxjs/toolkit";
import Link from "next/link";
import { Chart } from "react-google-charts";
import ProgressBar from "../../../components/ProgressBar";
import { RootState, useAppSelector } from "../../../store";
import {
  selectProjectNomintateDetails,
  selectProjectNomintateIds,
} from "../../../store/modules/nominate";
import {
  getOverviewProgressPercent,
  getProjectName,
  isCompleteProject,
} from "../../../utils/project-nominate";
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
      1: { color: "#353a4e" },
    },
    chartArea: { left: 0, right: 0, bottom: 0, top: 0 },
  };
  const data = [
    ["Entries", "Percentage"],
    ["", totalEntries > 0 ? totalEntries - completed : 1],
    ["", completed],
  ];

  return (
    <div className={styles.overviewChart}>
      <div className={styles.center}>
        <div className={styles.percent}>
          {totalEntries > 0
            ? Math.floor((completed / totalEntries) * 100)
            : 0 + "%"}
        </div>
        <div className={styles.desc}>{`${completed}/${totalEntries} entr${
          totalEntries > 1 ? "ies" : "y"
        } completed`}</div>
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
  progress: number;
};

function ProcessStatus({ name, progress }: ProcessStatusProps) {
  return (
    <div className={styles.processStatusContainer}>
      <h3>{name}</h3>
      <ProgressBar percent={progress} />
    </div>
  );
}

const selectProjectsOverview = createSelector(
  selectProjectNomintateIds,
  selectProjectNomintateDetails,
  (ids, details) => {
    return ids.map((id) => ({
      name: getProjectName(details[id]),
      progress: getOverviewProgressPercent(details[id]),
    }));
  }
);

function StatusOverview() {
  const data = useAppSelector(selectProjectsOverview);
  return (
    <div className={styles.statusOverviewContainer}>
      <h2>Status Overview</h2>
      <p className={styles.guideline}>
        This Status Overview indicates the successful completion of the content
        you have provided.
      </p>
      {data.map((item) => (
        <ProcessStatus key={item.name} {...item} />
      ))}
      <div className={styles.actions}>
        <Link href="/your-submission" className={styles.buttonComplete}>
          COMPLETE YOUR SUBMISSION
        </Link>
        <Link href="/status-overview" className={styles.buttonDetail}>
          Detail
        </Link>
      </div>
      <div></div>
    </div>
  );
}

export const selectTotalProjects = (state: RootState) =>
  selectProjectNomintateIds(state).length;
export const selectTotalCompleteProjects = createSelector(
  selectProjectNomintateIds,
  selectProjectNomintateDetails,
  (ids, details) => {
    return ids.filter((id) => {
      const project = details[id];
      return isCompleteProject(project);
    }).length;
  }
);

export default function _View() {
  const totalProjects = useAppSelector(selectTotalProjects);
  const totalCompleted = useAppSelector(selectTotalCompleteProjects);
  return (
    <div className={styles.overviewContainer}>
      <OverviewChart completed={totalCompleted} totalEntries={totalProjects} />
      <div style={{ width: 60 }} />
      <StatusOverview />
    </div>
  );
}
