import React, { useState } from "react";
import { Link, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { StyledInput } from "../../atoms/Input/input";
import { useTranslation } from "react-i18next";
import globalStyles from "../../../styles/Global.module.scss";
import { useRouter } from "next/router";
import { StyledButton } from "../../atoms/Button/button";
import FormMessage from "../../molecules/FormMessage/formMessage";
import { styles } from "./style"

const ForgotPasswordComponent = ({
  OnBackToLoginClicked,
  OnContinueButtonClicked
}) => {
  const router = useRouter();
  const { t } = useTranslation('translation', { keyPrefix: 'ForgotPassword' });
  const [username, setUsername] = useState("");
  const [showPostMessage, setShowPostMessage] = useState(false);
 
  return (
    <Card className={globalStyles.container} sx={{ minWidth: 275, padding: "16px" }}>
      <CardContent style={styles.cardContentStyle}>
        <Typography variant="h2">
          {t("title")}
        </Typography>
        {showPostMessage ? <FormMessage success={false} sx={styles.postMessage}>{t("errorUsernameNotFound")}</FormMessage> :<></>}
        <StyledInput
          label={t("usernamePlaceHolder")}
          id="username"
          variant="filled"
          style={styles.margin}
          onChange={(event) => setUsername(event.target.value)}
        />
        <StyledButton
          theme="patient"
          type="primary"
          size="large"
          gradient={false}
          onClick={()=>{
            OnContinueButtonClicked("setOption")
          }}
          style={styles.margin}
        >
          {t("resetPasswordText")}
        </StyledButton>
        <Link
            style={styles.margin}
            color={"#2095a9"}
            onClick={function () {
              OnBackToLoginClicked(router);
            }}>
            {t("backButtonLink")}
        </Link>
      </CardContent>
    </Card>
  );
};

export default ForgotPasswordComponent;
