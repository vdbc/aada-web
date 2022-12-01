import { Theme } from "@mui/material";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { NominateEntry } from "../../../models/NominateModel";
import { ValueChanged } from "../../../utils/interface";
import styles from "./styles.module.scss";

declare type LabelBoxProps = {
  children: any;
};

function LabelBox({ children }: LabelBoxProps) {
  return <div className={styles.labelBox}>{children}</div>;
}

declare type ColumnContentProps = {
  label: string;
  description?: string;
  children: any;
};

function ColumnContent({ label, description, children }: ColumnContentProps) {
  return (
    <div className={styles.columnContent}>
      <h2>{label}</h2>
      {description && (
        <div className={styles.descriptionContent}>{description}</div>
      )}
      <div className={styles.children}>{children}</div>
    </div>
  );
}

declare type TotalEntriesProps = {
  totalEntries: number;
  totalFee: number;
};

export function TotalEntriesOverview({
  totalEntries,
  totalFee,
}: TotalEntriesProps) {
  return (
    <div className={styles.container}>
      <div className={styles.groupInput}>
        <div className={styles.entries} />
        <div className={styles.numOfEntries}>
          <ColumnContent label="Total entries">
            <LabelBox>{totalEntries}</LabelBox>
          </ColumnContent>
        </div>
        <div className={styles.totalFee}>
          <ColumnContent label="Total fee">
            <LabelBox>USD {totalFee}</LabelBox>
          </ColumnContent>
        </div>
      </div>
    </div>
  );
}

declare type Props = {
  title: string;
  label: string;
  description: string;
  feePerEntry: number;
  entries: NominateEntry[];
  onSelectEntry: ValueChanged<string>;
  onRemoveEntry: ValueChanged<string>;
  required?: boolean;
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function _View({
  title,
  label,
  description,
  feePerEntry,
  entries,
  required = true,
  onSelectEntry,
  onRemoveEntry,
}: Props) {
  const [selected, setSelected] = useState<NominateEntry[]>([]);
  const entriesToSelected = (entries ?? []).filter(
    (entry) => !selected.includes(entry)
  );

  const unselectItem = (value: NominateEntry) => {
    onRemoveEntry(value.id);
    setSelected((selected ?? []).filter((item) => item != value));
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>{title + (required ? "*" : "")}</div>
      <div className={styles.groupInput}>
        <div className={styles.entries}>
          <ColumnContent label={label} description={description}>
            {selected.map((item) => (
              <div key={item.id} className={styles.wrapperSelectEntry}>
                <LabelBox>
                  <div className={styles.selectItem}>
                    <span>{item.name}</span>
                    <button onClick={() => unselectItem(item)}>
                      <MdClose />
                    </button>
                  </div>
                </LabelBox>
              </div>
            ))}
            {entriesToSelected.length > 0 && (
              <select
                value="1"
                className={styles.select}
                onChange={(event) => {
                  const entryId = event.target.value;
                  const entry = entriesToSelected.find(
                    (item) => item.id == entryId
                  );
                  onSelectEntry(entryId);
                  if (entry) setSelected([...selected, entry]);
                }}
              >
                <option value="1" disabled>
                  Select your category
                </option>
                {entriesToSelected.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            )}
          </ColumnContent>
        </div>
        <div className={styles.numOfEntries}>
          <ColumnContent
            label="Number of entry"
            description="You can choose unlimited number of entry"
          >
            <LabelBox>{selected.length}</LabelBox>
          </ColumnContent>
        </div>
        <div className={styles.totalFee}>
          <ColumnContent
            label="Early bird entry fee"
            description="Apply for single entry USD 180"
          >
            <LabelBox>USD {selected.length * feePerEntry}</LabelBox>
          </ColumnContent>
        </div>
      </div>
    </div>
  );
}
