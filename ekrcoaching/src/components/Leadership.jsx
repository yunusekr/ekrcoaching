import React from "react";
import "../cssfiles/salesandmarketing.css";
import blackpaper from "../assets/blackgate.jpg";
import leadership from "../assets/Leadership.jpg";
function Leadership({ datas }) {
  return (
    <>
      <div className="w-full h-[100vh] lg:flex hidden">
        <div
          className="flex flex-col items-center gap-6 h-full w-[120%] slide-in-left text-white"
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
          <div className="flex flex-col items-center mt-7">
            <p className="text-[2.4vw] font-[Lora]">
              {datas.Salesandmarketingtext1}
            </p>
            <p
              className="text-[1.4vw] w-[92%] italic"
              style={{
                fontFamily: "Playfair Display, serif",
                textIndent: "3vw",
              }}
            >
              {datas.Leadershiptext1}
            </p>
            <p
              className="text-[1.4vw] w-[90%] italic"
              style={{
                fontFamily: "Playfair Display, serif",
                textIndent: "3vw",
              }}
            >
              {datas.Leadershiptext2}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[2.4vw] font-[Lora]">
              {datas.Salesandmarketingtext3}
            </p>
            <p
              className="text-[1.4vw] w-[90%] italic"
              style={{
                fontFamily: "Playfair Display, serif",
                textIndent: "3vw",
              }}
            >
              {datas.Leadershiptext3}
            </p>
            <div>
              <li
                className="text-[1.4vw] italic"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {datas.Leadershiptext4}
              </li>
              <li
                className="text-[1.4vw] italic"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {datas.Leadershiptext5}
              </li>
              <li
                className="text-[1.4vw] italic"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {datas.Leadershiptext6}
              </li>
              <li
                className="text-[1.4vw] italic"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {datas.Leadershiptext7}
              </li>
              <li
                className="text-[1.4vw] italic"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {datas.Leadershiptext8}
              </li>
              <li
                className="text-[1.4vw] italic"
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
      {/* mobil */}
      <div
        className="lg:hidden flex flex-col items-center h-[100vh] w-full text-white gap-y-10 relative"
        style={{
          backgroundImage: `
            url(${leadership})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-65 h-[100vh]"></div>
        <div className="flex flex-col items-center mt-7 slide-in-left">
          <p className="text-[10vw] font-[Lora]">
            {datas.Salesandmarketingtext1}
          </p>
          <p
            className="text-[3.5vw] w-[92%] italic"
            style={{
              fontFamily: "Playfair Display, serif",
              textIndent: "3vw",
            }}
          >
            {datas.Leadershiptext1}
          </p>
          <p
            className="text-[3.5vw] w-[90%] italic"
            style={{
              fontFamily: "Playfair Display, serif",
              textIndent: "3vw",
            }}
          >
            {datas.Leadershiptext2}
          </p>
        </div>
        <div className="flex flex-col items-center slide-in-left">
          <p className="text-[10vw] font-[Lora]">
            {datas.Salesandmarketingtext3}
          </p>
          <p
            className="text-[3.5vw] w-[90%] italic"
            style={{
              fontFamily: "Playfair Display, serif",
              textIndent: "3vw",
            }}
          >
            {datas.Leadershiptext3}
          </p>
          <div>
            <li
              className="text-[3.5vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Leadershiptext4}
            </li>
            <li
              className="text-[3.5vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Leadershiptext5}
            </li>
            <li
              className="text-[3.5vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Leadershiptext6}
            </li>
            <li
              className="text-[3.5vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Leadershiptext7}
            </li>
            <li
              className="text-[3.5vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Leadershiptext8}
            </li>
            <li
              className="text-[3.5vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Leadershiptext9}
            </li>
          </div>
        </div>
      </div>
    </>
  );
}

export default Leadership;
