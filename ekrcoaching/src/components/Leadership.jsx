import React from "react";
import "../cssfiles/salesandmarketing.css";
import blackpaper from "../assets/blackgate.jpg";
import leadership from "../assets/Leadership.jpg";
function Leadership({ datas }) {
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
        <div className="flex flex-col items-center mt-6">
          <p className="text-[1.6vw] font-[Lora]">
            {datas.Salesandmarketingtext1}
          </p>
          <p
            className="text-[1.1vw] w-[70%] italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {datas.Leadershiptext1}
          </p>
          <p
            className="text-[1.1vw] w-[70%] italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {datas.Leadershiptext2}
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
            {datas.Leadershiptext3}
          </p>
          <div>
            <li
              className="text-[1.1vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Leadershiptext4}
            </li>
            <li
              className="text-[1.1vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Leadershiptext5}
            </li>
            <li
              className="text-[1.1vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Leadershiptext6}
            </li>
            <li
              className="text-[1.1vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Leadershiptext7}
            </li>
            <li
              className="text-[1.1vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Leadershiptext8}
            </li>
            <li
              className="text-[1.1vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Leadershiptext9}
            </li>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col items-center h-full w-full  slide-in-right"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 30), rgba(0, 0, 0, 0)),
            url(${leadership})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
}

export default Leadership;
