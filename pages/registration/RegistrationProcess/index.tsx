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
      "Fill the registration form for an official account on AADA website. You may have to provide required information of yourself and the participating business and non-mandatory fields for additional terms that you can choose whether to fill or not.",
  },
  {
    cardTitle: "SELECT YOUR NOMINATION CATEGORY",
    cardDetailedText:
      "Choose the suitable discipline and category for your entry. The number of nomination is not limited. The categories change depending on chosen discipline.",
  },
  {
    cardTitle: "PAYMENT of fees",
    cardDetailedText:
      "All fees are charge per entry by 2023 AADA. Upon completion of your submission, you will be directed to Paypal payment gateway. An e-invoice will be send to your email to acknowledge receipt your successful payment.",
  },
  {
    cardTitle: "SUBMIT YOUR ENTRY DOCUMENTS",
    cardDetailedText:
      "The 2023 AADA evaluation process is a judge-based scoring procedure, hence you are required to provide detailed description of your project and business. The documents needed to complete your nomination include a Project Statement, Details and at least 10 pictures (or video, if possible).",
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
        {items.map((item, index) => (
          <TimelineItem>
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
