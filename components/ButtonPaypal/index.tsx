import {
  CreateOrderActions,
  CreateOrderData,
  OnApproveActions,
  OnApproveData,
} from "@paypal/paypal-js";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { flatMap, isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { paypalClientId } from "../../models/AppConfig";
import {
  confirmPaymentNominateEntries,
  getNominateEntriesRegistered,
  registerNominateEntries,
} from "../../services/NominateService";
import { store, useAppDispatch, useAppSelector } from "../../store";
import {
  fetchAllNominate,
  fetchProjectNominate,
  getFeePerEntry,
  selectEntryIdsRegisteredGroupByCategory,
  selectFeePerEntry,
  selectIsNominatePaid,
  selectNominates,
} from "../../store/modules/nominate";
import { selectToken, selectUserId } from "../../store/modules/user";
import styles from "./styles.module.scss";

declare type Props = {
  onRegisterSuccess: Function;
  disabled: any;
};

function _View({ onRegisterSuccess, disabled }: Props) {
  const entryIdsRegistered = useAppSelector(
    selectEntryIdsRegisteredGroupByCategory
  );
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

  const selectEntryIds = flatMap(selectedEntries);

  const toalEntries = selectEntryIds.length;

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
  const _onEntriesChanged = (entryIds: string[], id: string) => {
    setSelectedEntries({
      ...selectedEntries,
      [id]: entryIds,
    });
  };
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
        <div className={styles.paymentButton}>
          <PayPalScriptProvider
            options={{
              "client-id": paypalClientId,
            }}
          >
            <PayPalButtons
              disabled
              style={{
                layout: "horizontal",
                label: "buynow",
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
