import React from "react";

function CardforcCart({ data }) {
  return (
    <div className="ContainerForcartcard">
      {data.map((elem) => {
        return (
          <div id="cartcard">
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
            <div className="quantiny">
              <button>-</button>
              <p>Quantity</p>
              <button>+</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardforcCart;
