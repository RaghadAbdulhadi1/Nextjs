import { FC, useState } from "react";
import { inputs, formType } from "./LoginStrings";
import { Title } from "../../Atoms/Div/DivStrings";
import FormHeader from "components/Organisms/Shared/FormHeader/index";
import LoginForm from "components/Organisms/LoginForm/index";
import styles from "./LoginTemplate.module.css";

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
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
        onChange={onChange}
        password={""}
        values={values}
        withIcon={false}
      />
    </div>
  );
};

export default LoginTemplate;
