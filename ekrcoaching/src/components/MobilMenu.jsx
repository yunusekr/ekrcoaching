import React from "react";

function MobilMenu({ datas }) {
  return (
    <main className="w-screen lg:hidden">
      <header className="fixed top-0 left-0 w-full bg-[#000000] z-50">
        <nav className="flex items-center justify-between py-4 px-8">
          <a href="#" className="text-2xl font-bold text-[#F7F7F7] px-4 py-2">
            EKR Academy
          </a>

          <input type="checkbox" id="menu-toggle" className="sr-only peer" />

          <label
            htmlFor="menu-toggle"
            className="cursor-pointer w-6 h-6 lg:hidden inline-flex items-center peer-checked:[&>span]:bg-transparent peer-checked:[&>span::before]:rotate-45 peer-checked:[&>span::after]:-rotate-45 peer-checked:[&>span::before]:top-0 peer-checked:[&>span::after]:top-0"
          >
            <span className="block w-6 h-0.5 bg-[#ffffff] relative transition-all duration-150 ease-in-out before:content-[''] before:absolute before:top-1.5 before:w-full before:h-0.5 before:bg-[#ffffff] before:transition-all before:duration-150 before:ease-in-out before:transform before:origin-center before:rotate-0 after:content-[''] after:absolute after:-top-1.5 after:w-full after:h-0.5 after:bg-[#ffffff] after:transition-all after:duration-150 after:ease-in-out after:transform after:origin-center after:rotate-0"></span>
            <span className="sr-only">Toggle menu</span>
          </label>

          <ul className="overflow-hidden transition-all duration-300 ease-in-out max-h-0 bg-[#ff1212] peer-checked:max-h-screen flex flex-col lg:flex-row items-center gap-4 absolute lg:static top-full left-0 w-full lg:w-fit lg:max-h-none lg:overflow-visible lg:bg-[#f1f1f1] lg:text-white [&_li]:first:pt-4 [&_li]:last:pb-4 lg:[&_li]:first:pt-0 lg:[&_li]:last:pb-0">
            <li>
              <a
                href="/"
                className="block px-4 py-2 transition-all duration-300 ease-in-out lg:hover:text-[#ffffff]"
              >
                {datas.Homepage}
              </a>
            </li>
            <li>
              <a
                href="/aboutus"
                className="block px-4 py-2 transition-all duration-300 ease-in-out lg:hover:text-[#ffffff]"
              >
                {datas.AboutUs}
              </a>
            </li>

            <li className="w-full transition-all duration-300 ease-in-out lg:hover:text-[#ffffff] lg:w-auto lg:relative group">
              <label
                htmlFor="dropdown-toggle"
                className="cursor-pointer flex justify-center items-center block px-4 py-2 lg:hidden"
              >
                <span className="flex items-center gap-2 after:content-['\25BC'] after:block">
                  {datas.Trainings}
                </span>
              </label>

              <input
                type="checkbox"
                id="dropdown-toggle"
                className="sr-only peer lg:hidden"
              />

              <ul className="overflow-hidden max-h-0 transition-all duration-300 ease-in-out bg-[#b0ff1f] text-[#ffffff] peer-checked:max-h-screen lg:group-hover:max-h-screen lg:group-focus-within:max-h-screen flex flex-col items-center gap-4 w-full lg:min-w-40 lg:w-auto lg:absolute lg:top-[calc(100%+1.25rem)] lg:left-0 [&_li]:px-4 [&_li]:py-2 [&_li]:block [&_li]:first:pt-6 lg:[&_li]:first:pt-2 [&_li]:transition-all [&_li]:duration-300 [&_li]:ease-in-out [&_li]:hover:text-[#000000] lg:[&_li]:last:pb-4">
                {/* Kurumsal Alt Menü */}
                <li className="w-full">
                  <label
                    htmlFor="kurumsal-toggle"
                    className="cursor-pointer block"
                  >
                    Kurumsal
                  </label>
                  <input
                    type="checkbox"
                    id="kurumsal-toggle"
                    className="sr-only peer"
                  />
                  <ul className="overflow-hidden max-h-0 peer-checked:max-h-40 transition-all duration-300 ease-in-out flex flex-col items-center bg-[#1a1a1a] text-white">
                    <li>
                      <a href="#">asd</a>
                    </li>
                  </ul>
                </li>

                {/* Bireysel Alt Menü */}
                <li className="w-full">
                  <label
                    htmlFor="bireysel-toggle"
                    className="cursor-pointer block"
                  >
                    Bireysel
                  </label>
                  <input
                    type="checkbox"
                    id="bireysel-toggle"
                    className="sr-only peer"
                  />
                  <ul className="overflow-hidden max-h-0 peer-checked:max-h-40 transition-all duration-300 ease-in-out flex flex-col items-center bg-[#1a1a1a] text-white">
                    <li>
                      <a href="#">asd</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </main>
  );
}

export default MobilMenu;
