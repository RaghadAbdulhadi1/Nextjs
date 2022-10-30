import { FC, useState } from "react";
import Modal from "components/Molecules/Modal/index";
import RegisterTemplate from "components/Templates/RegisterTemplate/index";
import styles from "../FormsPage.module.css";

const RegisterComponent: FC = (): JSX.Element => {
  const [active, setActive] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const handleLinkClick = (): void => setActive((active): boolean => !active);

  const handleMClick = (): void => {
    setOpenModal(!openModal);
  };

  const handleExitClick = (): void => {
    setOpenModal(!openModal);
  };

  return (
    <div className={styles.formPage}>
      <div
        className={`${styles.formsContainer} ${active ? "" : styles.active}`}
      >
        <div className={styles.forms}>
          <RegisterTemplate
            handleLinkClick={handleLinkClick}
            handleMClick={handleMClick}
          />
        </div>
      </div>
      {openModal && <Modal handleExitClick={handleExitClick} />}
    </div>
  );
};

export default RegisterComponent;
