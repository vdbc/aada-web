import { MdArrowForwardIos } from "react-icons/md";
import AccountInfo from "../AccountInfo";
import OrganizationInfo from "../OrganizationInfo";
import SelectEntry, { TotalEntriesOverview } from "../SelectEntry";
import styles from "./styles.module.scss";

declare type Props = {
  onRegisterSuccess: Function;
};

const feePerEntry = 180;

export default function _View({ onRegisterSuccess }: Props) {
  return (
    <div className={styles.container}>
      <div>
        <SelectEntry
          title="NOMINATE YOUR ENTRY"
          label="2023 Best architecture design"
          description="Rewarding the work of professional architect that exemplifies design excellence and architectural innovation whilst delivering meaningful social impact."
          feePerEntry={feePerEntry}
          entries={[]}
        />
        <SelectEntry
          title="NOMINATE YOUR ENTRY"
          label="2023 Best Interior Design"
          description="Honoring the innovative visions and remarkable works of interior designers that fulfill and enhance living experience."
          feePerEntry={feePerEntry}
          entries={[]}
        />
        <SelectEntry
          title="NOMINATE YOUR ENTRY"
          label="2023 Best Furniture Design"
          description="Indication and celebration of practical, ground-breaking products in Furniture Design that have great impact in daily lives."
          feePerEntry={feePerEntry}
          entries={[]}
        />
        <SelectEntry
          title="NOMINATE YOUR ENTRY"
          label="2023 Best Firms in Architecture Design"
          description="Honoring the excellence of full-serviced Architectural & Landscaping firms, showcasing the phenomenal and undeniable impact of architects in daily lives."
          feePerEntry={feePerEntry}
          entries={[]}
        />
        <SelectEntry
          title="NOMINATE YOUR ENTRY"
          label="2023 Best Firms in Interior Design"
          description="A certification of excellence to Interior Design Firms in providing outstanding, inspiring projects that create create true exemplars in the industry."
          feePerEntry={feePerEntry}
          entries={[]}
        />
        <SelectEntry
          title="NOMINATE YOUR ENTRY"
          label="2023 Best Furniture Manufacturer/Distributor"
          description="Praising and acknowledging exceptional companies and brands in manufacturing and distributing Furniture."
          feePerEntry={feePerEntry}
          entries={[]}
        />
        <TotalEntriesOverview totalEntries={2} totalFee={360} />
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
