import React from "react";
import "../cssfiles/salesandmarketing.css";
import blackpaper from "../assets/blackgate.jpg";
import mentor from "../assets/mentor.jpeg";
function Mentoring({ datas }) {
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
          <p className="text-[1.9rem] font-[Lora]">{datas.Mentoringtext1}</p>
          <p
            className="text-[1.4rem] w-[70%] italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {datas.Mentoringtext2}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p
            className="text-[1.4rem] w-[70%] italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {datas.Mentoringtext3}
          </p>
          <div>
            <li
              className="text-[1.4rem] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Mentoringtext4}
            </li>
            <li
              className="text-[1.4rem] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Mentoringtext5}
            </li>
            <li
              className="text-[1.4rem] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Mentoringtext6}
            </li>
            <li
              className="text-[1.4rem] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Mentoringtext7}
            </li>
            <li
              className="text-[1.4rem] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Mentoringtext8}
            </li>
          </div>
          <p
            className="text-[1.4rem] w-[70%] italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {datas.Mentoringtext9}
          </p>
          <p
            className="text-[1.4rem] w-[70%] italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {datas.Mentoringtext10}
          </p>
        </div>
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
