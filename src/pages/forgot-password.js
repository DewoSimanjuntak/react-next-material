import styles from "../../styles/Login.module.css";
import AuthLayout from "../components/templates/authLayout";
import ForgotPasswordComponent from "../components/organisms/ForgotPassword/forgotPassword";
import SetOptionComponent from "../components/organisms/SelectOption/selectOption";

const forgotPasswordProps = {
  OnBackToLoginClicked: function (router) {
    router.push("/login");
  }
};

const setOptionProps = {
  OnBackToLoginClicked: function (router) {
    router.push("/login");
  }
};
export default function ForgotPasswordPage() {

  return (
    <div className={[styles.forgotPasswordPage, 'hide-scrollbar'].join(' ')}>
      <section className={styles.forgotPasswordComponentContainer}>
        {/* <ForgotPasswordComponent {...forgotPasswordProps}/> */}
        <SetOptionComponent {...setOptionProps}/>
      </section>
    </div>
  );
}

ForgotPasswordPage.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
