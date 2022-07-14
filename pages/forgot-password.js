import ForgotPasswordComponent from "../src/components/ForgotPassword/forgotPassword"
import SetPasswordComponent from "../src/components/SetPassword/setPassword"
import styles from "../styles/Login.module.css";

export default function ForgotPasswordPage() {
    return (
        <div className={styles.forgotPasswordPage}>
            <section className={styles.forgotPasswordComponentContainer}>
                <ForgotPasswordComponent />
            </section>
            <section className={styles.forgotPasswordComponentContainer}>
                <SetPasswordComponent />
            </section>
        </div>
    )
}