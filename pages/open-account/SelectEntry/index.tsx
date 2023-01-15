import { Theme } from "@mui/material";
import { keyBy } from "lodash";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { NominateEntry } from "../../../models/NominateModel";
import { useAppSelector } from "../../../store";
import { selectNomintateEntryDetail } from "../../../store/modules/nominate";
import { ValueChanged, VoidCallback } from "../../../utils/interface";
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

declare type EntryItemProps = {
  entryId: string;
  onUnselectItem: VoidCallback;
};

function EntryItem({ entryId, onUnselectItem }: EntryItemProps) {
  const entry = useAppSelector(selectNomintateEntryDetail(entryId));
  return (
    <div className={styles.wrapperSelectEntry}>
      <LabelBox>
        <div className={styles.selectItem}>
          <span>{entry.name}</span>
          <button onClick={onUnselectItem}>
            <MdClose />
          </button>
        </div>
      </LabelBox>
    </div>
  );
}

declare type Props = {
  title: string;
  label: string;
  description: string;
  feePerEntry: number;
  entries: NominateEntry[];
  selectIds: string[];
  onSelectEntry: ValueChanged<string>;
  onRemoveEntry: ValueChanged<string>;
  required?: boolean;
};

export default function _View({
  title,
  label,
  description,
  feePerEntry,
  entries,
  selectIds,
  required = true,
  onSelectEntry,
  onRemoveEntry,
}: Props) {
  const check = keyBy(entries, (entry) => entry.id);
  const selectIdsByEntry = selectIds.filter((id) => check[id] != null);

  const [_selected, setSelected] = useState<string[]>(selectIdsByEntry);
  const selected = _selected.length > 0 ? _selected : selectIdsByEntry;
  const entriesToSelected = entries ?? [];

  const unselectItem = (value: string) => {
    onRemoveEntry(value);
    setSelected((selected ?? []).filter((item) => item != value));
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>{title + (required ? "*" : "")}</div>
      <div className={styles.groupInput}>
        <div className={styles.entries}>
          <ColumnContent label={label} description={description}>
            {selected.map((id) => (
              <EntryItem
                key={id}
                entryId={id}
                onUnselectItem={() => unselectItem(id)}
              />
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
                  if (entry) setSelected([...selected, entry.id]);
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
