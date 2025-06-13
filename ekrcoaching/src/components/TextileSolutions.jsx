import React from "react";
import "../cssfiles/salesandmarketing.css";
import blackpaper from "../assets/blackgate.jpg";
import cloth2 from "../assets/cloth2.jpg";
function TextileSolutions({ datas }) {
  return (
    <>
      <div className="w-full min-h-screen lg:flex hidden">
        {/* Sol Bölüm */}
        <div
          className="flex flex-col items-center gap-6 w-full slide-in-left text-white justify-center flex-1"
          style={{
            backgroundImage: `
        linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)),
        url(${blackpaper})
      `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col items-center mt-5">
            <p className="text-[2vw] font-[Lora]">
              {datas.textileSolutionsText1}
            </p>
            <p
              className="text-[1.4vw] w-[96%] italic"
              style={{
                fontFamily: "Playfair Display, serif",
                textIndent: "3vw",
              }}
            >
              {datas.textileSolutionsText2}
            </p>
          </div>

          <div className="flex flex-col items-center ">
            <p className="text-[2vw] font-[Lora]">
              {datas.textileSolutionsText3}
            </p>
            <p
              className="text-[1.4vw] w-[96%] italic"
              style={{
                fontFamily: "Playfair Display, serif",
                textIndent: "3vw",
              }}
            >
              {datas.textileSolutionsText4}
            </p>
            <div className="flex flex-col gap-5 mt-5 ml-5">
              <li
                className="text-[1.1vw] italic"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {datas.textileSolutionsText5}
              </li>
              <li
                className="text-[1.1vw] italic"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {datas.textileSolutionsText6}
              </li>
              <li
                className="text-[1.1vw] italic"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {datas.textileSolutionsText7}
              </li>
              <li
                className="text-[1.1vw] italic"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {datas.textileSolutionsText8}
              </li>
              <li
                className="text-[1.1vw] italic"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {datas.textileSolutionsText9}
              </li>
            </div>
          </div>

          <div className="flex flex-col items-center mt-5">
            <p className="text-[2vw] font-[Lora]">
              {datas.textileSolutionsText10}
            </p>
            <p
              className="text-[1.4vw] w-[96%] italic"
              style={{
                fontFamily: "Playfair Display, serif",
                textIndent: "3vw",
              }}
            >
              {datas.textileSolutionsText11}
            </p>
          </div>
          <div className="flex flex-col gap-5 ml-5">
            <li
              className="text-[1.1vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.textileSolutionsText12}
            </li>
            <li
              className="text-[1.1vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.textileSolutionsText13}
            </li>
            <li
              className="text-[1.1vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.textileSolutionsText14}
            </li>
            <li
              className="text-[1.1vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.textileSolutionsText15}
            </li>
            <li
              className="text-[1.1vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.textileSolutionsText16}
            </li>
            <li
              className="text-[1.1vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.textileSolutionsText17}
            </li>
          </div>
          <div className="flex flex-col items-center mt-5 mb-5">
            <p className="text-[2vw] font-[Lora]">
              {datas.textileSolutionsText18}
            </p>
            <p
              className="text-[1.4vw] w-[96%] italic"
              style={{
                fontFamily: "Playfair Display, serif",
                textIndent: "3vw",
              }}
            >
              {datas.textileSolutionsText19}
            </p>
          </div>
        </div>

        {/* Sağ Bölüm */}
        <div
          className="flex flex-col items-center flex-1 slide-in-right"
          style={{
            backgroundImage: `
        linear-gradient(to right, rgba(0, 0, 0, 30), rgba(0, 0, 0, 0)),
        url(${cloth2})
      `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* İçerik olmasa bile yükseklik garanti altına alınır */}
          <div className="h-full w-full" />
        </div>
      </div>
      {/* mobil */}
      <div
        className="relative lg:hidden flex flex-col items-center w-full min-h-screen text-white gap-y-14"
        style={{
          backgroundImage: `url(${cloth2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Arka plan siyah yarı saydam katman */}
        <div className="absolute inset-0 bg-black bg-opacity-65 z-[1] w-full h-full"></div>

        {/* 1. metin bloğu */}
        <div className="z-[2] flex flex-col items-center mt-5">
          <p className="text-[7vw] font-[Lora] text-center">
            {datas.textileSolutionsText1}
          </p>
          <p
            className="text-[3.5vw] w-[96%] italic"
            style={{
              fontFamily: "Playfair Display, serif",
              textIndent: "3vw",
            }}
          >
            {datas.textileSolutionsText2}
          </p>
        </div>

        {/* 2. metin bloğu */}
        <div className="z-[2] flex flex-col items-center">
          <p className="text-[7vw] font-[Lora] text-center">
            {datas.textileSolutionsText3}
          </p>
          <p
            className="text-[3.5vw] w-[96%] italic"
            style={{
              fontFamily: "Playfair Display, serif",
              textIndent: "3vw",
            }}
          >
            {datas.textileSolutionsText4}
          </p>

          {/* İlk liste */}
          <ul className="flex flex-col gap-5 mt-5 ml-5 list-disc">
            <li
              className="text-[3vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.textileSolutionsText5}
            </li>
            <li
              className="text-[3vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.textileSolutionsText6}
            </li>
            <li
              className="text-[3vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.textileSolutionsText7}
            </li>
            <li
              className="text-[3vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.textileSolutionsText8}
            </li>
            <li
              className="text-[3vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.textileSolutionsText9}
            </li>
          </ul>
        </div>

        {/* 3. metin bloğu */}
        <div className="z-[2] flex flex-col items-center mt-5">
          <p className="text-[7vw] font-[Lora] text-center">
            {datas.textileSolutionsText10}
          </p>
          <p
            className="text-[3.5vw] w-[96%] italic"
            style={{
              fontFamily: "Playfair Display, serif",
              textIndent: "3vw",
            }}
          >
            {datas.textileSolutionsText11}
          </p>
        </div>

        {/* İkinci liste */}
        <ul className="z-[2] flex flex-col gap-5 ml-5 list-disc">
          <li
            className="text-[3vw] italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {datas.textileSolutionsText12}
          </li>
          <li
            className="text-[3vw] italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {datas.textileSolutionsText13}
          </li>
          <li
            className="text-[3vw] italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {datas.textileSolutionsText14}
          </li>
          <li
            className="text-[3vw] italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {datas.textileSolutionsText15}
          </li>
          <li
            className="text-[3vw] italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {datas.textileSolutionsText16}
          </li>
          <li
            className="text-[3vw] italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {datas.textileSolutionsText17}
          </li>
        </ul>

        {/* Son metin bloğu */}
        <div className="z-[2] flex flex-col items-center mt-5 mb-5">
          <p className="text-[7vw] font-[Lora] text-center">
            {datas.textileSolutionsText18}
          </p>
          <p
            className="text-[3.5vw] w-[96%] italic"
            style={{
              fontFamily: "Playfair Display, serif",
              textIndent: "3vw",
            }}
          >
            {datas.textileSolutionsText19}
          </p>
        </div>
      </div>
    </>
  );
}

export default TextileSolutions;
