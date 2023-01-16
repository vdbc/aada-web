import {
  CreateOrderActions,
  CreateOrderData,
  OnApproveActions,
  OnApproveData,
} from "@paypal/paypal-js";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
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
  selectEntryIdsRegistered,
  selectIsNominatePaid,
  selectNominates,
} from "../../../store/modules/nominate";
import { selectToken, selectUserId } from "../../../store/modules/user";
import SelectEntry, { TotalEntriesOverview } from "../SelectEntry";
import styles from "./styles.module.scss";

declare type Props = {
  onRegisterSuccess: Function;
};

const feePerEntry = 180;

function _View({ onRegisterSuccess }: Props) {
  const entryIdsRegistered = useAppSelector(selectEntryIdsRegistered);

  const [_selectedEntries, setSelectedEntries] =
    useState<string[]>(entryIdsRegistered);
  const selectedEntries =
    _selectedEntries.length > 0 ? _selectedEntries : entryIdsRegistered;
  const dispatch = useAppDispatch();
  const userId = useAppSelector(selectUserId);

  console.log("mylog selected: ", selectedEntries);

  useEffect(() => {
    dispatch(fetchAllNominate());
    dispatch(fetchProjectNominate());
  }, [dispatch, userId]);

  const allNominate = useAppSelector(selectNominates);

  const toalEntries = selectedEntries.length;

  const _onSelectEntry = (entryId: string) =>
    setSelectedEntries([...selectedEntries, entryId]);
  const _onRemoveEntry = (entryId: string) =>
    setSelectedEntries(selectedEntries.filter((id) => id != entryId));

  async function handleCreateOrder(
    data: CreateOrderData,
    actions: CreateOrderActions
  ) {
    const token = selectToken(store.getState());
    const referenceId = await registerNominateEntries(
      selectedEntries,
      token
    ).catch((err) => getNominateEntriesRegistered(token));

    const orderId = await actions.order.create({
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
    return orderId;
  }
  async function onApprove(data: OnApproveData, actions: OnApproveActions) {
    const token = selectToken(store.getState());
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
              onSelectEntry={_onSelectEntry}
              onRemoveEntry={_onRemoveEntry}
              title="NOMINATE YOUR ENTRY"
              label={item.name}
              selectIds={selectedEntries}
              description={item.description}
              feePerEntry={feePerEntry}
              entries={item.entries}
            />
          ))}
        <TotalEntriesOverview
          totalEntries={toalEntries}
          totalFee={toalEntries * feePerEntry}
        />
        <div className={styles.paymentButton}>
          <PayPalScriptProvider
            options={{
              locale: "en_GB",
              "client-id": paypalClientId,
            }}
          >
            <PayPalButtons
              disabled={isPaid || toalEntries <= 0}
              style={{
                layout: "horizontal",
                label: "buynow",
                color: "gold",
                tagline: false,
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
