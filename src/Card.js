import React from "react";
import Datas from "./data";
const Card = user => (
  <div>
    <h1>{user.name} </h1>
    <p>{user.mobile}</p>
  </div>
);

export const CardData = () => (
  <div>
    {Datas.map(n => (
      <Card name={n.name} mobile={n.mobile} />
    ))}
  </div>
);

export default Card;
