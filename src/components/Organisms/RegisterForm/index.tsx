import { FC } from "react";
import Country from "components/Molecules/InputFeilds/CountryFeild/index";
import FormFeild from "components/Molecules/InputFeilds/FormFeild/index";
import FormFooter from "../Shared/FormFooter/index";
import GenderFeild from "components/Molecules/InputFeilds/GenderFeild/index";
import styles from "./RegisterForm.module.css";

interface RegisterFormProps {
  formType: string;
  handleLinkClick: React.MouseEventHandler<HTMLAnchorElement>;
  handleMClick: React.MouseEventHandler<HTMLAnchorElement>;
  handleSubmit: React.FormEventHandler;
  inputs: object[];
  onChange: React.FormEventHandler<HTMLInputElement> | undefined;
  password: string;
  values: object;
  withIcon: boolean;
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
}: RegisterFormProps): JSX.Element => {
  return (
    <form className={styles.register} onSubmit={handleSubmit}>
      {inputs.map((input): JSX.Element => {
        return (
          <FormFeild
            errorMessage={input.errorMessage}
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
            {...input}
          />
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
  );
};

export default RegisterForm;
