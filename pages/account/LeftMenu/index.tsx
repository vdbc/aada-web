import { flatMap, keyBy } from "lodash";
import { useAppSelector } from "../../../store";
import { selectProjectIdsGroupByEntry } from "../../../store/modules/nominate";
import { ValueChanged } from "../../../utils/interface";
import ContactInformation from "../ContactInformation";
import Invoices from "../Invoices";
import UsernameAndPassword from "../UsernameAndPassword";
import styles from "./styles.module.scss";

declare type NominateEntriesProps = {
  menuItem: MenuItem;
  selectedItem: string;
  onChanged: ValueChanged<string>;
};

function NominateEntries({
  menuItem,
  selectedItem,
  onChanged,
}: NominateEntriesProps) {
  const { title, items } = menuItem;
  const isContainSelectedEntry =
    items.findIndex((item) => item.id == selectedItem) >= 0;

  return (
    <div className={styles.nominateContainer}>
      <button className={[styles.item, styles.root].join(" ")}>
        <div>{title}</div>
      </button>
      {items.map((item) => (
        <ProjectNominateComponent
          key={item.id}
          item={item}
          isActive={item.id == selectedItem}
          onChanged={onChanged}
        />
      ))}
    </div>
  );
}

declare type ProjectNominateComponentProps = {
  item: SubMenuItem;
  isActive: boolean;
  onChanged: ValueChanged<string>;
};

function ProjectNominateComponent({
  item,
  isActive,
  onChanged,
}: ProjectNominateComponentProps) {
  return (
    <button
      key={item.id}
      className={[
        styles.item,
        styles.entry,
        isActive ? styles.active : "",
      ].join(" ")}
      onClick={isActive ? undefined : () => onChanged(item.id)}
    >
      {item.name}
    </button>
  );
}

declare type ViewProps = {
  onChanged: ValueChanged<string>;
  selectedId: string;
};

declare type SubMenuItem = {
  id: string;
  name: string;
  component: any;
};

declare type MenuItem = {
  title: string;
  id: string;
  items: SubMenuItem[];
};

export const leftMenus: MenuItem[] = [
  {
    title: "Your Account",
    id: "your-account",
    items: [
      {
        id: "contact-information",
        name: "Contact Information",
        component: <ContactInformation />,
      },
      {
        id: "password",
        name: "Username & Password",
        component: <UsernameAndPassword />,
      },
      {
        id: "invoices",
        name: "Invoices",
        component: <Invoices />,
      },
    ],
  },
];
export const menuDetails = keyBy(
  flatMap(leftMenus, (menu) => menu.items),
  (menu) => menu.id
);

export default function _View({ selectedId, onChanged }: ViewProps) {
  const groupProjectIds = useAppSelector(selectProjectIdsGroupByEntry);

  return (
    <div className={styles.container}>
      {leftMenus.map((menu) => (
        <NominateEntries
          key={menu.id}
          menuItem={menu}
          selectedItem={selectedId}
          onChanged={onChanged}
        />
      ))}
    </div>
  );
}
