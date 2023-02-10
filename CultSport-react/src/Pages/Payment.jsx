import React, { useContext, useState } from "react";
import { myContext } from "../Context/AppContext";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function Payment() {
  const [cardno, setCardno] = useState("");
  const [name, setName] = useState("");
  const [cvv, setCvv] = useState("");
  const [date, setDate] = useState("");

  const { status } = useContext(myContext);
  const navigate = useNavigate();
  const handleBuyNow = (event) => {
    event.preventDefault();
    console.log(cardno.length, name, cvv, date);
    if (cardno.length < 14 || name == "" || cvv == "" || date == "") {
      alert("Please Fill all Details Correctly ! or missing required input");
    } else {
      const token = localStorage.getItem("loginToken");
      if (token) {
        axios
          .patch(`https://expensive-train-tuna.cyclic.app/orderplace`, "", {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((res) => {
            alert(res.data.message);
            navigate("/");
          });
      } else {
        alert("not a valid token");
      }
    }
  };
  return (
    <div className="RegisterPage">
      {/* Payment : {status.total} */}
      <h3>Enter Payment Details</h3>
      <form className="RegistartionForm">
        <input
          style={{ textAlign: "left" }}
          type="text"
          value={"Total Amount ₹" + status.total}
          disabled={true}
        />
        <input
          type="number"
          placeholder="Enter Your 14 Digit Debit/Credit Card No"
          onChange={(e) => {
            setCardno((prev) => e.target.value);
          }}
        />
        <div style={{ display: "flex", gap: "5px" }}>
          <input
            type="number"
            placeholder="CVV"
            style={{ height: "25px", fontSize: "18px", width: "50%" }}
            onChange={(e) => {
              setCvv((prev) => e.target.value);
            }}
          />
          <input
            type="date"
            placeholder="Card Expiry MM/YY"
            style={{ height: "25px", fontSize: "18px", width: "50%" }}
            onChange={(e) => {
              setDate((prev) => e.target.value);
            }}
          />
        </div>
        <input
          type="text"
          placeholder="Enter Card Holders Name"
          onChange={(e) => {
            setName((prev) => e.target.value);
          }}
        />

        <button onClick={handleBuyNow}>Make Payment</button>
      </form>
    </div>
  );
}

export default Payment;
