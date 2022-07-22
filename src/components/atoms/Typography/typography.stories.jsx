import React from "react";
import { Typography as MUITypography} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { typography as typographyTheme } from "../../../styles/theme"

// import Link from '@mui/material/Link';
import Link from 'next/link';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Typography",
  component: Link,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {

  },
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ThemeProvider theme={typographyTheme}><MUITypography {...args}>{args.content}</MUITypography></ThemeProvider>;

export const HeroTitle = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HeroTitle.args = {
  variant: 'heroTitle',
  content: "Hero Title"
};

export const H1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
H1.args = {
  variant: 'h1',
  content: "Our Services"
};

export const H2 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
H2.args = {
  variant: 'h2',
  content: "Our Services"
};

export const H3 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
H3.args = {
  variant: 'h3',
  content: "Our Services"
};

export const BodyRegular = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BodyRegular.args = {
  content: "Our doctors are committed to providing vision care to those who need it during this crisis. Our trusted team of highly trained eye care professionals focus on maintaining the health of your eyes with comprehensive eye care including routine eye exams, preventative care and treatment."
};

