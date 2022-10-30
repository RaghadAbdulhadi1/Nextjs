import { ButtonType } from "./ButtonStrings";
import { FC } from "react";

export interface Props {
  className?: string;
  id?: string;
  isSubmit: boolean;
  text: string;
  handleClick: (event: React.MouseEvent) => void
}

export const Button: FC<Props> = (props): JSX.Element => {
  return (
    <button
      className={props.className}
      id={props.id}
      onClick={props.handleClick}
      type={props.isSubmit ? ButtonType.submit : ButtonType.reset}
    >
      {props.text}
    </button>
  );
};
