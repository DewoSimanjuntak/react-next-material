import { I18nextProvider } from "react-i18next";
import "../../styles/globals.css";
import i18n from "../i18n/i18n";

function App({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default App;
