import React, { useState } from "react";
import styles from "../../styles/Login.module.css";
import AuthLayout from "../components/templates/authLayout";
import ForgotPasswordComponent from "../components/organisms/ForgotPassword/forgotPassword";
import SetOptionComponent from "../components/organisms/SelectOption/selectOption";
import PasswordSecurityQuestionComponent from "../components/organisms/PasswordSecurityQuestion/PasswordSecurityQuestion";

const MOCKED_SECURITY_QUESTION = [ 
  {"SecurityQuestion-1": "DetailQuestion1", "SecurityAnswer-1": "DetailAnswer1"}, 
  {"SecurityQuestion-2": "DetailQuestion2", "SecurityAnswer-2": "DetailAnswer2"}, 
  {"SecurityQuestion-3": "DetailQuestion3", "SecurityAnswer-3": "DetailAnswer3"} 
] 

const forgotPasswordProps = {
  OnBackToLoginClicked: function (router) {
    router.push("/login");
  }
};
export default function ForgotPasswordPage() {
  const [showForgotPassword, setShowForgotPassword] = useState(true);
  const [showSetOption, setShowSetOption] = useState(false);
  const [showPasswordSecurityQuestio, setShowPasswordSecurityQuestion] = useState(false);

  const onContinueButtonClicked = function(form){
    setShowForgotPassword(false)
    setShowSetOption(false)
    setShowPasswordSecurityQuestion(false)

    if(form==="setOption"){
      setShowSetOption(true)
    } else if(form==="securityQuestion"){
      setShowPasswordSecurityQuestion(true)
    }
  }

  return (
    <div className={[styles.forgotPasswordPage, 'hide-scrollbar'].join(' ')}>
      <section className={styles.forgotPasswordComponentContainer}>
        {showForgotPassword ? <ForgotPasswordComponent {...forgotPasswordProps} OnContinueButtonClicked={onContinueButtonClicked}/> : <></>}
        {showSetOption ? <SetOptionComponent {...forgotPasswordProps} OnContinueButtonClicked={onContinueButtonClicked}/> : <></>}
        {showPasswordSecurityQuestio ? <PasswordSecurityQuestionComponent {...forgotPasswordProps} securityQuestionData={MOCKED_SECURITY_QUESTION}/> : <></>}
      </section>
    </div>
  );
}

ForgotPasswordPage.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
