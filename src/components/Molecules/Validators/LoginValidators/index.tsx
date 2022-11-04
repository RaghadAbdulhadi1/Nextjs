import { FC } from "react";
import { VALIDATION_CONTENT } from "./LoginValidatorStrings";
import {Paragraph} from "../../../Atoms/Paragraph";
import styles from "./LoginValidators.module.css";

interface LoginValidatorProps {
  isValidatedEmail: boolean;
  isValidatedLogin: boolean;
  isValidatedPassword: boolean;
}

const LoginValidator: FC<LoginValidatorProps> = (props): JSX.Element => {
  return (
    <div className={styles.validationContent}>
      <Paragraph
        className={props.isValidatedLogin ? styles.successSucc : styles.successFailure}
        innerText={VALIDATION_CONTENT["LOGGED_IN_SUCCESS"]}
      />
      <Paragraph
        className={
          props.isValidatedPassword ? styles.successSucc : styles.passwordFailure
        }
        innerText={VALIDATION_CONTENT["PASSWORD_CHECK"]}
      />
      <Paragraph
        className={props.isValidatedEmail ? styles.successSucc : styles.userFailure}
        innerText={VALIDATION_CONTENT["EMAIL_ADDRESS_CHECK"]}
      />
    </div>
  );
};

export default LoginValidator;
