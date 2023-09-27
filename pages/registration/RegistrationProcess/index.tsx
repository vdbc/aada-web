import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  timelineItemClasses,
  TimelineSeparator,
} from "@mui/lab";
import styles from "./styles.module.scss";

const items = [
  {
    cardTitle: "CREATE YOUR AADA ACCOUNT",
    cardDetailedText:
      "Complete the official account registration form on the AADA website. You will need to enter essential personal and business details, and there are optional fields for additional terms that you can decide whether or not to complete.",
  },
  {
    cardTitle: "SELECT YOUR NOMINATION CATEGORY",
    cardDetailedText:
      "Select the appropriate discipline and category for your submission. You can nominate in multiple categories, and the available categories vary based on your chosen discipline.",
  },
  {
    cardTitle: "PAYMENT of fees",
    cardDetailedText:
      " In 2024, AADA charges fees on a per-entry basis. After you've finished submitting your entry, you will be directed to the PayPal payment gateway. An electronic invoice will then be sent to your email to confirm the successful receipt of your payment.",
  },
  {
    cardTitle: "SUBMIT YOUR ENTRY DOCUMENTS",
    cardDetailedText:
      "The evaluation process for the 2024 AADA relies on judges who use a scoring procedure. Therefore, it's essential to provide a comprehensive description of your project and business. To complete your nomination, you must submit the following documents: a Project Statement, detailed project particulars, and a minimum of 10 images.",
  },
];

export default function View() {
  return (
    <div className={styles.container}>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {items.map((item) => (
          <TimelineItem key={item.cardTitle}>
            <TimelineSeparator className={styles.separator}>
              <TimelineDot variant="outlined" color="secondary" />
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            </TimelineSeparator>
            <TimelineContent className={styles.card}>
              <header className={styles.title}>{item.cardTitle}</header>
              <div className={styles.text}>{item.cardDetailedText}</div>
            </TimelineContent>
          </TimelineItem>
        ))}
        {/* <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Eat</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Code</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>Sleep</TimelineContent>
        </TimelineItem> */}
      </Timeline>
    </div>
  );
}
