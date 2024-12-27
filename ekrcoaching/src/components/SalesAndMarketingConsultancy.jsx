import React from "react";
import "../cssfiles/salesandmarketing.css";
import blackpaper from "../assets/blackgate.jpg";
import salesandmarketingconsultancy from "../assets/salesandmarketingconsultancy.jpg";
function SalesAndMarketingConsultancy({ datas }) {
  return (
    <div className="w-full h-[743px] flex">
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
        <div className="flex flex-col items-center mt-5">
          <p className="text-[1.9rem] font-[Lora]">
            {datas.SalesAndMarketingConsultancytext1}
          </p>
          <p
            className="text-[1.4rem] w-[70%] italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {datas.SalesAndMarketingConsultancytext2}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p
            className="text-[1.4rem] w-[70%] italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {datas.SalesAndMarketingConsultancytext3}
          </p>
          <div>
            <li
              className="text-[1.4rem] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.SalesAndMarketingConsultancytext4}
            </li>
            <li
              className="text-[1.4rem] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.SalesAndMarketingConsultancytext5}
            </li>
            <li
              className="text-[1.4rem] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.SalesAndMarketingConsultancytext6}
            </li>
            <li
              className="text-[1.4rem] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.SalesAndMarketingConsultancytext7}
            </li>
            <li
              className="text-[1.4rem] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.SalesAndMarketingConsultancytext8}
            </li>
          </div>
          <p
            className="text-[1.4rem] w-[70%] italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {datas.SalesAndMarketingConsultancytext9}
          </p>
        </div>
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
