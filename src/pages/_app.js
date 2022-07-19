import { NextIntlProvider } from "next-intl";
import "../../styles/globals.css";

function getStaticProps({ locale }) {
  return {
    props: {
      messages: require(`../locales/${locale}.json`),
    },
  };
}

function App({ Component, pageProps }) {
  const intlProps = getStaticProps({ locale: "en" });

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <NextIntlProvider messages={intlProps.props.messages}>
      {getLayout(<Component {...pageProps} />)}
    </NextIntlProvider>
  );
}

export default App;
