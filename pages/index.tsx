import PageCards from "../src/components/Pages/CardsPage/index";

interface Cards {
  colorsArray: object[];
}

const CardsPage = ({ colorsArray }: Cards): JSX.Element => {
  return (
    <>
      <PageCards colorsArray={colorsArray} />
    </>
  );
};

export const getStaticProps = async (): Promise<object> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const colors = await response.json();
  const colorsArray = colors.slice(0, 10);

  return {
    props: {
      colorsArray,
    },
  };
};

export default CardsPage;
