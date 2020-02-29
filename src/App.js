import React from "react";
import "./styles.css";
import Card, { CardData } from "./Card";
import satas from "./data";

export default function App() {
  return (
    <div className="App">
      {/* <Card name="Shijith K" mobile="+91 8943650799" />
      <Card name="Mohammed Sadique" mobile="+91 92070 38835‬" />
      <Card name="Santhanu Mohan" mobile="+91 90604 45200‬" /> */}
      {satas.map(n => (
        // <h1>{n.name}</h1>
        // <Card name={n.name} mobile={n.mobile} />
        <Card {...n} />
      ))}
      {/* <CardData /> */}
    </div>
  );
}
