import { FC, useState } from "react";
import { inputs, formType } from "./RegisterStrings";
import { Title } from "components/Atoms/Div/DivStrings";
import FormHeader from "components/Organisms/Shared/FormHeader/index";
import RegisterForm from "components/Organisms/RegisterForm/index";
import styles from "./RegisterTemplate.module.css";

interface RegisterTemplateProps {
  handleLinkClick: React.MouseEventHandler<HTMLAnchorElement>;
  handleMClick: React.MouseEventHandler<HTMLAnchorElement>;
}

const RegisterTemplate: FC<RegisterTemplateProps> = ({
  handleLinkClick,
  handleMClick,
}: RegisterTemplateProps): JSX.Element => {
  const [values, setValues] = useState({
    confirmPassword: "",
    email: "",
    password: "",
    username: "",
  });
  const handleSubmit = (e): void => {
    e.preventDefault();
  };

  const onChange = (e): void => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.registerForm}>
      <FormHeader formTitle={Title.Register} />
      <RegisterForm
        formType={formType}
        handleLinkClick={handleLinkClick}
        handleMClick={handleMClick}
        handleSubmit={handleSubmit}
        inputs={inputs}
        onChange={onChange}
        password={values.password}
        values={values}
        withIcon={false}
      />
    </div>
  );
};

export default RegisterTemplate;
