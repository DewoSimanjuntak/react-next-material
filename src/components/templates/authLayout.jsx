import Head from "next/head";
import styles from "./authLayout.module.scss";
import { colors } from "../../styles/theme";
import BaseHeader from "../organisms/BaseHeader/baseHeader"; "../../components/organisms/BaseHeader/baseHeader"
import Container from '@mui/material/Container';

export default function Layout({ children, showImage=false }) {
  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <div className={styles.authLayout}>
        <BaseHeader></BaseHeader>
        <div className={styles.authContainer}>
          <Container className={styles.authComponentContainer} sx={{paddingTop: { xs: showImage ? '35px' : '75px'}, padding: 0}}>
            {children}
          </Container>

          <Container className={styles.authImageContainer} sx={{display: { xs: showImage ? 'flex' : 'none'}, padding: 0}}>
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
