import React from "react";
import "../cssfiles/salesandmarketing.css";
import blackpaper from "../assets/blackgate.jpg";
import tosayno from "../assets/tosayno.jpg";
function Theartofsayingno({ datas }) {
  return (
    <>
      <div className="w-full h-[100vh] lg:flex hidden">
        <div
          className="flex flex-col items-center gap-16 h-full w-[120%] slide-in-left text-white"
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
            <p className="text-[2.5vw] font-[Lora]">
              {datas.Salesandmarketingtext1}
            </p>
            <p
              className="text-[1.5vw] w-[90%] italic"
              style={{
                fontFamily: "Playfair Display, serif",
                textIndent: "3vw",
              }}
            >
              {datas.Theartofsayingnotext1}
            </p>
            <p
              className="text-[1.5vw] w-[90%] italic"
              style={{
                fontFamily: "Playfair Display, serif",
                textIndent: "3vw",
              }}
            >
              {datas.Theartofsayingnotext2}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[2.5vw] font-[Lora]">
              {datas.Salesandmarketingtext3}
            </p>
            <div>
              <li
                className="text-[1.5vw] italic"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {datas.Theartofsayingnotext3}
              </li>
              <li
                className="text-[1.5vw] italic"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {datas.Theartofsayingnotext4}
              </li>
              <li
                className="text-[1.5vw] italic"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {datas.Theartofsayingnotext5}
              </li>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col items-center h-full w-full  slide-in-right"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 30), rgba(0, 0, 0, 0)),
              url(${tosayno})
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
              url(${tosayno})
            `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-65 h-[100vh]"></div>
        <div className="flex flex-col items-center mt-20 slide-in-left">
          <p className="text-[10vw] font-[Lora]">
            {datas.Salesandmarketingtext1}
          </p>
          <p
            className="text-[3.5vw] w-[90%] italic"
            style={{
              fontFamily: "Playfair Display, serif",
              textIndent: "3vw",
            }}
          >
            {datas.Theartofsayingnotext1}
          </p>
          <p
            className="text-[3.5vw] w-[90%] italic"
            style={{
              fontFamily: "Playfair Display, serif",
              textIndent: "3vw",
            }}
          >
            {datas.Theartofsayingnotext2}
          </p>
        </div>
        <div className="flex flex-col items-center slide-in-left">
          <p className="text-[10vw] font-[Lora]">
            {datas.Salesandmarketingtext3}
          </p>
          <div>
            <li
              className="text-[3.5vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Theartofsayingnotext3}
            </li>
            <li
              className="text-[3.5vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Theartofsayingnotext4}
            </li>
            <li
              className="text-[3.5vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Theartofsayingnotext5}
            </li>
          </div>
        </div>
      </div>
    </>
  );
}

export default Theartofsayingno;
