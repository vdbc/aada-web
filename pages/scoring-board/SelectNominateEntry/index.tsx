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
        <div className={styles.nameNominate}>{entry?.name}</div>
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
      {project?.name || `Project ${id}`}
    </button>
  );
}

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
