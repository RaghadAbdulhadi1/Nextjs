import { FC } from "react";
import {
  VALIDATION_CONTENT,
  VALIDATION_TITLE,
} from "./RegisterValidatorStrings";
import { Header } from "../../../Atoms/Header";
import { Paragraph } from "../../../Atoms/Paragraph";
import styles from "./RegisterValidators.module.css";

type Input = "email" | "userName" | "password" | "confirmPassword";

interface RegisterValidatorProps {
  inputType: Input;
  onBlurPasswordFeild: boolean;
  isValidatedCapitalLetter: boolean;
  isValidatedCharcters: boolean;
  isValidatedNumbers: boolean;
  isValidatedSmallLetters: boolean;
}

const PasswordValidator: FC<RegisterValidatorProps> = (props): JSX.Element => {
  const validators = {
    password: (
      <>
        <Header
          className={styles.passwordHeader}
          innerText={VALIDATION_TITLE.PASSWORD_CHECK}
        />
        <Paragraph
          className={
            props.isValidatedCapitalLetter ? styles.valid : styles.invalid
          }
          id={props.id}
          innerText={VALIDATION_CONTENT.PASSWORD_CHECK.CAPITAL_LETTER_CHECK}
        />
        <Paragraph
          className={props.isValidatedCharcters ? styles.valid : styles.invalid}
          id={props.id}
          innerText={VALIDATION_CONTENT.PASSWORD_CHECK.CHARCHTERS_CHECK}
        />
        <Paragraph
          className={props.isValidatedNumbers ? styles.valid : styles.invalid}
          id={props.id}
          innerText={VALIDATION_CONTENT.PASSWORD_CHECK.NUMBERS_CHECK}
        />
        <Paragraph
          className={
            props.isValidatedSmallLetters ? styles.valid : styles.invalid
          }
          id={props.id}
          innerText={VALIDATION_CONTENT.PASSWORD_CHECK.SMALL_LETTER_CHECK}
        />
      </>
    ),
  };

  return (
    <div
      className={
        props.onBlurPasswordFeild
          ? styles.onPasswordValidation
          : styles.outPasswordValidation
      }
    >
      {validators[props.inputType]}
    </div>
  );
};

export default PasswordValidator;
