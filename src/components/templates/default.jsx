import Head from 'next/head'
import styles from './default.module.scss'
import {colors} from '../../styles/theme'
import BaseHeader from '../organisms/BaseHeader/baseHeader'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Layouts Default</title>
      </Head>
      <div className={styles.defaultLayout}>
        <BaseHeader />
        <div className={styles.defaultContainer}>
          {children}
        </div>
      </div>
    </>
  )
}