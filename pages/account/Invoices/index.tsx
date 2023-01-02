import { useEffect } from "react";
import InputField from "../../../components/InputField";
import { BillingModel } from "../../../models/BillingModel";
import { useAppDispatch, useAppSelector } from "../../../store";
import billingSlice, {
  createBillingInfo,
  fetchBillingRegistered,
  selectBilling,
  updateBillingRegistered,
} from "../../../store/modules/billing";
import { selectUserId } from "../../../store/modules/user";
import { ValueChanged } from "../../../utils/interface";
import InputPhoneNumber from "../InputPhoneNumber";
import styles from "./styles.module.scss";

export default function _View() {
  const billing = useAppSelector(selectBilling);
  const userId = useAppSelector(selectUserId);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBillingRegistered());
  }, [dispatch, userId]);

  const onChanged: ValueChanged<BillingModel> = (billing) => {
    dispatch(billingSlice.actions.billingUpdated(billing));
  };

  function handleSubmit() {
    if (billing.id) {
      dispatch(updateBillingRegistered(billing));
    } else {
      dispatch(createBillingInfo(billing));
    }
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Billing address</h2>
      <InputField
        label="Recipient’s name"
        placeholder="Please type recipient’s name"
        value={billing.name}
        onChanged={(name) => onChanged({ ...billing, name })}
      />
      <InputField
        label="Address line 1"
        placeholder="Please type your address"
        value={billing.address1}
        onChanged={(address1) => onChanged({ ...billing, address1 })}
        required
      />
      <InputField
        label="Address line 2"
        placeholder="Please type your address"
        value={billing.address2}
        onChanged={(address2) => onChanged({ ...billing, address2 })}
      />
      <div className={styles.wrapperRow}>
        <div>
          <InputField
            label="City"
            placeholder="Type your city"
            value={billing.city}
            onChanged={(city) => onChanged({ ...billing, city })}
            required
          />
        </div>
        <div>
          <InputField
            label="ZIP / Postal Code"
            placeholder="Your ZIP code"
            value={billing.zipCode}
            onChanged={(zipCode) => onChanged({ ...billing, zipCode })}
            required
          />
        </div>
      </div>
      <InputField
        label="Country"
        placeholder="Select your country"
        value={billing.country}
        onChanged={(country) => onChanged({ ...billing, country })}
        required
      />
      <InputField
        label="Email"
        placeholder="Enter your email address"
        value={billing.email}
        onChanged={(email) => onChanged({ ...billing, email })}
        required
      />
      <InputPhoneNumber
        label="Phone Number"
        placeholder="Enter your phone number"
        value={billing.phone}
        onChanged={(phone) => onChanged({ ...billing, phone })}
        className={styles.inputField}
      />
      <div className={styles.actions}>
        <button onClick={handleSubmit}>Save</button>
      </div>
    </div>
  );
}
