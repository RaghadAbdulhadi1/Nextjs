import { FC } from "react";
import {Div} from "components/Atoms/Div/index";
import LineBreak from "components/Atoms/LineBreak/index";
import styles from "components/Atoms/Div/Div.module.css"

interface FormHeaderProps {
  formTitle: string;
}

const FormHeader: FC<FormHeaderProps> = (props): JSX.Element => {
  return (
    <>
      <Div className={styles.title} innerText={props.formTitle} />
      <LineBreak />
    </>
  );
};

export default FormHeader;
