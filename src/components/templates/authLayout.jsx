import Head from 'next/head'
import styles from './authLayout.module.css'
import {colors} from '../../styles/theme'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <main className={styles.main}
        style={{
          backgroundColor: colors.darkGreen
        }}>
        <div className="content">
          {children}
        </div>
        <div className={styles.backdrop}></div>
      </main>
    </>
  )
}