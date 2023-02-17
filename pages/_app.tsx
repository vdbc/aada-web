import { createTheme, ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { wrapper } from "../store";
import "../styles/globals.css";
import { getInitialAppProps } from "../utils/redux";

const theme = createTheme({
  palette: {
    primary: {
      main: "#a67f56",
    },
    secondary: {
      main: "#FAC47E",
    },
  },
});

function App({ Component, ...rest }: AppProps) {
  const { store } = wrapper.useWrappedStore(rest);
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>2023 Asia Architecture Design Awards</title>
        <meta name="description" content="Asia Architecture Design Awards" />
        <link rel="icon" href="/favicon.svg" />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900&display=optional"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            <!-- Google Tag Manager -->
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5WP8HRD')
            <!-- End Google Tag Manager -->
          `,
          }}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '723036622468717');
            fbq('track', 'PageView');
          `,
          }}
        ></script>
      </Head>
      <main>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5WP8HRD"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Component {...rest.pageProps} />
          </ThemeProvider>
          <ToastContainer theme="colored" hideProgressBar autoClose={4000} />
        </Provider>
      </main>
    </Fragment>
  );
}

App.getInitialProps = getInitialAppProps;

export default App;
