import React, { useCallback, useEffect, useState } from "react";
import Logo from "../../assets/logo.svg";
import Image from "next/image";
import { EffraFont } from "@/pages/index";
import LogoMini from "../../assets/images/icons/logoMini.svg";
function Header() {
  const [headerActive, setHeaderActive] = useState(false);
  const [iconMenu, setIconMenu] = useState(false);

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
    };
  }, [headerActive]);

  function handleMenuMobileActive() {
    setIconMenu((prevState) => !prevState);
  }
  return (
    <header
      className={`fixed top-0 left-0 w-full z-20 transition ${
        headerActive ? "bg-black" : "bg-transparent"
      }`}
    >
      <div
        className={`flex items-center mx-auto max-w-[1312px] px-4 gap-4 justify-between transition-all ${
          headerActive ? "py-4" : "py-8"
        }`}
      >
        <Image
          src={Logo}
          width={170}
          height={41}
          alt="Findtrend logo"
          className="hidden lg:block"
        />
        <Image
          src={LogoMini}
          width={40}
          height={40}
          alt="Findtrend logo"
          className="block lg:hidden z-10"
        />

        <nav>
          <ul
            className={`${EffraFont.className} transition-all ${
              iconMenu ? "top-0" : "-top-[42rem]"
            } items-center pt-24 h-screen absolute pb-10 bg-black w-full left-0 top-0 flex-col text-white font-medium text-lg flex gap-10 lg:w-auto lg:relative lg:top-0 lg:left-0 lg:h-auto lg:flex-row lg:bg-transparent lg:py-0`}
          >
            <li className="menu_item relative">
              <a onClick={handleMenuMobileActive} href="#">About</a>
            </li>
            <li className="menu_item relative">
              <a onClick={handleMenuMobileActive} href="#">How it work</a>
            </li>
            <li className="menu_item relative">
              <a onClick={handleMenuMobileActive} href="#">Pricing</a>
            </li>
            <li className="menu_item relative">
              <a onClick={handleMenuMobileActive} href="#">Solution</a>
            </li>
            <li className="menu_item relative">
              <a onClick={handleMenuMobileActive} href="#">Features</a>
            </li>

            <button className="text-white font-normal text-lg hover:text-primary transition-all lg:hidden">
              Login
            </button>
            <button className="lg:hidden px-8 py-2 bg-white text-black rounded-full text-lg font-medium transition-all border hover:bg-transparent hover:text-primary hover:border-primary">
              Register
            </button>
          </ul>
        </nav>

        <div className="gap-10 hidden lg:flex">
          <button className="text-white font-normal text-lg hover:text-primary transition-all">
            Login
          </button>
          <button className="px-8 py-2 bg-white text-black rounded-full text-lg font-medium transition-all border hover:bg-transparent hover:text-primary hover:border-primary ">
            Register
          </button>
        </div>

        <button
          onClick={handleMenuMobileActive}
          className="w-6 h-6 flex items-center flex-col justify-center lg:hidden z-10"
        >
          <span
            className={`w-[18px] transition-all bg-white h-[2px] block ${
              iconMenu ? "rotate-45 relative top-[2px]" : ""
            }`}
          ></span>
          <span
            className={`w-[18px] bg-white h-[2px] block  ${
              iconMenu ? "-rotate-45 opacity-1" : "opacity-0"
            }`}
          ></span>
          <span
            className={`w-[18px] transition-all  bg-white h-[2px] block mt-[6px] ${
              iconMenu ? "opacity-0" : "opacity-1"
            }`}
          ></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
