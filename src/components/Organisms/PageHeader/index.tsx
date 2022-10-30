import { Nav, CardsTrack } from "./HeaderStrings";
import Link from "next/link";
import React from "react";
import styles from "./PageHeader.module.css";

export const PageHeader = ({
  login,
  register,
  selectedCards,
  selectedColors,
}): JSX.Element => {
  return (
    <>
      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.title}>Lorem Ipsum</h1>
          <h2
            className={styles.colorsCount}
          >{`${CardsTrack.count} ${selectedCards}`}</h2>
          <h2
            className={styles.colorsNames}
          >{`${CardsTrack.names} ${selectedColors}`}</h2>
        </div>
        <div className={styles.user}>
          <Link href={register}>
            <a>{Nav.register}</a>
          </Link>
          <Link href={login}>
            <a>{Nav.login}</a>
          </Link>
        </div>
      </div>
      <hr className={styles.hr} />
    </>
  );
};
