import { FC, useState } from "react";
import LoginTemplate from "components/Templates/LoginTemplate/index";
import styles from "../FormsPage.module.css";

const LoginComponent: FC = (): JSX.Element => {
  const [active, setActive] = useState(true);

  const handleLinkClick = (): void => setActive((active): boolean => !active);

  return (
    <div className={styles.formPage}>
      <div
        className={`${styles.formsContainer} ${active ? "" : styles.active}`}
      >
        <div className={styles.forms}>
          <LoginTemplate handleLinkClick={handleLinkClick} />
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
