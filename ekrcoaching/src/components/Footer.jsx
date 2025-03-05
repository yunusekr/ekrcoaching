import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function Footer({ datas }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <div
      className={`w-full h-[150px] bg-white `}
      style={{
        boxShadow: "0px -0.5px 4px 0.5px  black",
        // background: "linear-gradient(to right, white 30%, black 170%)",
        zIndex: 1000,
      }}
    ></div>
  );
}

export default Footer;
