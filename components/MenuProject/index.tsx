import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import styles from "./styles.module.scss";
import { NominateName, ProjectNominateEntry } from "../../models/NominateModel";
import { useEffect, useState } from "react";
import { getProjectbyEntryId } from "../../services/NominateService";
import { store } from "../../store";
import { selectToken } from "../../store/modules/user";
import { IoIosArrowDown } from "react-icons/io";
declare type Props = {
  entry: NominateName;
  onSetProject: any;
};

export default function _View({ entry, onSetProject }: Props) {
  const [listProject, setListProject] = useState<ProjectNominateEntry[]>([]);
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [selectedProjectId, setSelectedProjectId] = useState<number>(0);
  useEffect(() => {
    const state = store.getState();
    const token = selectToken(state);
    getProjectbyEntryId(token, entry.id).then((res) => {
      setListProject(res.data);
    });
  }, [listProject.length]);

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.listNominate} ${
          !listProject.length ? styles.hide : styles.display
        }`}
        onClick={() => setIsOpenMenu(!isOpenMenu)}
      >
        <span>{entry.name}</span>
        <IoIosArrowDown />
      </div>
      {isOpenMenu && (
        <ul className={styles.listProject}>
          {listProject.map((list) => (
            <li
              className={`${styles.listName} ${
                selectedProjectId === list.id ? styles.listNameSelected : ""
              }`}
              key={list.id}
              onClick={() => {
                onSetProject(list);
                setSelectedProjectId(list.id);
              }}
            >
              {list.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
