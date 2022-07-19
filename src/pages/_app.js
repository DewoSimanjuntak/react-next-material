import "../../styles/globals.scss";
import Cookies from 'universal-cookie';

function App({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  const cookies = new Cookies();
  const currentAuthorized = cookies.get('authorized')
  if (currentAuthorized === undefined) {
    cookies.set('authorized', 'false', { path: '/' });
  }
  return getLayout(<Component {...pageProps} />);
}

export default App;
