import Head from 'next/head'
import styles from './authLayout.module.scss'
import {colors} from '../../styles/theme'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Layouts Auth</title>
      </Head>
      <div className={styles.authLayout}>
        <div className={styles.authContainer}>
          <section className={[styles.authComponentContainer, 'hide-scrollbar'].join(' ')}>
            {children}
          </section>
          
          <section className={styles.authImageContainer}>
            {/* <img
              src="https://c4.wallpaperflare.com/wallpaper/930/115/679/panda-4k-high-quality-hd-wallpaper-preview.jpg"
              className={styles.imageBanner}
            /> */}
          </section>
        </div>
      </div>
    </>
  )
}