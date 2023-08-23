import { Chrono } from "react-chrono";
import { useMediaQuery } from "../../../hooks/responsive";
import styles from "./styles.module.scss";

const items = [
  {
    cardTitle: "OPEN FOR ENTRY",
    cardSubtitle: "December 2022",
    cardDetailedText:
      "Grab the inaugural awards recognition by participating in the inspiring categories. An early bird offer awaits your talents.",
  },
  {
    cardTitle: "submission deadline",
    cardSubtitle: "March 2023",
    cardDetailedText:
      "The last day to put in your submission to stand a chance in garnering the prestigious awards for your arduous work.",
  },
  {
    cardTitle: "judging process",
    cardSubtitle: "March - May 2023",
    cardDetailedText:
      "A duly selected panel of judges from various industries well represented their range of knowledge, skills and expertise to ensure a complete transparency in the process.",
  },
  {
    cardTitle: "2023 aada winners’ gala",
    cardSubtitle: "June 2023",
    cardDetailedText:
      "The 2023 AADA Winners’ Gala Night celebrates the outstanding works of the 6-month competition, yet brings about the networking opportunities for participants. The red-carpet event is for high-profile attendees that acquire the award, industry professionals, international media, industry KOLs, and KOCs.",
  },
];

export default function View() {
  const isSmallScreen = useMediaQuery("(max-width: 700px)");
  const isLargeScreen = useMediaQuery("(min-width: 1200px)");

  const timelineTitle = (
    <div className={styles.timelineTitle}>AADA TIMELINE</div>
  );

  if (isLargeScreen) {
    return (
      <div className={styles.registrationTimeline}>
        {timelineTitle}
        <img alt="Registration Timeline" src="/registration_timeline.svg" />
      </div>
    );
  }

  const mode = isSmallScreen ? "VERTICAL" : "VERTICAL_ALTERNATING";

  return (
    <div className={styles.registrationTimeline}>
      {timelineTitle}
      <Chrono
        mode={mode}
        hideControls
        useReadMore={false}
        theme={{
          cardBgColor: "white",
          primary: "#353a4e",
          titleColorActive: "#353a4e",
          cardForeColor: "#353a4e",
        }}
        activeItemIndex={-1}
        disableClickOnCircle
        classNames={{
          card: styles.card,
          cardTitle: styles.title,
          cardSubTitle: styles.subTitle,
          cardText: styles.text,
        }}
        cardPositionHorizontal="BOTTOM"
        items={items}
      />
    </div>
  );
}
