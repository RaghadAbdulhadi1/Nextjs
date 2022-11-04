import { FC } from "react";
import Country from "components/Molecules/InputFeilds/CountryFeild/index";
import FormFeild from "components/Molecules/InputFeilds/FormFeild/index";
import FormFooter from "../Shared/FormFooter/index";
import GenderFeild from "components/Molecules/InputFeilds/GenderFeild/index";
import RegisterValidator from "components/Molecules/Validators/RegisterValidators/index";
import styles from "./RegisterForm.module.css";
import PasswordValidator from "components/Molecules/Validators/PasswordValidator/index";
type Input = "email" | "userName" | "password" | "confirmPassword";

interface RegisterFormProps {
  formType: string;
  handleLinkClick: React.MouseEventHandler<HTMLAnchorElement>;
  handleMClick: React.MouseEventHandler<HTMLAnchorElement>;
  handleSubmit: React.FormEventHandler;
  inputs: object[];
  inputType: Input;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp: (event: React.KeyboardEvent) => void;
  password: string;
  values: object;
  withIcon: boolean;
  onBlurEmailFeild: boolean;
  onBlur: React.FormEventHandler<HTMLInputElement> | undefined;
  onFocus: React.FormEventHandler<HTMLInputElement> | undefined;
  onBlurPasswordFeild: boolean;
  isValidatedCapitalLetter: boolean;
  isValidatedCharcters: boolean;
  isValidatedNumbers: boolean;
  isValidatedSmallLetters: boolean;
}

const RegisterForm: FC<RegisterFormProps> = ({
  formType,
  handleLinkClick,
  handleMClick,
  handleSubmit,
  inputs,
  onChange,
  password,
  values,
  inputType,
  onBlurEmailFeild,
  onBlurPasswordFeild,
  isValidatedCapitalLetter,
  isValidatedCharcters,
  isValidatedNumbers,
  isValidatedSmallLetters,
  onBlur,
  onFocus,
  onKeyUp,
}: RegisterFormProps): JSX.Element => {
  return (
    <>
      <form className={styles.register} onSubmit={handleSubmit}>
        {inputs.map((input): JSX.Element => {
          return (
            <>
              <FormFeild
                onBlurPasswordFeild={onBlurPasswordFeild}
                isValidatedCapitalLetter={isValidatedCapitalLetter}
                isValidatedCharcters={isValidatedCharcters}
                isValidatedNumbers={isValidatedNumbers}
                isValidatedSmallLetters={isValidatedSmallLetters}
                formType={"register"}
                id={input.id}
                inputType={input.name}
                key={input.id}
                name={input.name}
                onChange={onChange}
                password={password}
                placeholder={input.placeholder}
                type={input.type}
                value={values[input.name]}
                withIcon={true}
                onKeyUp={onKeyUp}
                onBlur={onBlur}
                onFocus={onFocus}
                onBlurEmailFeild={onBlurEmailFeild}
                {...input}
              />
            </>
          );
        })}

        <Country />
        <GenderFeild />
        <FormFooter
          formType={formType}
          handleLinkClick={handleLinkClick}
          handleMClick={handleMClick}
          textLink={true}
        />
      </form>
    </>
  );
};

export default RegisterForm;
