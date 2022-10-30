import styles from "./SwitchForm.module.css";
import { FC } from "react";
import {
  formSwitchText,
  linkText,
  registerLoginNavigation,
} from "../../../Utils/LinksUtils";
import ParagraphLink from "../../../Atoms/ParagraphLink/index";

interface SwitchFormProps {
  formType: string;
  handleLinkClick: React.MouseEventHandler<HTMLAnchorElement>;
}

const SwitchForm: FC<SwitchFormProps> = ({
  formType,
  handleLinkClick,
}: SwitchFormProps): JSX.Element => {
  return (
    <ParagraphLink
      anchorInnerText={linkText(formType)}
      className={styles.link}
      handleLinkClick={handleLinkClick}
      href={registerLoginNavigation(formType)}
      innerText={formSwitchText(formType)}
    />
  );
};

export default SwitchForm;
