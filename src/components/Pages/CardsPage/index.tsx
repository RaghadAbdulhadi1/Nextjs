import { Cards } from "components/Organisms/Cards/index";
import { NavPaths } from "components/Organisms/PageHeader/HeaderStrings";
import { PageHeader } from "components/Organisms/PageHeader/index";
import React, { useState } from "react";

const PageCards = ({ colorsArray }): JSX.Element => {
  const [data, setData] = useState([]);

  return (
    <>
      <PageHeader
        login={NavPaths.login}
        register={NavPaths.register}
        selectedCards={data}
        selectedColors={data.length}
      />
      <Cards colorsArray={colorsArray} data={data} setData={setData} />
    </>
  );
};

export default PageCards;
