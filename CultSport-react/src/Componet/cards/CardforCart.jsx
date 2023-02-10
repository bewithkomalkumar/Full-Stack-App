import React, { useState } from "react";
import ButtonForCart from "./ButtonForCart";

function CardforcCart(props) {
  const { data, setAmount, total, changeData, changeForce } = props;
  return (
    <div className="ContainerForcartcard">
      {data.map((elem, index) => {
        return (
          <div id="cartcard" key={elem._id}>
            <img src={elem.thumbnail} alt="aa" />

            <div className="detailsforcartcard">
              <h3>{elem.cname}</h3>
              <p>{elem.title}</p>

              <div className="price">
                <p>₹{elem.price}</p>
                <p>₹{elem.strikePrice}</p>
                <p>{elem.discount} % off</p>
              </div>
            </div>
            <ButtonForCart
              data={data}
              elem={elem}
              setAmount={setAmount}
              total={total}
              changeData={changeData}
              index={index}
              changeForce={changeForce}
            />
          </div>
        );
      })}
    </div>
  );
}

export default CardforcCart;
