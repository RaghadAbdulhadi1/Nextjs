import { FC } from "react";
import Radio from "components/Atoms/Radio/index";
import RadioChoices from "components/Atoms/Radio/RadioStrings";
import styles from "./GenderFeild.module.css";

const GenderFeild: FC = (): JSX.Element => {
  const FEMALE = RadioChoices.Female;
  const MALE = RadioChoices.Male;

  return (
    <div className={styles.genderChoices}>
      <Radio name={FEMALE} innerText={FEMALE} />
      <Radio name={MALE} innerText={MALE} />
    </div>
  );
};

export default GenderFeild;
