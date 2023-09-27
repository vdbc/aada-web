import { Chrono } from "react-chrono";
import { useMediaQuery } from "../../../hooks/responsive";
import styles from "./styles.module.scss";

const items = [
  {
    cardTitle: "OPEN FOR ENTRY",
    cardSubtitle: "August 2023",
    cardDetailedText:
      "Embrace the opportunity to be recognized through the 2024 Asia Architecture Design Awards by taking part in the inspiring categories. Your talents are welcomed with an enticing early bird offer.",
  },
  {
    cardTitle: "submission deadline",
    cardSubtitle: "January 2024",
    cardDetailedText:
      "The approaching deadline marks the last opportunity to submit your entry, presenting the possibility of attaining prestigious awards in recognition of your diligent and dedicated work.",
  },
  {
    cardTitle: "judging process",
    cardSubtitle: "March 2024",
    cardDetailedText:
      "A thoughtfully curated panel of judges from diverse industries ensures a comprehensive range of knowledge, skills, and expertise, guaranteeing complete transparency throughout the evaluation process.",
  },
  {
    cardTitle: "2024 aada winners’ gala",
    cardSubtitle: "June 2024",
    cardDetailedText:
      "The 2024 AADA Winners' Night honors exceptional accomplishments from the 6-month competition and offers networking opportunities. The red-carpet event gathers award recipients, industry professionals, international media, and influential figures for a memorable celebration.",
  },
];

export default function View() {
  const isSmallScreen = useMediaQuery("(max-width: 700px)");
  const isLargeScreen = useMediaQuery("(min-width: 1200px)");

  const timelineTitle = (
    <div className={styles.timelineTitle}>THE TIMELINE</div>
  );

  if (isLargeScreen) {
    return (
      <div className={styles.registrationTimeline}>
        {timelineTitle}
        <img alt="Registration Timeline" src="/registrationTimeline.svg" />
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
          primary: "#a58566",
          titleColorActive: "#a58566",
          cardForeColor: "#a58566",
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
