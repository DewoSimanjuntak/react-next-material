import { ThemeProvider, styled } from '@mui/material/styles';
import React from "react";
import "./button.css";

import Button from "@mui/material/Button";
import { colors, primaryTheme, secondaryTheme } from "../../../styles/theme";
import { ThemeProviderProps } from '@mui/material/styles/ThemeProvider';

export const CustomButton = styled(Button)
(
  ({ theme }) => `

  background: ${theme.button.background};
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
  primary = true,
  size = "large",
  label = "Button",
  gradient,
  ...props
}) => {
  return (
    <ThemeProvider theme={primary ? primaryTheme : secondaryTheme}>
      <CustomButton variant={primary ? 'text' : 'outlined'}
        className={[
          'custom-button',
          `custom-button--${size}`,
          gradient ? 'custom-button--gradient' : ''
          ].join(' ')}>
        {label}
      </CustomButton>
    </ThemeProvider>
  );
}