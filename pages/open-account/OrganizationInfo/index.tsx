import InputField from "../../../components/InputField";
import { Organization, organizationEmpty } from "../../../models/Organization";
import { ValueChanged } from "../../../utils/interface";
import styles from "./styles.module.scss";

declare type Props = {
  organization: Organization;
  onChanged: ValueChanged<Organization>;
};

export default function _View({
  organization = organizationEmpty,
  onChanged,
}: Props) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Organization</h2>
      <InputField
        label="Organization name"
        placeholder="Please type your organization name here"
        value={organization.name}
        onChanged={(value) => onChanged({ ...organization, name: value })}
        required
      />
      <InputField
        label="Country"
        placeholder="Select your Country"
        value={organization.country}
        onChanged={(value) => onChanged({ ...organization, country: value })}
        required
      />
      <div className={styles.wrapperRow}>
        <div>
          <InputField
            label="City"
            placeholder="Type your city"
            value={organization.city}
            onChanged={(value) => onChanged({ ...organization, city: value })}
            required
          />
        </div>
        <div>
          <InputField
            label="ZIP / Postal Code"
            placeholder="Your ZIP code"
            value={organization.zipCode}
            onChanged={(value) =>
              onChanged({ ...organization, zipCode: value })
            }
            required
          />
        </div>
      </div>
      <InputField
        label="Address"
        placeholder="Please type your organization address"
        value={organization.address}
        onChanged={(value) => onChanged({ ...organization, address: value })}
        required
      />
      <InputField
        label="Email address"
        placeholder="Please type your organization email address"
        value={organization.email ?? ""}
        onChanged={(value) => onChanged({ ...organization, email: value })}
      />
      <InputField
        label="Facebook URL"
        placeholder="Please type your Facebook URL"
        value={organization.facebookUrl ?? ""}
        onChanged={(value) =>
          onChanged({ ...organization, facebookUrl: value })
        }
      />
      <InputField
        label="Website URL"
        placeholder="Please type your Website URL"
        value={organization.website ?? ""}
        onChanged={(value) => onChanged({ ...organization, website: value })}
      />
    </div>
  );
}
