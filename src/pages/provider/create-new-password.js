import styles from "../../../styles/Login.module.css";
import AuthLayout from "../../components/templates/authLayout";
import dynamic from "next/dynamic";

const CreateNewPasswordComponent = dynamic(
    () => import("../../components/organisms/ForgotPassword/createNewPassword"),
    {
      ssr: true,
    }
  );

  export default function CreateNewPassword() {
    return (
      <div >
        <section className={styles.forgotPasswordComponentContainer}>
          <CreateNewPasswordComponent />
        </section>
      </div>
    );
  }
  
  CreateNewPassword.getLayout = function getLayout(page) {
    return <AuthLayout>{page}</AuthLayout>;
  };