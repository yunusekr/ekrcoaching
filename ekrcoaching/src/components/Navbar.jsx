import React, { useState } from "react";
import clsx from "clsx";
import ekrlogo from "../assets/ekrlogo(tr2).png";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
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
            level === 0 ? "" : "",
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
      </li>
    );
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 font-sans md:hidden h-18">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600">
          <img className="w-[48px] h-[36px]" src={ekrlogo} alt="Logo" />
        </div>

        <div className="md:hidden">
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
              Anasayfa
            </a>
          </li>
          <li>
            <a href="/aboutus" className="hover:text-blue-600">
              Hakkımızda
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Eğitimler
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Hizmetler
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Tekstil Çözümleri
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              İletişim
            </a>
          </li>
        </ul>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 text-gray-700 text-xl bg-gray-50 rounded-b shadow-inner ">
          <ul className="space-y-1 font-semibold text-black w-full">
            <li className="w-full">
              <a
                href="/"
                className="block w-full text-left px-4 py-2 hover:bg-gray-200 rounded"
                onClick={() => setIsOpen(false)}
              >
                Anasayfa
              </a>
            </li>
            <li className="w-full">
              <a
                href="/aboutus"
                className="block w-full text-left px-4 py-2 hover:bg-gray-200 rounded"
                onClick={() => setIsOpen(false)}
              >
                Hakkımızda
              </a>
            </li>

            <MenuItem label="Eğitimler">
              <>
                <MenuItem label="Kurumsal" level={1}>
                  <>
                    <li>
                      <a
                        className="block w-full text-left px-6 py-1 hover:bg-gray-200 rounded"
                        href="/salesandmarketing"
                        onClick={() => setIsOpen(false)}
                      >
                        Satış & Pazarlama
                      </a>
                    </li>
                    <li>
                      <a
                        className="block w-full text-left px-6 py-1 hover:bg-gray-200 rounded"
                        href="/noro"
                        onClick={() => setIsOpen(false)}
                      >
                        Nöro Satış
                      </a>
                    </li>
                    <li>
                      <a
                        className="block w-full text-left px-6 py-1 hover:bg-gray-200 rounded"
                        href="/timemanagement"
                        onClick={() => setIsOpen(false)}
                      >
                        Zaman Yönetimi
                      </a>
                    </li>
                    <li>
                      <a
                        className="block w-full text-left px-6 py-1 hover:bg-gray-200 rounded"
                        href="/leadership"
                        onClick={() => setIsOpen(false)}
                      >
                        Liderlik
                      </a>
                    </li>
                    <li>
                      <a
                        className="block w-full text-left px-6 py-1 hover:bg-gray-200 rounded"
                        href="/communucationskills"
                        onClick={() => setIsOpen(false)}
                      >
                        İletişim Becerileri
                      </a>
                    </li>
                    <li>
                      <a
                        className="block w-full text-left px-6 py-1 hover:bg-gray-200 rounded"
                        href="/theartofsayingno"
                        onClick={() => setIsOpen(false)}
                      >
                        Hayır Diyebilme Sanatı
                      </a>
                    </li>
                    <li>
                      <a
                        className="block w-full text-left px-6 py-1 hover:bg-gray-200 rounded"
                        href="/costmanagement"
                        onClick={() => setIsOpen(false)}
                      >
                        Maliyet Yönetimi
                      </a>
                    </li>
                  </>
                </MenuItem>
                <MenuItem label="Bireysel" level={1}>
                  <li>
                    <a
                      className="block w-full text-left px-6 py-1 hover:bg-gray-200 rounded"
                      href="/goalsetting"
                      onClick={() => setIsOpen(false)}
                    >
                      Hedef Belirleme
                    </a>
                  </li>
                </MenuItem>
              </>
            </MenuItem>

            <MenuItem label="Hizmetler">
              <>
                <li>
                  <a
                    className="block w-full text-left px-5 py-1 hover:bg-gray-200 rounded"
                    href="/coaching"
                    onClick={() => setIsOpen(false)}
                  >
                    Koçluk
                  </a>
                </li>
                <li>
                  <a
                    className="block w-full text-left px-5 py-1 hover:bg-gray-200 rounded"
                    href="/mentoring"
                    onClick={() => setIsOpen(false)}
                  >
                    Mentorluk
                  </a>
                </li>
                <MenuItem label="Danışmanlık" level={1}>
                  <li>
                    <a
                      className="block w-full text-left px-6 py-1 hover:bg-gray-200 rounded"
                      href="/salesandmarketingconsultancy"
                      onClick={() => setIsOpen(false)}
                    >
                      Satış ve Pazarlama Danışmanlığı
                    </a>
                  </li>
                  <li>
                    <a
                      className="block w-full text-left px-6 py-1 hover:bg-gray-200 rounded"
                      href="/exportconsultancy"
                      onClick={() => setIsOpen(false)}
                    >
                      İhracat Danışmanlığı
                    </a>
                  </li>
                </MenuItem>
              </>
            </MenuItem>

            <li className="w-full">
              <a
                href="/textilesolutions"
                className="block w-full text-left px-4 py-2 hover:bg-gray-200 rounded"
                onClick={() => setIsOpen(false)}
              >
                Tekstil Çözümleri
              </a>
            </li>
            <li className="w-full">
              <a
                href="/contact"
                className="block w-full text-left px-4 py-2 hover:bg-gray-200 rounded"
                onClick={() => setIsOpen(false)}
              >
                İletişim
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
