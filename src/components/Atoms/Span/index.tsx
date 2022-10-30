import { FC } from "react";

interface SpanProps {
  href?: string;
  innerText?: string;
  spanText: string;
  handleMClick?: React.MouseEventHandler<HTMLAnchorElement>;
  className?: string;
}

const Span: FC<SpanProps> = (props): JSX.Element => {
  return (
    <span className={props.className}>
      {props.spanText}
      <a href={props.href} onClick={props.handleMClick}>{props.innerText}</a>
    </span>
  );
};

export default Span;
