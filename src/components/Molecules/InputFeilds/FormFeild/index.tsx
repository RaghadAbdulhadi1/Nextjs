import { FC, useState } from "react";
import Icon from "components/Atoms/Icon/index";
import Input from "components/Atoms/Input/index";
import Span from "components/Atoms/Span/index";
import styles from "./FormFeild.module.css";

interface FormFeildProps {
  errorMessage?: string;
  formType: string;
  id: number;
  inputType: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  password: string;
  placeholder: string;
  type: string;
  value: string;
  withIcon: boolean;
}

const FormFeild: FC<FormFeildProps> = ({
  errorMessage,
  id,
  inputType,
  name,
  onChange,
  password,
  placeholder,
  type,
  value,
  withIcon,
  ...inputs
}: FormFeildProps): JSX.Element => {
  const [focused, setFocused] = useState(false);

  const handleFocus = (e): void => {
    setFocused(true);
  };

  return (
    <div className={styles.inputFeild}>
      <Input
        focused={focused}
        handleFocus={handleFocus}
        id={id}
        name={name}
        onChange={onChange}
        password={password}
        placeholder={placeholder}
        type={type}
        value={value}
        {...inputs}
      />
      <Span spanText={errorMessage} className={styles.errorMessage} />
      {withIcon && <Icon iconType={inputType} className={styles.svg1} />}
    </div>
  );
};

export default FormFeild;
