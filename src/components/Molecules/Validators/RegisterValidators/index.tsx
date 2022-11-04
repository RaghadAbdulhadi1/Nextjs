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
  isValidatedEmail?: boolean;
  onBlurEmailFeild: boolean;
  isValidatedUserName: boolean;
  onBlurUserNameFeild: boolean;
  onBlurPasswordFeild: boolean;
  onBlurConfirmPasswordFeild: boolean;
}

const RegisterValidator: FC<RegisterValidatorProps> = (props): JSX.Element => {
  const renderClassName = (inputType): string => {
    if (inputType === "email") {
      return props.onBlurEmailFeild
        ? styles.onEmailValidation
        : styles.outEmailValidation;
    } else if (inputType === "userName") {
      return props.onBlurUserNameFeild
        ? styles.onUserNameValidation
        : styles.outUserNameValidation;
    }else if (inputType === "password") {
      return props.onBlurPasswordFeild
        ? styles.onPasswordValidation
        : styles.outPasswordValidation;
    }else if (inputType === "confirmPassword") {
      return props.onBlurConfirmPasswordFeild
        ? styles.onConfirmPasswordValidation
        : styles.outConfirmPasswordValidation;
    }
  };
  const validators = {
    email: (
      <>
        <Header
          className={styles.emailHeader}
          innerText={VALIDATION_TITLE.EMAIL_ADDRESS_CHECK}
        />
        <Paragraph
          className={props.isValidatedEmail ? styles.valid : styles.invalid}
          id={props.id}
          innerText={VALIDATION_CONTENT.EMAIL_ADDRESS_CHECK}
        />
      </>
    ),
    userName: (
      <>
        <Header
          className={styles.userNameHeader}
          innerText={VALIDATION_TITLE.USER_NAME_CHECK}
        />
        <Paragraph
          className={props.isValidatedUserName ? styles.valid : styles.invalid}
          innerText={VALIDATION_CONTENT.USER_NAME_CHECK}
        />
      </>
    ),
    confirmPassword: (
      <Paragraph
        className={styles.valid}
        id={props.id}
        innerText={VALIDATION_CONTENT.CONFIRM_PASSWORD_CHECK}
      />
    ),
  };

  return <div className={renderClassName(props.inputType)}>{validators[props.inputType]}</div>;
};

export default RegisterValidator;
