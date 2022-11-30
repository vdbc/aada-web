import { useEffect, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { getAllNominate } from "../../../services/NominateService";
import { useAppDispatch, useAppSelector } from "../../../store";
import nominateSlice, {
  selectNominates,
} from "../../../store/modules/nominate";
import { selectToken } from "../../../store/modules/user";
import SelectEntry, { TotalEntriesOverview } from "../SelectEntry";
import styles from "./styles.module.scss";

declare type Props = {
  onRegisterSuccess: Function;
};

const feePerEntry = 180;

function _View({ onRegisterSuccess }: Props) {
  const [selectedEntries, setSelectedEntries] = useState<String[]>([]);
  const token = useAppSelector(selectToken);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getAllNominate(token).then((result) =>
      dispatch(nominateSlice.actions.setNominates(result))
    );
  }, []);

  const allNominate = useAppSelector(selectNominates);

  const toalEntries = selectedEntries.length;

  const _onSelectEntry = (entryId: string) =>
    setSelectedEntries([...selectedEntries, entryId]);
  const _onRemoveEntry = (entryId: string) =>
    setSelectedEntries(selectedEntries.filter((id) => id != entryId));

  return (
    <div className={styles.container}>
      <div>
        {allNominate &&
          allNominate.map((item) => (
            <SelectEntry
              onSelectEntry={_onSelectEntry}
              onRemoveEntry={_onRemoveEntry}
              title="NOMINATE YOUR ENTRY"
              label={item.name}
              description={item.description}
              feePerEntry={feePerEntry}
              entries={item.entries}
            />
          ))}
        <TotalEntriesOverview
          totalEntries={toalEntries}
          totalFee={toalEntries * feePerEntry}
        />
        <div className={styles.footerAction}>
          <button>
            Payment
            <MdArrowForwardIos />
          </button>
        </div>
      </div>
    </div>
  );
}

export default _View;
