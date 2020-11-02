import React from "react";
import ReactDOM from "react-dom";
import JemiButtonWidget from "./JemiButtonWidget";

const app = (
  <div>
    <JemiButtonWidget />
  </div>
);

ReactDOM.render(app, document.getElementById("jemi-btn-root"));
