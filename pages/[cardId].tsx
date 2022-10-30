import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const CardPage = ({ colors }): JSX.Element => {
  const router = useRouter();
  const { cardId } = router.query;
  const colorData = colors.find((color): boolean => color.id == cardId);

  return (
    <>
      <Image
        alt={colorData.title}
        height={500}
        src={`${colorData.thumbnailUrl}.png`}
        width={500}
      />
      <h1>{colorData.title}</h1>
      <h3>{colorData.title}</h3>
      <Link href={"./"}>
        <a>Back to home page</a>
      </Link>
    </>
  );
};

export default CardPage;

export const getData = async (): Promise<object> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const colors = await response.json();
  const colorsArray = colors.slice(0, 100);
  return colorsArray;
};

export const getStaticProps = async (): Promise<object> => {
  const colors = await getData();
  return {
    props: {
      colors,
    },
  };
};

export const getStaticPaths = async (): Promise<object> => {
  const data: object[] = await getData();
  const ids = data.map((color) => color.id);
  const pathsWithparams = ids.map((id): { params: { cardId: any } } => ({
    params: { cardId: id.toString() },
  }));
  return {
    paths: pathsWithparams,
    fallback: false,
  };
};
