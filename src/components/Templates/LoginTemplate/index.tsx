import { FC, useState } from "react";
import { inputs, formType } from "./LoginStrings";
import { Title } from "../../Atoms/Div/DivStrings";
import FormHeader from "components/Organisms/Shared/FormHeader/index";
import LoginForm from "components/Organisms/LoginForm/index";
import styles from "./LoginTemplate.module.css";
import { Users } from "../../../../Data/Users/index";

interface LoginTemplateProps {
  handleLinkClick: React.MouseEventHandler<HTMLAnchorElement>;
}

type Values = {
  email: string;
  password: string;
};

const LoginTemplate: FC<LoginTemplateProps> = (
  props: LoginTemplateProps
): JSX.Element => {
  const [values, setValues] = useState<Values>({
    email: "",
    password: "",
  });

  const [successValidator, setSuccessValidator] = useState(false);

  const [emailValidator, setEmailValidator] = useState(false);

  const [passwordValidator, setPasswordValidator] = useState(false);

  const handleSuccValidation = (): void => {
    setSuccessValidator(!successValidator);
  };

  const handleEmailValidation = (): void => {
    setEmailValidator(!emailValidator);
  };

  const handlePasswordValidation = (): void => {
    setPasswordValidator(!passwordValidator);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (
      Users[values.email] &&
      Users[values.email].password !== values.password
    ) {
      setEmailValidator(false);
      setSuccessValidator(false);
      handlePasswordValidation();
    } else if (
      Users[values.email] &&
      Users[values.email].password === values.password
    ) {
      setEmailValidator(false);
      setPasswordValidator(false);
      handleSuccValidation();
    } else if (!Users[values.email]) {
      setSuccessValidator(false);
      handleEmailValidation();
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <div className={styles.loginForm}>
      <FormHeader formTitle={Title.Login} />
      <LoginForm
        formType={formType}
        handleLinkClick={props.handleLinkClick}
        handleSubmit={handleSubmit}
        inputs={inputs}
        isValidatedEmail={emailValidator}
        isValidatedLogin={successValidator}
        isValidatedPassword={passwordValidator}
        onChange={onChange}
        password={""}
        values={values}
        withIcon={false}
      />
    </div>
  );
};

export default LoginTemplate;
