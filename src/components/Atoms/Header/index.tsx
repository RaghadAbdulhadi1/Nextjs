import { FC } from "react";

interface HeaderProps {
  className: string;
  innerText: string;
}

export const Header: FC<HeaderProps> = (props): JSX.Element => {
  return <h3 className={props.className}>{props.innerText}</h3>;
};
