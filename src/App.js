import React from "react";
import Card from "./Card";
import "./index.css";
import NetflixData from "./NetflixData";

function card_fun(val) {
  return (
    <Card key={val.key} imgsrc={val.imgsrc} title={val.title} text={val.text} />
  );
}

function App() {
  return (
    <>
      <div className="heading">
        <h2>Top 5 Netflix Web Series</h2>
      </div>
      <div className="cards">{NetflixData.map(card_fun)}</div>
    </>
  );
}

export default App;
