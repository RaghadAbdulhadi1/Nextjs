import { FC } from "react";

interface ParagraphLinkProps {
  anchorInnerText: string;
  className: string;
  handleLinkClick: React.MouseEventHandler<HTMLAnchorElement>;
  href: string;
  innerText: string;
}

const ParagraphLink: FC<ParagraphLinkProps> = (props): JSX.Element => {
  return (
    <p className={props.innerText}>
      {props.innerText}
      <a
        className={props.className}
        href={props.href}
        onClick={props.handleLinkClick}
      >
        {props.anchorInnerText}
      </a>
    </p>
  );
};

export default ParagraphLink;
