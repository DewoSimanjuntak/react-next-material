import AuthLayout from '../components/templates/authLayout';
import Login from "../components/organisms/Login/login";
import styles from "../../styles/Login.module.css";

export default function LoginPage() {
  return (
    <section className={styles.authComponentContainer}>
      <Login />
    </section>
    // <div className={styles.authLayout}>
    //   <div className={styles.authContainer}>
    //     <section className={styles.authComponentContainer}>
    //       <Login />
    //     </section>
    //   </div>
    //   <section className={styles.authImageContainer}>
    //     <img
    //       src="https://c4.wallpaperflare.com/wallpaper/930/115/679/panda-4k-high-quality-hd-wallpaper-preview.jpg"
    //       className={styles.imageBanner}
    //     />
    //   </section>
    // </div>
  );
}

LoginPage.getLayout = function getLayout(page) {
  return (
    <AuthLayout>
      {page}
    </AuthLayout>
  )
}