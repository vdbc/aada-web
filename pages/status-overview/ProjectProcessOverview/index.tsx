import Link from "next/link";
import { Chart } from "react-google-charts";
import { MdArrowForward } from "react-icons/md";
import ProgressBar from "../../../components/ProgressBar";
import { ProjectNominate } from "../../../models/NominateModel";
import { useAppSelector } from "../../../store";
import { selectProjectNomintateDetail } from "../../../store/modules/nominate";
import {
  getOverviewProgressPercent,
  getProgressPercentField,
  getProjectName,
} from "../../../utils/project-nominate";
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
      <ProgressBar percent={process} />
    </div>
  );
}

declare type StatusOverviewProps = {
  project: ProjectNominate;
};

function StatusOverview({ project }: StatusOverviewProps) {
  const data = [
    {
      name: "Idea",
      process: getProgressPercentField(project.idea),
    },
    {
      name: "Impact",
      process: getProgressPercentField(project.impact),
    },
    {
      name: "Differentiation",
      process: getProgressPercentField(project.differentiation),
    },
    {
      name: "Function",
      process: getProgressPercentField(project.function),
    },
    {
      name: "Innovation",
      process: getProgressPercentField(project.innovation),
    },
  ];
  return (
    <div className={styles.statusOverviewContainer}>
      <h2>{getProjectName(project)}</h2>
      {data.map((item) => (
        <ProcessStatus key={item.name} {...item} />
      ))}
      <_ButtonLink href={`/your-submission?project=${project.id}`}>
        COMPLETE YOUR SUBMISSION
      </_ButtonLink>
    </div>
  );
}

declare type ViewProps = {
  projectId: number;
};

export default function _View({ projectId }: ViewProps) {
  const project = useAppSelector(selectProjectNomintateDetail(projectId));
  const completed = getOverviewProgressPercent(project);
  return (
    <div className={styles.overviewContainer}>
      <OverviewChart completed={completed} totalEntries={100} />
      <div style={{ width: 60 }} />
      <StatusOverview project={project} />
    </div>
  );
}
