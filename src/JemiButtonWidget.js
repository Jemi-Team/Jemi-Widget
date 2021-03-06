import React from "react";
import "./index.css";

import logo from "./assets/diamond2.png";

const JemiButtonWidget = () => {
  const slug = document
    .getElementById("jemi-btn-root")
    .getAttribute("data-slug");
  const bgColor = document
    .getElementById("jemi-btn-root")
    .getAttribute("data-color");

  const btnText = document
    .getElementById("jemi-btn-root")
    .getAttribute("data-text");
  const style = {
    btn: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: 250,
      backgroundColor: bgColor,
      borderRadius: 10,
      border: "none",
      textDecoration: "none",
      fontWeight: 400,
      height: 50,
    },
    content: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      width: 100 + "%",
    },
    logo: {
      display: "inline-block",
      marginRight: 5,
    },
    text: {
      display: "inline-block",
      color: bgColor === "#BBCAF9" ? "#000" : "#fff",
      fontSize: 20,
    },
  };

  return (
    <a
      href={`https://jemi.app/${slug}`}
      target="_blank"
      style={style.btn}
      className="jemiBtn"
    >
      <div style={style.content}>
        <img src={logo} style={style.logo} />
        <span style={style.text}>{btnText}</span>
      </div>
    </a>
  );
};

export default JemiButtonWidget;
