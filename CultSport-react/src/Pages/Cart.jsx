import React, { useContext, useEffect, useState } from "react";
import { myContext } from "../Context/AppContext";
import Login from "./Login";
import axios from "axios";

import CardforcCart from "../Componet/Navbar/cards/CardforCart";

function Cart() {
  const [data, setData] = useState([]);
  //   const [total, setTotal] = useState(0);
  //   const [total2, setTotal2] = useState(0);
  const { status } = useContext(myContext);

  useEffect(() => {
    axios.get(`http://localhost:3030/cart/${status.user._id}`).then((res) => {
      console.log(res);
      setData(res.data.data);
    });
  }, []);

  const total = data.reduce((acc, elem) => {
    return acc + parseInt(elem.price);
  }, 0);

  const total2 = total - 50;

  const handleBuyNow = () => {
    const token = localStorage.getItem("loginToken");
    if (token) {
      axios
        .patch(`http://localhost:3030/orderplace`, "", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          alert(res.data.message);
        });
    } else {
      alert("not a valid token");
    }
  };
  return (
    <div className="cartContainer">
      <CardforcCart data={data} />
      <div>
        <div>
          <div>
            <p>Total :</p>
            <p>₹{total}</p>
          </div>
          <div>
            <p>Convinent fee :</p>
            <p>₹-50</p>
          </div>
          {/* <input type="text" placeholder="Apply Coupon" /> */}
          <div>
            <p>
              <strong>Final Amount :</strong>
            </p>
            <p>
              <strong>₹{total2}</strong>
            </p>
          </div>
        </div>
        <div id="buynow">
          <button onClick={handleBuyNow}>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
