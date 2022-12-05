import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import { Nominate } from "../../../models/NominateModel";
import { ValueChanged } from "../../../utils/interface";
import styles from "./styles.module.scss";

declare type NominateEntriesProps = {
  nominate: Nominate;
  selectedEntry: string;
  onChanged: ValueChanged<string>;
};

function NominateEntries({
  nominate,
  selectedEntry,
  onChanged,
}: NominateEntriesProps) {
  const isContainSelectedEntry =
    nominate.entries.findIndex((item) => item.id == selectedEntry) >= 0;
  const [isExpand, setExpand] = useState(isContainSelectedEntry);
  return (
    <div className={styles.nominateContainer}>
      <button
        className={[styles.item, styles.root].join(" ")}
        onClick={() => setExpand(!isExpand)}
      >
        <div>{nominate.name}</div>
        {isExpand ? <IoIosArrowDown /> : <MdArrowForwardIos />}
      </button>
      {isExpand &&
        nominate.entries.map((item) => (
          <button
            key={item.id}
            className={[
              styles.item,
              styles.entry,
              item.id == selectedEntry ? styles.active : "",
            ].join(" ")}
            onClick={
              item.id == selectedEntry ? undefined : () => onChanged(item.id)
            }
          >
            {item.name}
          </button>
        ))}
    </div>
  );
}

const nominates: Nominate[] = [
  {
    id: "1",
    name: "2023 Best architecture design",
    description: "",
    entries: [
      {
        id: "1.1",
        nominateId: "1",
        name: "Project 1 /NAME/",
        description: "",
      },
      {
        id: "1.2",
        nominateId: "1",
        name: "Project 2 /NAME/",
        description: "",
      },
    ],
  },
  {
    id: "2",
    name: "2023 Best Interior Design",
    description: "",
    entries: [
      {
        id: "2.1",
        nominateId: "2",
        name: "Project 1 /NAME/",
        description: "",
      },
      {
        id: "2.2",
        nominateId: "2",
        name: "Project 2 /NAME/",
        description: "",
      },
    ],
  },
  {
    id: "3",
    name: "2023 Best Firms in Architecture Design",
    description: "",
    entries: [
      {
        id: "3.1",
        nominateId: "3",
        name: "Project 1 /NAME/",
        description: "",
      },
      {
        id: "3.2",
        nominateId: "3",
        name: "Project 2 /NAME/",
        description: "",
      },
    ],
  },
];

export default function _View() {
  const [selectedEntry, setSelectedEntry] = useState(
    nominates[0].entries[0].id
  );

  return (
    <div className={styles.container}>
      {nominates.map((nominate) => (
        <NominateEntries
          key={nominate.id}
          nominate={nominate}
          selectedEntry={selectedEntry}
          onChanged={setSelectedEntry}
        />
      ))}
    </div>
  );
}
