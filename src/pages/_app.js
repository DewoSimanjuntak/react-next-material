import { NextIntlProvider } from "next-intl";
import "../../styles/globals.css";

function getStaticProps({ locale }) {
  return {
    props: {
      messages: require(`../locales/${locale}.json`),
    },
  };
}

function MyApp({ Component, pageProps }) {
  const intlProps = getStaticProps({ locale: "en" });
  return (
    <NextIntlProvider messages={intlProps.props.messages}>
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}

export default MyApp;
