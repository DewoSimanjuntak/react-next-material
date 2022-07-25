import React from "react";

import EyeCare from "../../atoms/EyeCareLogo/eyeCareLogo"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const logoAtoms = {
  title: "Icons/EyeCareLogo",
  component: EyeCare,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {

  },
}

// 👇️ use default export
export default logoAtoms;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <EyeCare {...args} />;

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  
};