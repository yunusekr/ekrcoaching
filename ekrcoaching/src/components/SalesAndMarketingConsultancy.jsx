import React from "react";
import "../cssfiles/salesandmarketing.css";
import blackpaper from "../assets/blackgate.jpg";
import salesandmarketingconsultancy from "../assets/salesandmarketingconsultancy.jpg";
function SalesAndMarketingConsultancy({ datas }) {
  return (
    <div className="w-full h-[100vh] flex">
      <div
        className="flex flex-col items-center gap-9 h-full w-[120%] slide-in-left text-white justify-center"
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
        <div className="flex flex-col items-center mt-5">
          <p className="text-[2.5vw] font-[Lora]">
            {datas.SalesAndMarketingConsultancytext1}
          </p>
          <p
            className="text-[1.5vw] w-[90%] italic"
            style={{ fontFamily: "Playfair Display, serif", textIndent: "3vw" }}
          >
            {datas.SalesAndMarketingConsultancytext2}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p
            className="text-[1.5vw] w-[90%] italic"
            style={{ fontFamily: "Playfair Display, serif", textIndent: "3vw" }}
          >
            {datas.SalesAndMarketingConsultancytext3}
          </p>
          <div className="w-[75%]">
            <li
              className="text-[1.5vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.SalesAndMarketingConsultancytext4}
            </li>
            <li
              className="text-[1.5vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.SalesAndMarketingConsultancytext5}
            </li>
            <li
              className="text-[1.5vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.SalesAndMarketingConsultancytext6}
            </li>
            <li
              className="text-[1.5vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.SalesAndMarketingConsultancytext7}
            </li>
            <li
              className="text-[1.5vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.SalesAndMarketingConsultancytext8}
            </li>
          </div>
        </div>
        <p
          className="text-[1.5vw] w-[90%] italic"
          style={{ fontFamily: "Playfair Display, serif", textIndent: "3vw" }}
        >
          {datas.SalesAndMarketingConsultancytext9}
        </p>
      </div>
      <div
        className="flex flex-col items-center h-full w-full slide-in-right"
        style={{
          backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 30), rgba(0, 0, 0, 0)),
              url(${salesandmarketingconsultancy})
            `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
}

export default SalesAndMarketingConsultancy;
