import { Button } from "components/Atoms/Button/index";
import { FC } from "react";
import styles from "components/Atoms/Button/Button.module.css";
import SwitchForm from "components/Molecules/Clickables/SwitchForm/index";
import TextLink from "components/Molecules/Clickables/TextLink/index";

interface FormFooterProps {
  formType: string;
  handleLinkClick: React.MouseEventHandler<HTMLAnchorElement>;
  handleMClick?: React.MouseEventHandler<HTMLAnchorElement>;
  textLink: boolean;
}

const FormFooter: FC<FormFooterProps> = (props): JSX.Element => {
  return (
    <div className={styles.clickablesContainer}>
      <Button
        className={styles.button}
        handleClick={props.handleLinkClick}
        isSubmit={true}
        text={props.formType}
      />
      <div>
        <SwitchForm
          formType={props.formType}
          handleLinkClick={props.handleLinkClick}
        />
        {props.textLink && <TextLink handleMClick={props.handleMClick} />}
      </div>
    </div>
  );
};

export default FormFooter;
