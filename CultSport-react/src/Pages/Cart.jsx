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
  const [force, setForce] = useState(false);
  useEffect(() => {
    setData([]);
    axios
      .get(`https://expensive-train-tuna.cyclic.app/cart/${status.user._id}`)
      .then((res) => {
        console.log(res);
        setAmount(res.data.data);
      });
  }, []);

  const setAmount = (data) => {
    setData((prev) => data);
    const totaltemp = data.reduce((acc, elem) => {
      return acc + parseInt(elem.price);
    }, 0);
    setAmount1(totaltemp);
  };
  const setAmount1 = (totaltemp, anyprice = 0) => {
    setTotal((prev) => totaltemp + anyprice);
    setTotal2((prev) => totaltemp + anyprice - 50);
  };
  changeTotal(total2);
  const changeData = (data) => {
    setData(data);
  };
  return (
    <div className="cartContainer">
      {data.length === 0 ? (
        <div style={{ textAlign: "center" }}>
          <h2>Cart is Empty !</h2>
          <p>Lets buy somthing</p>
        </div>
      ) : (
        <>
          <CardforcCart
            data={data}
            setAmount={setAmount1}
            total={total}
            changeData={changeData}
          />
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
