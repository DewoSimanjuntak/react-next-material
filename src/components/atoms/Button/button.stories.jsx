import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { StyledButton } from "./button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const buttonComponents = {
  title: "Atoms/Button",
  component: StyledButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: {
      options: ['small', 'large'],
      control: { type: 'radio' },
    },
  },
};

// 👇️ use default export
export default buttonComponents;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <StyledButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  theme : "patient",
  type : "primary",
  primary: true,
  label: "Primary",
  size: "large",
  gradient: false
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme : "patient",
  type : "secondary",
  primary: false,
  label: "Secondary",
  size: "small",
  gradient: false
};