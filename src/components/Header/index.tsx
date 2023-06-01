import React, { useCallback, useEffect, useState } from "react";
import Logo from "../../assets/logo.svg";
import Image from "next/image";
import { EffraFont } from "@/pages/index";

function Header() {
  const [headerActive, setHeaderActive] = useState(false);

  const stickyMenu = useCallback(() => {
    if (window.scrollY > 50) {
      if (!headerActive) {
        setHeaderActive(true);
      }
    } else {
      if (headerActive) {
        setHeaderActive(false);
      }
    }
  }, [headerActive]);

  useEffect(() => {
    window.addEventListener("scroll", stickyMenu);
    return () => {
      window.removeEventListener("scroll", stickyMenu);
    }  
  }, [headerActive]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-20 transition ${
        headerActive ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className={`flex items-center mx-auto max-w-[1312px] px-4 gap-4 justify-between transition-all ${headerActive ? "py-4" : "py-8"}`}>
        <Image src={Logo} width={170} height={41} alt="Findtrend logo" />

        <nav>
          <ul
            className={`${EffraFont.className} text-white font-medium text-lg flex gap-10`}
          >
            <li className="menu_item relative">
              <a href="#">About</a>
            </li>
            <li className="menu_item relative">
              <a href="#">How it work</a>
            </li>
            <li className="menu_item relative">
              <a href="#">Pricing</a>
            </li>
            <li className="menu_item relative">
              <a href="#">Solution</a>
            </li>
            <li className="menu_item relative">
              <a href="#">Features</a>
            </li>
          </ul>
        </nav>

        <div className="flex gap-10">
          <button className="text-white font-normal text-lg hover:text-primary transition-all">
            Login
          </button>
          <button className="px-8 py-2 bg-white text-black rounded-full text-lg font-medium transition-all border hover:bg-transparent hover:text-primary hover:border-primary">
            Register
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
