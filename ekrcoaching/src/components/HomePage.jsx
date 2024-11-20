import React from "react";
import resim from "../assets/resim.jpg";
function HomePage({ datas }) {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <p className="deneme text-[5.3vw] ">{datas.Wearelisteningtoyou}</p>
      <img src={resim} alt="" />
    </div>
  );
}

export default HomePage;
