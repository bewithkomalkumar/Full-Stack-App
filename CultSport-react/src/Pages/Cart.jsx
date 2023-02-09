import React, { useContext, useEffect, useState } from "react";
import { myContext } from "../Context/AppContext";
import Login from "./Login";
import axios from "axios";

import CardforcCart from "../Componet/Navbar/cards/CardforCart";
import { Link } from "react-router-dom";

function Cart() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [total2, setTotal2] = useState(0);
  const { status, changeTotal } = useContext(myContext);
  useEffect(() => {
    axios.get(`http://localhost:3030/cart/${status.user._id}`).then((res) => {
      console.log(res);

      setData(res.data.data);
      setAmount(res.data.data);
    });
  }, []);
  const setAmount = (data) => {
    const totaltemp = data.reduce((acc, elem) => {
      return acc + parseInt(elem.price);
    }, 0);
    setTotal((prev) => totaltemp);
    setTotal2((prev) => totaltemp - 50);
  };
  changeTotal(total2);
  // console.log(total2);
  return (
    <div className="cartContainer">
      {data.length === 0 ? (
        <div style={{ textAlign: "center" }}>
          <h2>Cart is Empty !</h2>
          <p>Lets buy somthing</p>
        </div>
      ) : (
        <>
          {" "}
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
              <Link to="/payment">
                <button>Buy Now</button>
                {/* onClick={handleBuyNow} */}
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
