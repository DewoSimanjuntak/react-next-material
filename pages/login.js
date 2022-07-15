import Login from "../src/components/Login/login"
import styles from "../styles/Login.module.css";

export default function LoginPage() {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginContainer}>
                <section className={styles.loginComponentContainer}>
                    <Login />
                </section>
            </div>
            <section className={styles.loginImageContainer}>
                <img src="https://c4.wallpaperflare.com/wallpaper/930/115/679/panda-4k-high-quality-hd-wallpaper-preview.jpg" className={styles.imageBanner} />
            </section>
        </div>
    )
}