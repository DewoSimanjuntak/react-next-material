import Login from "../src/components/Login/login"
import styles from "../styles/Login.module.css";

export default function LoginPage() {
    return (
        <div className={styles.loginPage}>
            <section className={styles.loginComponentContainer}>
                <Login />
            </section>
            <section className={styles.loginImageContainer}>
                <img src="https://c4.wallpaperflare.com/wallpaper/930/115/679/panda-4k-high-quality-hd-wallpaper-preview.jpg" />
            </section>
        </div>
    )
}