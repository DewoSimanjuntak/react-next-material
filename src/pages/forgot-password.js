import AuthLayout from '../components/templates/authLayout';
import ForgotPasswordComponent from "../components/organisms/ForgotPassword/forgotPassword";
import SetPasswordComponent from "../components/organisms/SetPassword/setPassword";
import styles from "../../styles/ForgotPassword.module.css";

export default function ForgotPasswordPage() {
  return (
    <div className={[styles.forgotPasswordPage, 'hide-scrollbar'].join(' ')}>
      <section className={styles.forgotPasswordComponentContainer}>
        <ForgotPasswordComponent />
      </section>
      <section className={styles.forgotPasswordComponentContainer}>
        <SetPasswordComponent />
      </section>
    </div>
  );
}

ForgotPasswordPage.getLayout = function getLayout(page) {
  return (
    <AuthLayout>
      {page}
    </AuthLayout>
  )
}
