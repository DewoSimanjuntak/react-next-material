import Head from "next/head";
import styles from "./authLayout.module.scss";
import { colors } from "../../styles/theme";
import Container from '@mui/material/Container';

import dynamic from "next/dynamic";

//Prevent html being match between server and client
const BaseHeader = dynamic(
  () => import("../organisms/BaseHeader/baseHeader"),
  {
    ssr: false,
  }
);

export default function Layout({ children, showMobileImage=false }) {
  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <div className={styles.authLayout}>
        <BaseHeader></BaseHeader>
        <div className={styles.authContainer}>
          <Container className={styles.authComponentContainer} sx={{paddingTop: { xs: showMobileImage ? '35px' : '75px'}, padding: 0}}>
            {children}
          </Container>

          <Container className={styles.authImageContainer} sx={{display: { xs: showMobileImage ? 'flex' : 'none', md: 'flex'}, padding: 0}}>
            <img
              src="https://c4.wallpaperflare.com/wallpaper/930/115/679/panda-4k-high-quality-hd-wallpaper-preview.jpg"
              className={styles.imageBanner}
            />
          </Container>
        </div>
      </div>
    </>
  );
}
