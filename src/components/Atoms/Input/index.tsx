import React, { FC } from "react";

interface InputProps {
  id: number;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp: (event: React.KeyboardEvent) => void;
  password: string;
  placeholder: string;
  type: string;
  value: string;
}

const Input: FC<InputProps> = ({
  onChange,
  id,
  name,
  type,
  placeholder,
  value,
  password,
  onKeyUp,
  onBlur,
  onFocus,
  ...inputs
}: InputProps): JSX.Element => {
  const onBlurAny = () => {
    console.log("bu")
  }
  const onFocusAny = () => {
    console.log("bu")
  }
  return (

    <input
      onChange={onChange}
      key={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onBlur={name==="password"? onBlur : onBlurAny}
      onFocus={name==="password" ? onFocus : onFocusAny}
      onKeyUp={onKeyUp}
      {...inputs}
    ></input>
  );
};

export default Input;
