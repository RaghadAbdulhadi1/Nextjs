import { FC } from "react";
import FormFeild from "components/Molecules/InputFeilds/FormFeild/index";
import FormFooter from "../Shared/FormFooter/index";

interface LoginFormProps {
  formType: string;
  handleLinkClick: React.MouseEventHandler<HTMLAnchorElement>;
  handleSubmit: React.FormEventHandler;
  inputs: object[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  password: string;
  values: object;
  withIcon: boolean;
}

const LoginForm: FC<LoginFormProps> = ({
  formType,
  handleLinkClick,
  handleSubmit,
  inputs,
  onChange,
  password,
  values,
}): JSX.Element => {
  return (
    <form onSubmit={handleSubmit} className={formType}>
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
            {...input}
          />
        );
      })}
      <FormFooter
        formType={formType}
        handleLinkClick={handleLinkClick}
        textLink={false}
      />
    </form>
  );
};

export default LoginForm;
