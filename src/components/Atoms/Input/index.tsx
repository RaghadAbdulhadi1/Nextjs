import React, { FC, useState } from "react";

interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: number;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  password: string;
  handleFocus: React.FormEventHandler<HTMLInputElement> | undefined;
  focused: boolean
}

const Input: FC<InputProps> = ({
  onChange,
  id,
  name,
  type,
  placeholder,
  value,
  password,
  focused,
  handleFocus,
  ...inputs
}: InputProps): JSX.Element => {

  const patterns = {
    password: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    username: "^[A-Za-z0-9]{3,16}$",
    confirmPassword: password,
  };
  return (
    <input
      onChange={onChange}
      key={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      pattern={patterns[name]}
      onBlur={handleFocus}
      focused={focused.toString()}
      {...inputs}
    ></input>
  );
};

export default Input;

