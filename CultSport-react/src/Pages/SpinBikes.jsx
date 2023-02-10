import React, { useEffect, useState } from "react";
import Card from "../Componet/Navbar/cards/Card";
import axios from "axios";

function SpinBikes() {
  const [data, setData] = useState([]);
  const [sort, setSort] = useState("null");

  useEffect(() => {
    setData([]);
    axios
      .get(`https://expensive-train-tuna.cyclic.app/spinbike?sort=${sort}`)
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

export default SpinBikes;
