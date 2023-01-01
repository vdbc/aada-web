import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import { useAppSelector } from "../../../store";
import {
  selectNomintateEntryDetail,
  selectProjectIdsGroupByEntry,
  selectProjectNomintateDetail,
} from "../../../store/modules/nominate";
import { ValueChanged } from "../../../utils/interface";
import styles from "./styles.module.scss";

declare type NominateEntriesProps = {
  projectIds: number[];
  selectedProjectId: number;
  entryId: string;
  onChanged: ValueChanged<number>;
};

function NominateEntries({
  projectIds,
  selectedProjectId: selectedEntry,
  entryId,
  onChanged,
}: NominateEntriesProps) {
  const isContainSelectedEntry =
    projectIds.findIndex((item) => item == selectedEntry) >= 0;
  const [isExpand, setExpand] = useState(isContainSelectedEntry);

  const entry = useAppSelector(selectNomintateEntryDetail(entryId));

  return (
    <div className={styles.nominateContainer}>
      <button
        className={[styles.item, styles.root].join(" ")}
        onClick={() => setExpand(!isExpand)}
      >
        <div>{entry.name}</div>
        {isExpand ? <IoIosArrowDown /> : <MdArrowForwardIos />}
      </button>
      {isExpand &&
        projectIds.map((id) => (
          <ProjectNominateComponent
            key={id}
            id={id}
            isActive={id == selectedEntry}
            onChanged={onChanged}
          />
        ))}
    </div>
  );
}

declare type ProjectNominateComponentProps = {
  id: number;
  isActive: boolean;
  onChanged: ValueChanged<number>;
};

function ProjectNominateComponent({
  id,
  isActive,
  onChanged,
}: ProjectNominateComponentProps) {
  const project = useAppSelector(selectProjectNomintateDetail(id));
  return (
    <button
      key={id}
      className={[
        styles.item,
        styles.entry,
        isActive ? styles.active : "",
      ].join(" ")}
      onClick={isActive ? undefined : () => onChanged(id)}
    >
      {project.name || `Project ${id}`}
    </button>
  );
}

// const nominates: Nominate[] = [
//   {
//     id: "1",
//     name: "2023 Best architecture design",
//     description: "",
//     entries: [
//       {
//         id: "1.1",
//         nominateId: "1",
//         name: "Project 1 /NAME/",
//         description: "",
//       },
//       {
//         id: "1.2",
//         nominateId: "1",
//         name: "Project 2 /NAME/",
//         description: "",
//       },
//     ],
//   },
//   {
//     id: "2",
//     name: "2023 Best Interior Design",
//     description: "",
//     entries: [
//       {
//         id: "2.1",
//         nominateId: "2",
//         name: "Project 1 /NAME/",
//         description: "",
//       },
//       {
//         id: "2.2",
//         nominateId: "2",
//         name: "Project 2 /NAME/",
//         description: "",
//       },
//     ],
//   },
//   {
//     id: "3",
//     name: "2023 Best Firms in Architecture Design",
//     description: "",
//     entries: [
//       {
//         id: "3.1",
//         nominateId: "3",
//         name: "Project 1 /NAME/",
//         description: "",
//       },
//       {
//         id: "3.2",
//         nominateId: "3",
//         name: "Project 2 /NAME/",
//         description: "",
//       },
//     ],
//   },
// ];

declare type ViewProps = {
  onChanged: ValueChanged<number>;
  selectedProjectId: number;
};

export default function _View({ selectedProjectId, onChanged }: ViewProps) {
  const groupProjectIds = useAppSelector(selectProjectIdsGroupByEntry);

  return (
    <div className={styles.container}>
      {groupProjectIds.map((group) => (
        <NominateEntries
          key={group.entryId}
          projectIds={group.projectIds}
          entryId={group.entryId}
          selectedProjectId={selectedProjectId}
          onChanged={onChanged}
        />
      ))}
    </div>
  );
}
