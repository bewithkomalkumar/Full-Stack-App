import React, { useContext, useEffect, useState } from "react";
import Card from "../Componet/cards/Card";
import axios from "axios";
import { myContext } from "../Context/AppContext";

function Cycles() {
  const [data, setData] = useState([]);
  const [sort, setSort] = useState("null");

  useEffect(() => {
    setData([]);
    axios
      .get(`https://expensive-train-tuna.cyclic.app/cycle?sort=${sort}`)
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      });
  }, [sort]);

  return (
    <div>
      <select onChange={(e) => setSort(e.target.value)}>
        <option value={"null"}>Sort by price</option>
        <option value={1}>Low to High</option>
        <option value={-1}>High to low</option>
      </select>
      <Card data={data} />;
    </div>
  );
}

export default Cycles;
