import { ComponentStory, Meta } from "@storybook/react"; 
import { useState } from "react"; 

import { Button, Props } from './index';
import styles from "./Button.module.css";

const meta: Meta = {
  title: 'Atoms/Button',
  component: Button
} as Meta

export default meta;

const Template = (args) => <Button {...args}/>


export const Default = (args) => <Template {...args}/>;

export const withCSSModules = () => <Template  className={styles.button}/>;
