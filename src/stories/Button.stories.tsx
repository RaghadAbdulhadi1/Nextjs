import { Button } from "./Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import styles from "./button.module.css";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args): JSX.Element => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Button",
  className: styles.storybookButtonAdd,
};

export const AddButton = Template.bind({});
AddButton.args = {
  text: "Add Color",
  className: styles.storybookButton,
};

export const RemoveButton = Template.bind({});
RemoveButton.args = {
  text: "Remove Color",
  className: styles.storybookButtonRemove,
};
