import axios from "axios";
import React, { useEffect, useState } from "react";

function ButtonForCart({
  elem,
  setAmount,
  total,
  changeData,
  data,
  index,
  changeForce,
}) {
  const [quant, setQuant] = useState(1);
  const [state, setState] = useState(false);
  elem.quantity = quant;
  useEffect(() => {
    if (quant == 0) {
      setState((prev) => true);
      const token = localStorage.getItem("loginToken");
      if (token) {
        console.log(elem._id);
        axios
          .patch(
            `https://expensive-train-tuna.cyclic.app/deteleSingleItem`,
            { productid: elem._id },
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          )
          .then((res) => {
            console.log(res);
            alert(res.data.message);
            changeForce();
            // data.splice(index, 1);
            // changeData(data);
            // console.log(data);
            //window.location.reload();
          });
      }
    } else {
      setState((prev) => false);
      elem.quantity = quant;
    }
  }, [quant]);

  const handlePlus = () => {
    console.log(elem._id);
    setAmount(total, elem.price);
    setQuant((prev) => prev + 1);
  };
  const handleMinus = () => {
    setQuant((prev) => prev - 1);
    setAmount(total, -elem.price);
  };
  return (
    <div className="quantiny">
      <button onClick={handleMinus} disabled={state}>
        -
      </button>
      <p>Quantity: {quant}</p>
      <button onClick={handlePlus}>+</button>
    </div>
  );
}

export default ButtonForCart;
