import { FC } from "react";
import FormFeild from "components/Molecules/InputFeilds/FormFeild/index";
import FormFooter from "../Shared/FormFooter/index";
import LoginValidator from "components/Molecules/Validators/LoginValidators/index";
interface LoginFormProps {
  formType: string;
  handleLinkClick: React.MouseEventHandler<HTMLAnchorElement>;
  handleSubmit: React.FormEventHandler;
  inputs: object[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  password: string;
  values: object;
  withIcon: boolean;
  isValidatedEmail: boolean;
  isValidatedPassword: boolean;
  isValidatedLogin: boolean
}

const LoginForm: FC<LoginFormProps> = ({
  formType,
  handleLinkClick,
  handleSubmit,
  inputs,
  onChange,
  password,
  values,
  isValidatedEmail,
  isValidatedPassword,
  isValidatedLogin
}): JSX.Element => {
  return (
    <form noValidate onSubmit={handleSubmit} className={formType}>
      {inputs.map((input): JSX.Element => {
        return (
          <FormFeild
            formType={formType}
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
            isValidatedEmail={isValidatedEmail}
            isValidatedPassword={isValidatedPassword}
            {...input}
          />
        );
      })}
      <FormFooter
        formType={formType}
        handleLinkClick={handleLinkClick}
        textLink={false}
      />
      <LoginValidator
        isValidatedEmail={isValidatedEmail}
        isValidatedPassword={isValidatedPassword}
        isValidatedLogin={isValidatedLogin}
      />
    </form>
  );
};

export default LoginForm;
