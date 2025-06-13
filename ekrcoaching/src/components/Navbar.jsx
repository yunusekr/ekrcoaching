import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import clsx from "clsx";
import ekrlogo from "../assets/ekrlogo(tr2).png";
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
    const isOpen = openMenus[key];

    return (
      <li className="w-full">
        <button
          onClick={() => toggleSubMenu(key)}
          className={clsx(
            "w-full text-left px-4 py-2",
            level === 0 ? "font-semibold" : "pl-6",
            "hover:bg-gray-100 rounded transition-colors duration-200"
          )}
        >
          {label}
        </button>
        {children && isOpen && (
          <ul className="pl-4 space-y-1 transition-all duration-300 ease-in-out">
            {children}
          </ul>
        )}
      </li>
    );
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 font-sans md:hidden h-18">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600">
          <img className="w-[48px] h-[36px]" src={ekrlogo} alt="" />
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-xl text-gray-700">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
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

      {/* Mobil Menü */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 text-gray-700 text-sm bg-gray-50 rounded-b shadow-inner">
          <ul className="space-y-1">
            <li>
              <a href="/" className="block px-4 py-2 hover:bg-gray-100 rounded">
                Anasayfa
              </a>
            </li>
            <li>
              <a
                href="/aboutus"
                className="block px-4 py-2 hover:bg-gray-100 rounded"
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
                        className="block px-6 py-1 hover:bg-gray-100 rounded"
                        href="/salesandmarketing"
                      >
                        Satış & Pazarlama
                      </a>
                    </li>
                    <li>
                      <a
                        className="block px-6 py-1 hover:bg-gray-100 rounded"
                        href="/noro"
                      >
                        Nöro Satış
                      </a>
                    </li>
                    <li>
                      <a
                        className="block px-6 py-1 hover:bg-gray-100 rounded"
                        href="/timemanagement"
                      >
                        Zaman Yönetimi
                      </a>
                    </li>
                    <li>
                      <a
                        className="block px-6 py-1 hover:bg-gray-100 rounded"
                        href="/leadership"
                      >
                        Liderlik
                      </a>
                    </li>
                    <li>
                      <a
                        className="block px-6 py-1 hover:bg-gray-100 rounded"
                        href="/communucationskills"
                      >
                        İletişim Becerileri
                      </a>
                    </li>
                    <li>
                      <a
                        className="block px-6 py-1 hover:bg-gray-100 rounded"
                        href="/theartofsayingno"
                      >
                        Hayır Diyebilme Sanatı
                      </a>
                    </li>
                    <li>
                      <a
                        className="block px-6 py-1 hover:bg-gray-100 rounded"
                        href="/costmanagement"
                      >
                        Maliyet Yönetimi
                      </a>
                    </li>
                  </>
                </MenuItem>
                <MenuItem label="Bireysel" level={1}>
                  <li>
                    <a
                      className="block px-6 py-1 hover:bg-gray-100 rounded"
                      href="/goalsetting"
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
                    className="block px-5 py-1 hover:bg-gray-100 rounded"
                    href="/coaching"
                  >
                    Koçluk
                  </a>
                </li>
                <li>
                  <a
                    className="block px-5 py-1 hover:bg-gray-100 rounded"
                    href="/mentoring"
                  >
                    Mentorluk
                  </a>
                </li>
                <MenuItem label="Danışmanlık" level={1}>
                  <li>
                    <a
                      className="block px-6 py-1 hover:bg-gray-100 rounded"
                      href="/salesandmarketingconsultancy"
                    >
                      Satış ve Pazarlama Danışmanlığı
                    </a>
                  </li>
                  <li>
                    <a
                      className="block px-6 py-1 hover:bg-gray-100 rounded"
                      href="/exportconsultancy"
                    >
                      İhracat Danışmanlığı
                    </a>
                  </li>
                </MenuItem>
              </>
            </MenuItem>

            <li>
              <a
                href="/textilesolutions"
                className="block px-4 py-2 hover:bg-gray-100 rounded"
              >
                Tekstil Çözümleri
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block px-4 py-2 hover:bg-gray-100 rounded"
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
