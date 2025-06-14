import React, { useState } from "react";
import clsx from "clsx";
import ekrlogo from "../assets/ekrlogo(tr2).png";
import { IoIosArrowDown } from "react-icons/io";
import ing from "../assets/ing.png";
import tr from "../assets/tr.png";
import veriler from "../veriler";
const Navbar = ({ datas, setdata }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleSubMenu = (key) => {
    setOpenMenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const MenuItem = ({ label, children, level = 0 }) => {
    const key = label.toLowerCase().replace(/\s+/g, "_");
    const isOpenSub = openMenus[key];

    return (
      <li className="w-full">
        <button
          onClick={() => toggleSubMenu(key)}
          className={clsx(
            "w-full flex items-center justify-between text-left px-4 py-2",
            level === 0 ? "" : "ml-1",
            "bg-[#f9fafb] hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-200 text-black rounded transition-colors duration-200"
          )}
        >
          <span className="ml-0">{label}</span>
          {children && (
            <IoIosArrowDown
              className={clsx(
                "transition-transform duration-200",
                isOpenSub ? "rotate-180" : "rotate-0"
              )}
            />
          )}
        </button>
        {children && isOpenSub && (
          <ul className="pl-4 space-y-1 transition-all duration-300 ease-in-out">
            {children}
          </ul>
        )}
      </li>
    );
  };

  const changelanguage = (event) => {
    if (event.target.id == "turkish") {
      setdata(veriler.turkish);
      localStorage.setItem("language", "turkish");
    } else {
      setdata(veriler.english);
      localStorage.setItem("language", "english");
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 font-sans md:hidden h-18">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex gap-2 ">
          <img
            src={tr}
            className="w-7 h-7 cursor-pointer"
            id="turkish"
            onClick={changelanguage}
            alt="Turkish"
          />
          <img
            src={ing}
            className="w-7 h-7 cursor-pointer"
            id="english"
            onClick={changelanguage}
            alt="English"
          />
        </div>

        <div className="text-xl font-bold text-blue-600">
          <img className="w-[48px] h-[36px]" src={ekrlogo} alt="Logo" />
        </div>
        <div className="md:hidden flex gap-4 justify-center items-center">
          <label className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center relative">
            <input
              type="checkbox"
              className="hidden peer"
              checked={isOpen}
              onChange={toggleMenu}
              aria-label="Toggle menu"
            />
            <div className="w-[50%] h-[2px] bg-black rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"></div>
            <div className="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-center peer-checked:hidden"></div>
            <div className="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"></div>
          </label>
        </div>

        <ul className="hidden md:flex space-x-6 font-medium text-gray-700 text-sm">
          <li>
            <a href="/" className="hover:text-blue-600">
              {datas.Homepage}
            </a>
          </li>
          <li>
            <a href="/aboutus" className="hover:text-blue-600">
              {datas.AboutUs}
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              {datas.Trainings}
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              {datas.Services}
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              {datas.TextileSolutions}
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              {datas.Contact}
            </a>
          </li>
        </ul>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 text-gray-700 text-xl bg-gray-50 rounded-b shadow-inner ">
          <ul className="space-y-1 font-semibold text-black">
            <li>
              <a
                href="/"
                className="block px-4 py-2 hover:bg-gray-100 rounded"
                onClick={() => setIsOpen(false)}
              >
                {datas.Homepage}
              </a>
            </li>
            <li>
              <a
                href="/aboutus"
                className="block px-4 py-2 hover:bg-gray-100 rounded"
                onClick={() => setIsOpen(false)}
              >
                {datas.AboutUs}
              </a>
            </li>

            <MenuItem label={datas.Trainings}>
              <>
                <MenuItem label={datas.Institutional} level={1}>
                  <>
                    <li>
                      <a
                        className="block px-6 py-1 hover:bg-gray-100 rounded"
                        href="/salesandmarketing"
                        onClick={() => setIsOpen(false)}
                      >
                        {datas.SalesMarketingTechniques}
                      </a>
                    </li>
                    <li>
                      <a
                        className="block px-6 py-1 hover:bg-gray-100 rounded"
                        href="/noro"
                        onClick={() => setIsOpen(false)}
                      >
                        {datas.NeuroSales}
                      </a>
                    </li>
                    <li>
                      <a
                        className="block px-6 py-1 hover:bg-gray-100 rounded"
                        href="/timemanagement"
                        onClick={() => setIsOpen(false)}
                      >
                        {datas.TimeManagement}
                      </a>
                    </li>
                    <li>
                      <a
                        className="block px-6 py-1 hover:bg-gray-100 rounded"
                        href="/leadership"
                        onClick={() => setIsOpen(false)}
                      >
                        {datas.Leadership}
                      </a>
                    </li>
                    <li>
                      <a
                        className="block px-6 py-1 hover:bg-gray-100 rounded"
                        href="/communucationskills"
                        onClick={() => setIsOpen(false)}
                      >
                        {datas.CommunicationSkills}
                      </a>
                    </li>
                    <li>
                      <a
                        className="block px-6 py-1 hover:bg-gray-100 rounded"
                        href="/theartofsayingno"
                        onClick={() => setIsOpen(false)}
                      >
                        {datas.Theartofsayingno}
                      </a>
                    </li>
                    <li>
                      <a
                        className="block px-6 py-1 hover:bg-gray-100 rounded"
                        href="/costmanagement"
                        onClick={() => setIsOpen(false)}
                      >
                        {datas.Costmanagement}
                      </a>
                    </li>
                  </>
                </MenuItem>
                <MenuItem label={datas.Individual} level={1}>
                  <li>
                    <a
                      className="block px-6 py-1 hover:bg-gray-100 rounded"
                      href="/goalsetting"
                      onClick={() => setIsOpen(false)}
                    >
                      {datas.GoalSettingModelling}
                    </a>
                  </li>
                </MenuItem>
              </>
            </MenuItem>

            <MenuItem label={datas.Services}>
              <>
                <li>
                  <a
                    className="block px-5 py-1 hover:bg-gray-100 rounded"
                    href="/coaching"
                    onClick={() => setIsOpen(false)}
                  >
                    {datas.Coaching}
                  </a>
                </li>
                <li>
                  <a
                    className="block px-5 py-1 hover:bg-gray-100 rounded"
                    href="/mentoring"
                    onClick={() => setIsOpen(false)}
                  >
                    {datas.Mentoring}
                  </a>
                </li>
                <MenuItem label={datas.Consulting} level={1}>
                  <li>
                    <a
                      className="block px-6 py-1 hover:bg-gray-100 rounded"
                      href="/salesandmarketingconsultancy"
                      onClick={() => setIsOpen(false)}
                    >
                      {datas.Salesandmarketingconsultancy}
                    </a>
                  </li>
                  <li>
                    <a
                      className="block px-6 py-1 hover:bg-gray-100 rounded"
                      href="/exportconsultancy"
                      onClick={() => setIsOpen(false)}
                    >
                      {datas.Exportconsultancy}
                    </a>
                  </li>
                </MenuItem>
              </>
            </MenuItem>

            <li>
              <a
                href="/textilesolutions"
                className="block px-4 py-2 hover:bg-gray-100 rounded"
                onClick={() => setIsOpen(false)}
              >
                {datas.TextileSolutions}
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block px-4 py-2 hover:bg-gray-100 rounded"
                onClick={() => setIsOpen(false)}
              >
                {datas.Contact}
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
