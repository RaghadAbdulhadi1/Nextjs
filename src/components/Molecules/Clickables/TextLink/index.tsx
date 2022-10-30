import { FC } from "react";
import { SPAN_STRINGS } from "components/Atoms/Span/SpanStrings";
import Span from "components/Atoms/Span/index";

interface TextLinkProps {
  handleMClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const TextLink: FC<TextLinkProps> = (props: TextLinkProps): JSX.Element => {
  return (
    <Span
      handleMClick={props.handleMClick}
      innerText={SPAN_STRINGS.TERMS_AND_CONDITIONS}
      spanText={SPAN_STRINGS.REGISTER_CONFIRM_LINK}
    />
  );
};

export default TextLink;
