import { FC } from "react";
import "./Link.css";

interface LinkProps {
  className: string;
  href: string;
  innerText: string;
}

const Link: FC<LinkProps> = (props): JSX.Element => {
  return (
    <a className={props.className} href={props.href}>
      {props.innerText}
    </a>
  );
};

export default Link;
