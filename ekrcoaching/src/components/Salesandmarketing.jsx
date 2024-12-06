import React from "react";
import "../cssfiles/salesandmarketing.css";
import blackpaper from "../assets/blackgate.jpg";
import salesandmarketing from "../assets/Markayonetimi.png";

function Salesandmarketing({ datas }) {
  return (
    <div className="w-full h-[693px] flex">
      <div
        className="flex flex-col items-center gap-16 h-full w-full slide-in-left text-white"
        style={{
          backgroundImage: `
        linear-gradient(to left, rgba(0, 0, 0,1), rgba(0, 0, 0, 0)),
        url(${blackpaper})
      `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center mt-20">
          <p className="text-[1.6vw] font-[Lora]">
            {datas.Salesandmarketingtext1}
          </p>
          <p
            className="text-[1.1vw] w-[70%] italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {datas.Salesandmarketingtext2}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[1.6vw] font-[Lora]">
            {datas.Salesandmarketingtext3}
          </p>
          <p
            className="text-[1.1vw] w-[70%] italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {datas.Salesandmarketingtext4}
          </p>
          <div>
            <li
              className="text-[1.1vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Salesandmarketingtext5}
            </li>
            <li
              className="text-[1.1vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Salesandmarketingtext6}
            </li>
            <li
              className="text-[1.1vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Salesandmarketingtext7}
            </li>
            <li
              className="text-[1.1vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Salesandmarketingtext8}
            </li>
            <li
              className="text-[1.1vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Salesandmarketingtext9}
            </li>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col items-center h-full w-full  slide-in-right"
        style={{
          backgroundImage: `
        linear-gradient(to right, rgba(0, 0, 0, 30), rgba(0, 0, 0, 0)),
        url(${salesandmarketing})
      `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
}

export default Salesandmarketing;
