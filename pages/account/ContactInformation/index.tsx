import { useEffect } from "react";
import InputField from "../../../components/InputField";
import { MarketingContact, Organization } from "../../../models/Organization";
import { useAppDispatch, useAppSelector } from "../../../store";
import userSlice, {
  fetchOrganizationRegistered,
  selectOrganization,
  selectUserId,
} from "../../../store/modules/user";
import { ValueChanged } from "../../../utils/interface";
import InputPhoneNumber from "../InputPhoneNumber";
import styles from "./styles.module.scss";

export default function _View() {
  const organization = useAppSelector(selectOrganization);
  const { marketingContact } = organization;
  const userId = useAppSelector(selectUserId);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOrganizationRegistered());
  }, [userId, dispatch]);

  const onChanged: ValueChanged<Organization> = (value) =>
    dispatch(userSlice.actions.organizationUpdated(value));

  const onMarketingContactChanged: ValueChanged<MarketingContact> = (value) => {
    onChanged({
      ...organization,
      marketingContact: value,
    });
  };

  return (
    <div className={styles.container} key={organization?.id}>
      <h2 className={styles.title}>Organization contact</h2>
      <InputField
        label="Organization name"
        placeholder="Please type your organization name here"
        value={organization?.name}
        onChanged={(value) => onChanged({ ...organization, name: value })}
        required
      />
      <InputField
        label="Country"
        placeholder="Select your Country"
        value={organization?.country}
        onChanged={(value) => onChanged({ ...organization, country: value })}
        required
      />
      <div className={styles.wrapperRow}>
        <div>
          <InputField
            label="City"
            placeholder="Type your city"
            value={organization?.city}
            onChanged={(value) => onChanged({ ...organization, city: value })}
            required
          />
        </div>
        <div>
          <InputField
            label="ZIP / Postal Code"
            placeholder="Your ZIP code"
            value={organization?.zipCode}
            onChanged={(value) =>
              onChanged({ ...organization, zipCode: value })
            }
            required
          />
        </div>
      </div>
      <InputField
        label="Address"
        placeholder="Please type your address"
        value={organization?.address}
        onChanged={(value) => onChanged({ ...organization, address: value })}
        required
      />
      <InputField
        label="Email"
        placeholder="Please type your organization email address"
        value={organization?.email ?? ""}
        onChanged={(value) => onChanged({ ...organization, email: value })}
        required
      />
      <InputPhoneNumber
        label="Phone Number"
        placeholder="Enter your phone number"
        value={organization?.phone ?? ""}
        onChanged={(value) => onChanged({ ...organization, phone: value })}
        className={styles.inputField}
      />
      <div style={{ height: 12 }} />
      <h2 className={styles.title}>Marketing contact</h2>
      <div className={styles.wrapperRow}>
        <div>
          <InputField
            label="First Name"
            placeholder="First name"
            value={marketingContact?.firstName}
            onChanged={(firstName) =>
              onMarketingContactChanged({
                ...marketingContact,
                firstName,
              })
            }
          />
        </div>
        <div>
          <InputField
            label="Last Name"
            placeholder="Last Name"
            value={marketingContact?.lastName}
            onChanged={(lastName) =>
              onMarketingContactChanged({
                ...marketingContact,
                lastName,
              })
            }
          />
        </div>
      </div>
      <InputField
        label="Email"
        placeholder="Please type your email"
        value={marketingContact?.email}
        onChanged={(email) =>
          onMarketingContactChanged({
            ...marketingContact,
            email,
          })
        }
      />
      <InputPhoneNumber
        label="Phone Number"
        placeholder="Enter your phone number"
        value={marketingContact?.phone}
        onChanged={(phone) =>
          onMarketingContactChanged({
            ...marketingContact,
            phone,
          })
        }
        className={styles.inputField}
      />
    </div>
  );
}
