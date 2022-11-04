import { FC, useRef, useState } from "react";
import { inputs, formType } from "./RegisterStrings";
import { Title } from "components/Atoms/Div/DivStrings";
import FormHeader from "components/Organisms/Shared/FormHeader/index";
import RegisterForm from "components/Organisms/RegisterForm/index";
import styles from "./RegisterTemplate.module.css";
import { validateCapitalLetter, validateEmail, validateNumbers, validateSmallLetter, validateSpecialCharacters } from "components/Utils/Validators/index";

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
    userName: "",
  });

  const inputType = useRef("");

  const handleSubmit = (e): void => {
    e.preventDefault();
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const [isValidatedCapitalLetter, setIsValidatedCapitalLetter] = useState(false);

  const [isValidatedCharcters, setIsValidatedCharcters] = useState(false);

  const [isValidatedNumbers, setIsValidatedNumbers] = useState(false);

  const [isValidatedSmallLetters, setIsValidatedSmallLetters] = useState(false);


  const [onBlurPasswordFeild, setonBlurPasswordFeild] = useState(false);


  const onBlur = (): void => {
    setonBlurPasswordFeild(!onBlurPasswordFeild);
    console.log(onBlurPasswordFeild, "blur")
  };

  const onFocus = (e): void => {
    inputType.current = e.target.name;
    setonBlurPasswordFeild(!onBlurPasswordFeild);
    console.log(onBlurPasswordFeild, "focus")

  };

  const onKeyUp = (e): void => {
    validateSmallLetter(values.password)
      ? setIsValidatedSmallLetters(true)
      : setIsValidatedSmallLetters(false);

      validateCapitalLetter(values.password)
      ? setIsValidatedCapitalLetter(true)
      : setIsValidatedCapitalLetter(false);

      validateSpecialCharacters(values.password)
      ? setIsValidatedCharcters(true)
      : setIsValidatedCharcters(false);

      validateNumbers(values.password)
      ? setIsValidatedNumbers(true)
      : setIsValidatedNumbers(false);

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
        inputType={inputType.current}
        onChange={onChange}
        onKeyUp={onKeyUp}
        password={values.password}
        values={values}
        withIcon={false}
        onBlur={onBlur}
        onFocus={onFocus}
        onBlurPasswordFeild={onBlurPasswordFeild}
        isValidatedCapitalLetter={isValidatedCapitalLetter}
        isValidatedCharcters={isValidatedCharcters}
        isValidatedNumbers={isValidatedNumbers}
        isValidatedSmallLetters={isValidatedSmallLetters}
      />
    </div>
  );
};

export default RegisterTemplate;
