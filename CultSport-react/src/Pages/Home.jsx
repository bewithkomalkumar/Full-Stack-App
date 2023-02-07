import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Card from "../Componet/Navbar/cards/Card";
import { myContext } from "../Context/AppContext";
import Login from "./Login";

function Home() {
  const [data, setData] = useState([]);
  const [sort, setSort] = useState("null");
  const { status } = useContext(myContext);
  useEffect(() => {
    axios.get(`http://localhost:3030/product?sort=${sort}`).then((res) => {
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

export default Home;
