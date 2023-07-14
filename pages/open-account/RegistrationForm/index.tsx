import { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { Events } from "../../../analytics/events";
import { fbTrack } from "../../../analytics/tracking";
import { Organization, organizationEmpty } from "../../../models/Organization";
import { userEmpty, UserModel } from "../../../models/UserModel";
import { registerOrganization } from "../../../services/OrganizationService";
import { requestRegisterUser } from "../../../services/UserService";
import { useAppDispatch } from "../../../store";
import userSlice from "../../../store/modules/user";
import AccountInfo from "../AccountInfo";
import OrganizationInfo from "../OrganizationInfo";
import styles from "./styles.module.scss";
import { Checkbox, Link } from "@mui/material";

declare type RegistrationProps = {
  onRegisterSuccess: Function;
};

function checkCanContinue(
  user: UserModel,
  organization: Organization
): boolean {
  const requiredField = [
    user.firstName,
    user.lastName,
    user.email,
    user.password,
    organization.name,
    organization.address,
    organization.city,
    organization.country,
    organization.zipCode,
  ];
  return requiredField.findIndex((item: string) => item === "") == -1;
}

export default function _View({ onRegisterSuccess }: RegistrationProps) {
  const [user, setUser] = useState<UserModel>(userEmpty);
  const [organization, setOrganization] =
    useState<Organization>(organizationEmpty);
  const [isApprove, setApprove] = useState(false);


  const [isLoading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  async function _handleRegister() {
    setLoading(true);
    try {
      const authModel = await requestRegisterUser(user);
      fbTrack(Events.completeRegistration);
      dispatch(userSlice.actions.setUser(authModel.user));
      dispatch(userSlice.actions.setToken(authModel.token));
      const organizationCreated = await registerOrganization(
        organization,
        authModel.token
      );
      dispatch(userSlice.actions.setOrganization(organizationCreated));

      onRegisterSuccess();
    } catch (err: any) {
      alert(err.message);
    }
    setLoading(false);
  }

  const canContinue = isApprove && !isLoading && checkCanContinue(user, organization);

  return (
    <div className={styles.registration}>
      <AccountInfo onUserUpdated={(user) => setUser(user)} user={user} />
      <OrganizationInfo
        onChanged={(organization) => setOrganization(organization)}
        organization={organization}
      />
      <div className={styles.footerPage}>
        <div className={styles.term}>
          <Checkbox className={styles.checkbox} checked={isApprove} onChange={(event) => setApprove(event.target.checked)} />
          By proceeding, you agree to ASIA ARCHITECTURE DESIGN AWARD{" "}
          <Link href="#">Terms of use</Link> and <a href="#">Privacy Policy</a> and
          agree to receive newsletters from Asia Architecture Design Awards.
        </div>
        <button
          onClick={canContinue ? () => _handleRegister() : undefined}
          className={canContinue ? styles.active : styles.inactive}
        >
          <span>Next</span>
          <MdArrowForwardIos />
        </button>
      </div>
    </div>
  );
}
