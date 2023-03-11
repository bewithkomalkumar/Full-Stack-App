import React, { useContext, useState } from "react";
import { myContext } from "../Context/AppContext";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function Payment() {
  const { status } = useContext(myContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("loginToken");
  const handleBuyNow = async (event) => {
    event.preventDefault();
    const {
      data: { key },
    } = await axios.get(`https://expensive-train-tuna.cyclic.app/api/key`);

    const {
      data: { order },
    } = await axios.post(
      "https://expensive-train-tuna.cyclic.app/api/checkout",
      {
        amount: Number(status.total),
      }
    );
    const options = {
      key, //YOUR_KEY_ID
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Cult Sport komal kumar",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of above steps

      handler: async function (response) {
        try {
          if (token) {
            const res = await axios.post(
              `https://expensive-train-tuna.cyclic.app/api/paymentverify`,
              response
            );
            axios
              .patch(`https://expensive-train-tuna.cyclic.app/orderplace`, "", {
                headers: { Authorization: `Bearer ${token}` },
              })
              .then((res) => {
                alert(res.data.message + " " + "& Payment Singnature Valid");
                navigate("/");
              });
          } else {
            alert("not a valid token");
          }
        } catch (error) {
          alert("Token Not Present, Error Found");
        }
      },
      prefill: {
        name: status.username,
        email: status.user.email,
        contact: "9999999999",
      },
      notes: {
        address: "komal kumar from delhi",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };
  return (
    <div className="RegisterPage">
      <h3>Enter Payment Details</h3>
      <form className="RegistartionForm">
        <input
          style={{ textAlign: "left" }}
          type="text"
          value={"Total Amount ₹" + status.total}
          disabled={true}
        />
        <button onClick={handleBuyNow}>Make Payment</button>
      </form>
    </div>
  );
}

export default Payment;
