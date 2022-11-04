import { FC } from "react";
import Icon from "components/Atoms/Icon/index";
import Input from "components/Atoms/Input/index";
import styles from "./FormFeild.module.css";
import PasswordValidator from "components/Molecules/Validators/PasswordValidator/index";

interface FormFeildProps {
  formType: string;
  id: number;
  inputType: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp: (event: React.KeyboardEvent) => void;
  password: string;
  placeholder: string;
  type: string;
  value: string;
  withIcon: boolean;
  onBlurEmailFeild: boolean;
  onBlurPasswordFeild: boolean;
  isValidatedCapitalLetter: boolean;
  isValidatedCharcters: boolean;
  isValidatedNumbers: boolean;
  isValidatedSmallLetters: boolean;
}

const FormFeild: FC<FormFeildProps> = ({
  id,
  inputType,
  name,
  onChange,
  password,
  placeholder,
  onBlurEmailFeild,
  type,
  value,
  withIcon,
  onKeyUp,
  onBlur,
  onFocus,
  onBlurPasswordFeild,
  isValidatedCapitalLetter,
  isValidatedCharcters,
  isValidatedNumbers,
  isValidatedSmallLetters,
  ...inputs
}: FormFeildProps): JSX.Element => {
  return (
    <>
      <div className={styles.inputFeild}>
        <Input
          id={id}
          name={name}
          onChange={onChange}
          password={password}
          placeholder={placeholder}
          type={type}
          value={value}
          onKeyUp={onKeyUp}
          onBlur={onBlur}
          onFocus={onFocus}
          {...inputs}
        />
        {withIcon && <Icon iconType={inputType} className={styles.svg1} />}
      </div>
      {inputType === "password" &&  (
        <PasswordValidator
          inputType={"password"}
          onBlurPasswordFeild={onBlurPasswordFeild}
          isValidatedCapitalLetter={isValidatedCapitalLetter}
          isValidatedCharcters={isValidatedCharcters}
          isValidatedNumbers={isValidatedNumbers}
          isValidatedSmallLetters={isValidatedSmallLetters}
        />
      )}
    </>
  );
};

export default FormFeild;
