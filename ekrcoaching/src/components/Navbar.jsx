import React, { useState } from "react";
import ekrlogo from "../assets/ekrlogo(tr2).png";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({});

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleSubmenu = (key) => {
    setSubmenuOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Menü öğesi bileşeni
  const MenuItem = ({ label, children }) => {
    const key = label.toLowerCase().replace(/\s/g, "_");
    const isOpen = submenuOpen[key];

    return (
      <li className="w-full">
        <button
          onClick={() => toggleSubmenu(key)}
          className="flex justify-between items-center w-full px-4 py-2 text-left bg-gray-100 hover:bg-gray-200 rounded"
          style={{ textAlign: "left" }}
        >
          <span>{label}</span>
          {children && (
            <IoIosArrowDown
              className={`transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          )}
        </button>
        {children && isOpen && (
          <ul className="pl-6 mt-1 space-y-1" style={{ textAlign: "left" }}>
            {children}
          </ul>
        )}
      </li>
    );
  };

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <img src={ekrlogo} alt="Logo" className="w-12 h-9" />
        {/* Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <div
            className={`w-6 h-[2px] bg-black mb-1 transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <div
            className={`w-6 h-[2px] bg-black mb-1 transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <div
            className={`w-6 h-[2px] bg-black transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium text-sm">
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-50 px-4 pb-6 text-gray-900 font-semibold">
          <ul className="space-y-1" style={{ textAlign: "left" }}>
            <li>
              <a
                href="/"
                className="block px-4 py-2 rounded hover:bg-gray-200"
                onClick={() => setMenuOpen(false)}
              >
                Anasayfa
              </a>
            </li>
            <li>
              <a
                href="/aboutus"
                className="block px-4 py-2 rounded hover:bg-gray-200"
                onClick={() => setMenuOpen(false)}
              >
                Hakkımızda
              </a>
            </li>

            <MenuItem label="Eğitimler">
              <>
                <li>
                  <a
                    href="/salesandmarketing"
                    className="block px-4 py-2 rounded hover:bg-gray-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    Kurumsal
                  </a>
                </li>
                <li>
                  <a
                    href="/goalsetting"
                    className="block px-4 py-2 rounded hover:bg-gray-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    Bireysel
                  </a>
                </li>
              </>
            </MenuItem>

            <MenuItem label="Hizmetler">
              <>
                <li>
                  <a
                    href="/coaching"
                    className="block px-4 py-2 rounded hover:bg-gray-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    Koçluk
                  </a>
                </li>
                <li>
                  <a
                    href="/mentoring"
                    className="block px-4 py-2 rounded hover:bg-gray-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    Mentorluk
                  </a>
                </li>
              </>
            </MenuItem>

            <li>
              <a
                href="/textilesolutions"
                className="block px-4 py-2 rounded hover:bg-gray-200"
                onClick={() => setMenuOpen(false)}
              >
                Tekstil Çözümleri
              </a>
            </li>

            <li>
              <a
                href="/contact"
                className="block px-4 py-2 rounded hover:bg-gray-200"
                onClick={() => setMenuOpen(false)}
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
