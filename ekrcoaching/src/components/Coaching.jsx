import React from "react";
import "../cssfiles/salesandmarketing.css";
import blackpaper from "../assets/blackgate.jpg";
import coaching from "../assets/coaching.png";
function Coaching({ datas }) {
  return (
    <>
      <div className="w-full h-[100vh] lg:flex hidden">
        <div
          className="flex flex-col items-center gap-5 h-full w-[120%] slide-in-left text-white justify-center"
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
            <p className="text-[2vw] font-[Lora]">{datas.Coachingtext1}</p>
            <p
              className="text-[1.4vw] w-[96%] italic"
              style={{
                fontFamily: "Playfair Display, serif",
                textIndent: "3vw",
              }}
            >
              {datas.Coachingtext2}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p
              className="text-[1.4vw] w-[95%] italic"
              style={{
                fontFamily: "Playfair Display, serif",
                textIndent: "3vw",
              }}
            >
              {datas.Coachingtext3}
            </p>
            <div>
              <li
                className="text-[1.4vw] italic"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {datas.Coachingtext4}
              </li>
              <li
                className="text-[1.4vw] italic"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {datas.Coachingtext5}
              </li>
              <li
                className="text-[1.4vw] italic"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {datas.Coachingtext6}
              </li>
              <li
                className="text-[1.4vw] italic"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {datas.Coachingtext7}
              </li>
              <li
                className="text-[1.4vw] italic"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {datas.Coachingtext8}
              </li>
            </div>
          </div>
          <p
            className="text-[1.4vw] w-[90%] italic"
            style={{ fontFamily: "Playfair Display, serif", textIndent: "3vw" }}
          >
            {datas.Coachingtext9}
          </p>
          <p
            className="text-[1.4vw] w-[90%] italic"
            style={{ fontFamily: "Playfair Display, serif", textIndent: "3vw" }}
          >
            {datas.Coachingtext10}
          </p>
        </div>
        <div
          className="flex flex-col items-center h-full w-full  slide-in-right"
          style={{
            backgroundImage: `
          linear-gradient(to right, rgba(0, 0, 0, 30), rgba(0, 0, 0, 0)),
          url(${coaching})
        `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
      <div
        className="lg:hidden flex flex-col items-center h-[100vh] w-full text-white gap-y-14"
        style={{
          backgroundImage: `
          url(${coaching})
        `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-65 h-[100vh]"></div>
        <div className="flex flex-col items-center mt-40 slide-in-left">
          <p className="text-[8.5vw] font-[Lora]">{datas.Coachingtext1}</p>
          <p
            className="text-[3.5vw] w-[96%] italic"
            style={{
              fontFamily: "Playfair Display, serif",
              textIndent: "3vw",
            }}
          >
            {datas.Coachingtext2}
          </p>
        </div>
        <div className="flex flex-col items-center slide-in-left">
          <p
            className="text-[3.5vw] w-[95%] italic"
            style={{
              fontFamily: "Playfair Display, serif",
              textIndent: "3vw",
            }}
          >
            {datas.Coachingtext3}
          </p>
          <div>
            <li
              className="text-[3.5vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Coachingtext4}
            </li>
            <li
              className="text-[3.5vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Coachingtext5}
            </li>
            <li
              className="text-[3.5vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Coachingtext6}
            </li>
            <li
              className="text-[3.5vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Coachingtext7}
            </li>
            <li
              className="text-[3.5vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Coachingtext8}
            </li>
          </div>
        </div>
      </div>
    </>
  );
}

export default Coaching;
