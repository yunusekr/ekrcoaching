import React from "react";
import "../cssfiles/salesandmarketing.css";
import blackpaper from "../assets/blackgate.jpg";
import mentor from "../assets/mentor.jpeg";
function Mentoring({ datas }) {
  return (
    <div className="w-full h-[100vh] flex">
      <div
        className="flex flex-col items-center gap-6 h-full w-[120%] slide-in-left text-white justify-center"
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
          <p className="text-[2vw] font-[Lora]">{datas.Mentoringtext1}</p>
          <p
            className="text-[1.4vw] w-[96%] italic"
            style={{ fontFamily: "Playfair Display, serif", textIndent: "3vw" }}
          >
            {datas.Mentoringtext2}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p
            className="text-[1.4vw] w-[95%] italic"
            style={{ fontFamily: "Playfair Display, serif", textIndent: "3vw" }}
          >
            {datas.Mentoringtext3}
          </p>
          <div>
            <li
              className="text-[1.4vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Mentoringtext4}
            </li>
            <li
              className="text-[1.4vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Mentoringtext5}
            </li>
            <li
              className="text-[1.4vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Mentoringtext6}
            </li>
            <li
              className="text-[1.4vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Mentoringtext7}
            </li>
            <li
              className="text-[1.4vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Mentoringtext8}
            </li>
          </div>
        </div>
        <p
          className="text-[1.4vw] w-[90%] italic"
          style={{ fontFamily: "Playfair Display, serif", textIndent: "3vw" }}
        >
          {datas.Mentoringtext9}
        </p>
        <p
          className="text-[1.4vw] w-[90%] italic"
          style={{ fontFamily: "Playfair Display, serif", textIndent: "3vw" }}
        >
          {datas.Mentoringtext10}
        </p>
      </div>
      <div
        className="flex flex-col items-center h-full w-full slide-in-right"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 30), rgba(0, 0, 0, 0)),
            url(${mentor})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
}

export default Mentoring;
