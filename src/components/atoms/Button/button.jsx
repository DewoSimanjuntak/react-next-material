import { ThemeProvider, styled } from '@mui/material/styles';
import React from "react";
//import "./button.css";

import Button from "@mui/material/Button";
import { colors, primaryTheme, patientButtonPrimary, patientButtonSecondary, secondaryTheme} from "../../../styles/theme";
//import { ThemeProviderProps } from '@mui/material/styles/ThemeProvider';

export const CustomButton = styled(Button)
(
  ({ theme }) => `

  background: ${theme.button.background};
  border-color:${theme.button.borderColor};
  color: ${theme.button.color};
  border-radius: 46px;
  padding: 16px;

  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-transform: none;

  :hover {
    background:${theme.button.background};
    border-color:${theme.button.borderColor};
  }
`,
)
// (({theme}) => ({
//   // color: theme.status.danger,
//   fontSize: theme.button.primary.fontSize,
//   background: theme.button.primary.background,
//   borderRadius: theme.button.primary.borderRadius,
//   color: 'white'
// }));
export const StyledButton = ({
  theme = "patient" || "provider",
  type = "primary" || "secondary",
  size = "large",
  gradient,
  ...props
}) => {
  const isPatient = theme === "patient"
  const isPrimary = type === "primary"
  let themeSelector = isPatient ? isPrimary ? patientButtonPrimary : patientButtonSecondary :
  isPrimary ? providerButtonPrimary : providerButtonPrimary
  return (
    <ThemeProvider theme={themeSelector}>
      <CustomButton variant={type === isPrimary ? 'contained' : 'outlined'}
        className={[
          'custom-button',
          `custom-button--${size}`,
          gradient ? 'custom-button--gradient' : ''
          ].join(' ')}
          {...props}/>
    </ThemeProvider>
  );
}