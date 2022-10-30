import { FC } from "react";

interface DivProps {
  className: string;
  innerText?: string;
}

export const Div: FC<DivProps> = (props): JSX.Element => {
  return <div className={props.className}>{props.innerText}</div>;
};
