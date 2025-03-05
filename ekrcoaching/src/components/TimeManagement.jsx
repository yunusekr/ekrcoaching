import React from "react";
import "../cssfiles/salesandmarketing.css";
import blackpaper from "../assets/blackgate.jpg";
import timemanagement from "../assets/timemanagement.jpg";
function TimeManagement({ datas }) {
  return (
    <div className="w-full h-[100vh] mt-[-60px] flex">
      <div
        className="flex flex-col items-center gap-16 h-full w-[120%] slide-in-left text-white "
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
            style={{ fontFamily: "Playfair Display, serif", textIndent: "3vw" }}
          >
            {datas.Timemanagementtext1}
          </p>
          <p
            className="text-[1.5vw] w-[90%] italic"
            style={{ fontFamily: "Playfair Display, serif", textIndent: "3vw" }}
          >
            {datas.Timemanagementtext2}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[2.5vw] font-[Lora]">
            {datas.Salesandmarketingtext3}
          </p>

          <div>
            <li
              className="text-[1.5vw] w-[90%] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Timemanagementtext3}
            </li>
            <li
              className="text-[1.5vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Timemanagementtext4}
            </li>
            <li
              className="text-[1.5vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Timemanagementtext5}
            </li>
            <li
              className="text-[1.5vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Timemanagementtext6}
            </li>
            <li
              className="text-[1.5vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Timemanagementtext7}
            </li>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col items-center h-full w-full  slide-in-right"
        style={{
          backgroundImage: `
        linear-gradient(to right, rgba(0, 0, 0, 30), rgba(0, 0, 0, 0)),
        url("${timemanagement}")
      `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
}

export default TimeManagement;
