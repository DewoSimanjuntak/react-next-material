import React from "react";

import MenuIcon from "./menu"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const iconMenuAtoms = {
  title: "Icons/Menu",
  component: MenuIcon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {

  },
}

// 👇️ use default export
export default iconMenuAtoms;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <MenuIcon {...args} />;

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  
};