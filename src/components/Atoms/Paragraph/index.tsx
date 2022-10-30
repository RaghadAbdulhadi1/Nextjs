import { FC } from "react";

interface ParagraphProps {
  className: string;
  id?: string;
  innerText: string;
}

export const Paragraph: FC<ParagraphProps> = (props): JSX.Element => {
  return (
    <p id={props.id} className={props.className}>
      {props.innerText}
    </p>
  );
};
