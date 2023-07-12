import Head from "next/head";
import { captureOrder } from "../../../services/WinnerNightService";
import { wrapper } from "../../../store";
import styles from "./styles.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Thank you payment</title>
      </Head>

      <main className={styles.main}>
        <img
          className={styles.aada_partners}
          alt="AADA Partners"
          src="/home/payment.svg"
        />
      </main>
    </div>
  );
}

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async (context) => {
//     const { token: orderId } = context.query ?? {};
//     const res = await captureOrder(orderId?.toString() ?? "");
//     console.log("Winner's Night Capture: ", orderId, res);

//     return {
//       props: {},
//     };
//   }
// );
