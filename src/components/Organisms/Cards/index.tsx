import { Card } from "components/Molecules/Card/index";
import { colorsNames, dimensions } from "./CardsConstants";
import { useState } from "react";
import router from "next/router";
import styles from "./Cards.module.css";
import { extractHexCode } from "components/Utils/CardsUtils/index";

interface Cards {
  colorsArray: object[];
  getHeaderData(): string[];
}

export const Cards = ({ colorsArray, data, setData }): JSX.Element => {
  const clickHandler = (colorId: any): void => {
    router.push(`/${colorId}`);
  };

  const [isClicked, setClick] = useState(false);

  const handleIncrement = (colorHex: string | number): void => {
    const filteredData = data.filter(
      (color: any): boolean => color !== colorsNames[colorHex]
    );
    setData(filteredData);
    !data.includes(colorsNames[colorHex])
      ? setData([...data, colorsNames[colorHex]])
      : setData(filteredData);
    setClick(!isClicked);
  };

  return (
    <div className={styles.cards}>
      {colorsArray.map(
        (color: {
          id: number;
          thumbnailUrl: string;
          title: string;
        }): JSX.Element => (
          <Card
            cardDescription={color.title}
            cardTitle={color.title}
            colorId={color.id}
            colorName={color.title}
            colorSrc={color.thumbnailUrl}
            handleClick={(): void => clickHandler(color.id)}
            handleIncrement={(): void => handleIncrement(extractHexCode(color))}
            height={dimensions.height}
            isClicked={isClicked}
            isSubmitButton={true}
            key={color.id}
            width={dimensions.width}
          />
        )
      )}
    </div>
  );
};
