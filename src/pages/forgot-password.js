import ForgotPasswordComponent from "../components/organisms/ForgotPassword/forgotPassword";
import SetPasswordComponent from "../components/organisms/SetPassword/setPassword";
import styles from "../../styles/Login.module.css";

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
  );
}
