import React from "react";
import "../cssfiles/salesandmarketing.css";
import blackpaper from "../assets/blackgate.jpg";
import communicationskills from "../assets/communicationskills.jpg";
function CommunucationSkills({ datas }) {
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
        <div className="flex flex-col items-center mt-20">
          <p className="text-[1.6vw] font-[Lora]">
            {datas.Salesandmarketingtext1}
          </p>
          <p
            className="text-[1.1vw] w-[70%] italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {datas.Communucationskillstext1}
          </p>
          <p
            className="text-[1.1vw] w-[70%] italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {datas.Communucationskillstext2}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[1.6vw] font-[Lora]">
            {datas.Salesandmarketingtext3}
          </p>
          <div>
            <li
              className="text-[1.1vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Communucationskillstext3}
            </li>
            <li
              className="text-[1.1vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Communucationskillstext4}
            </li>
            <li
              className="text-[1.1vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Communucationskillstext5}
            </li>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col items-center h-full w-full  slide-in-right"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 30), rgba(0, 0, 0, 0)),
            url(${communicationskills})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
}

export default CommunucationSkills;
