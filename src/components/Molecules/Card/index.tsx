import { Button } from "../../Atoms/Button/index";
import { CardButtons } from "./CardConstants";
import { Header } from "../../Atoms/Header/index";
import { Paragraph } from "../../Atoms/Paragraph/index";
import Image from "next/image";
import styles from "./Card.module.css";

interface CardProps {
  cardDescription: string;
  cardTitle: string;
  colorId: number;
  colorName: string;
  colorSrc: string;
  handleClick: (event: React.MouseEvent) => void;
  handleIncrement: (event: React.MouseEvent) => void;
  height: number;
  isClicked: boolean;
  isSubmitButton: boolean;
  width: number;
}

export const Card = ({
  cardDescription,
  cardTitle,
  colorId,
  colorName,
  colorSrc,
  handleClick,
  handleIncrement,
  height,
  isClicked,
  isSubmitButton,
  width,
}: CardProps): JSX.Element => {
  return (
    <div className={styles.card}>
      <Image
        alt={colorName}
        className={styles.cardImage}
        height={height}
        src={`${colorSrc}.png`}
        width={width}
      />
      <Header className={styles.cardTitle} innerText={cardTitle} />
      <Paragraph
        className={styles.cardDescription}
        innerText={cardDescription}
      />
      <div className={styles.buttons}>
        <Button
          className={styles.cardButton}
          handleClick={handleIncrement}
          isSubmit={isSubmitButton}
          text={CardButtons.addColor}
        />
        <Button
          className={styles.cardButton}
          handleClick={handleClick}
          isSubmit={isSubmitButton}
          text={CardButtons.colorDetails}
        />
      </div>
    </div>
  );
};
