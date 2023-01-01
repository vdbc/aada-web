import { useEffect, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { registerNominateEntries } from "../../../services/NominateService";
import { store, useAppDispatch, useAppSelector } from "../../../store";
import {
  fetchAllNominate,
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
  const [selectedEntries, setSelectedEntries] = useState<string[]>([]);
  const [isLoading, setLoading] = useState(false);
  const token = useAppSelector(selectToken);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllNominate());
  });

  const allNominate = useAppSelector(selectNominates);

  const toalEntries = selectedEntries.length;

  const _onSelectEntry = (entryId: string) =>
    setSelectedEntries([...selectedEntries, entryId]);
  const _onRemoveEntry = (entryId: string) =>
    setSelectedEntries(selectedEntries.filter((id) => id != entryId));

  const handleRegister = async () => {
    if (isLoading) return;
    setLoading(true);
    try {
      const token = selectToken(store.getState());
      await registerNominateEntries(selectedEntries, token);
      onRegisterSuccess();
    } catch (error: any) {
      alert(error?.message ?? "");
    }

    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <div>
        {allNominate &&
          allNominate.map((item) => (
            <SelectEntry
              key={item.id}
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
          <button onClick={handleRegister}>
            Payment
            <MdArrowForwardIos />
          </button>
        </div>
      </div>
    </div>
  );
}

export default _View;
