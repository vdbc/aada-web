import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Theme,
  useTheme,
} from "@mui/material";
import { useState } from "react";
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
  entries: string[];
  required?: boolean;
};

const names = [
  "2023 BEST RESORT ARCHITECTURE DESIGN",
  "2023 Best Interior Design",
  "2023 BEST RESORT INTERIOR DESIGN",
  "2023 BEST HOTEL INTERIOR DESIGN",
  "2023 BEST F&B INTERIOR DESIGN",
];
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
}: Props) {
  const [personName, setPersonName] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const theme = useTheme();

  return (
    <div className={styles.container}>
      <div className={styles.title}>{title + (required ? "*" : "")}</div>
      <div className={styles.groupInput}>
        <div className={styles.entries}>
          <ColumnContent label={label} description={description}>
            <select className={styles.select}>
              {names.map((name) => (
                <option>{name}</option>
              ))}
            </select>
            {/* <FormControl fullWidth>
              <InputLabel id="demo-multiple-name-label">Name</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl> */}
          </ColumnContent>
        </div>
        <div className={styles.numOfEntries}>
          <ColumnContent
            label="Number of entry"
            description="You can choose unlimited number of entry"
          >
            <LabelBox>0</LabelBox>
          </ColumnContent>
        </div>
        <div className={styles.totalFee}>
          <ColumnContent
            label="Early bird entry fee"
            description="Apply for single entry USD 180"
          >
            <LabelBox>USD 0</LabelBox>
          </ColumnContent>
        </div>
      </div>
    </div>
  );
}
