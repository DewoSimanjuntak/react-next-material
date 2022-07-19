import SetPasswordComponent from "../components/organisms/SetPassword/setPassword";
import styles from "../../styles/Login.module.css";
import AuthLayout from "../components/templates/authLayout";
import dynamic from "next/dynamic";

//Prevent html being match between server and client
const ForgotPasswordComponent = dynamic(
  () => import("../components/organisms/ForgotPassword/forgotPassword"),
  {
    ssr: false,
  }
);
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
  return <AuthLayout>{page}</AuthLayout>;
};
