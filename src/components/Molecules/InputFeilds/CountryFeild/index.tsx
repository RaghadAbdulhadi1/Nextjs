import { FunctionComponent } from "react";
import COUNTRY_CHOICES from "components/Atoms/Option/OptionFeildStrings";
import Option from "components/Atoms/Option/index";
import styles from "./CountryFeild.module.css";

const CountryFeild: FunctionComponent = (): JSX.Element => {
  return (
    <select className={styles.countryChoices}>
      {COUNTRY_CHOICES.map((country): JSX.Element => {
        return <Option key={country} innerText={country} />;
      })}
      ;
    </select>
  );
};

export default CountryFeild;
