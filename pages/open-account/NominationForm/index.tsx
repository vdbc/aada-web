import {
  CreateOrderActions,
  CreateOrderData,
  OnApproveActions,
  OnApproveData,
} from "@paypal/paypal-js";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { flatMap, isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { paypalClientId } from "../../../models/AppConfig";
import {
  confirmPaymentNominateEntries,
  getNominateEntriesRegistered,
  registerNominateEntries,
} from "../../../services/NominateService";
import { store, useAppDispatch, useAppSelector } from "../../../store";
import {
  fetchAllNominate,
  fetchProjectNominate,
  getFeePerEntry,
  selectEntryIdsRegisteredGroupByCategory,
  selectFeePerEntry,
  selectIsNominatePaid,
  selectNominates,
} from "../../../store/modules/nominate";
import { selectToken, selectUserId } from "../../../store/modules/user";
import SelectEntry, { TotalEntriesOverview } from "../SelectEntry";
import styles from "./styles.module.scss";

declare type Props = {
  onRegisterSuccess: Function;
};

function _View({ onRegisterSuccess }: Props) {
  const entryIdsRegistered = useAppSelector(
    selectEntryIdsRegisteredGroupByCategory
  );
  const canEdit = isEmpty(entryIdsRegistered);

  const [_selectedEntries, setSelectedEntries] = useState<{
    [key: string]: string[];
  }>({});
  const selectedEntries = !isEmpty(_selectedEntries)
    ? _selectedEntries
    : entryIdsRegistered;
  const dispatch = useAppDispatch();
  const userId = useAppSelector(selectUserId);

  useEffect(() => {
    dispatch(getFeePerEntry());
    dispatch(fetchAllNominate());
    dispatch(fetchProjectNominate());
  }, [dispatch, userId]);

  const feePerEntry = useAppSelector(selectFeePerEntry);

  const allNominate = useAppSelector(selectNominates);

  const selectEntryIds = flatMap(selectedEntries);

  const toalEntries = selectEntryIds.length;

  const _onEntriesChanged = (entryIds: string[], id: string) => {
    setSelectedEntries({
      ...selectedEntries,
      [id]: entryIds,
    });
  };

  async function handleCreateOrder(
    data: CreateOrderData,
    actions: CreateOrderActions
  ) {
    const token = selectToken(store.getState());
    const referenceId = await registerNominateEntries(
      selectEntryIds,
      token
    ).catch((err) => getNominateEntriesRegistered(token));

    return actions.order.create({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: (toalEntries * feePerEntry).toString(),
          },
          reference_id: referenceId,
        },
      ],
    });
  }
  async function onApprove(data: OnApproveData, actions: OnApproveActions) {
    const token = selectToken(store.getState());
    await actions.order?.capture();
    await confirmPaymentNominateEntries(data, token);
    onRegisterSuccess();
  }

  const isPaid = useAppSelector(selectIsNominatePaid);

  return (
    <div className={styles.container}>
      <div>
        {allNominate &&
          allNominate.map((item) => (
            <SelectEntry
              key={item.id}
              onEntriesChanged={(ids) => _onEntriesChanged(ids, item.id)}
              title="NOMINATE YOUR ENTRY"
              label={item.name}
              selectIds={selectedEntries[item.id]}
              description={item.description}
              feePerEntry={feePerEntry}
              entries={item.entries}
              canEdit={canEdit}
            />
          ))}
        <TotalEntriesOverview
          totalEntries={toalEntries}
          totalFee={toalEntries * feePerEntry}
        />
        <div className={styles.paymentButton}>
          <PayPalScriptProvider
            options={{
              "client-id": paypalClientId,
            }}
          >
            <PayPalButtons
              disabled={isPaid || toalEntries <= 0}
              style={{
                layout: "horizontal",
                color: "gold",
                tagline: false,
                shape: "rect",
              }}
              forceReRender={[toalEntries, isPaid]}
              createOrder={handleCreateOrder}
              onApprove={onApprove}
            />
          </PayPalScriptProvider>
        </div>
      </div>
    </div>
  );
}

export default _View;
