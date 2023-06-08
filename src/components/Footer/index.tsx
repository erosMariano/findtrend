import Link from "next/link";
import React from "react";
import Logo from "../../assets/images/logoBlack.svg";
import Image from "next/image";
import { EffraFont } from "@/pages/index";

function Footer() {
  return (
    <footer className="bg-white py-10">
      <div className="mx-auto max-w-[1312px] px-4 flex w-full justify-between flex-col lg:flex-row">
        <Image alt="Logo FindTrend" src={Logo} width={170} height={41} className="mx-auto block lg:ml-0"/>
        <ul className={`text-lg ${EffraFont.className} mt-20 lg:mt-0 flex-col lg:flex-row text-black flex items-center justify-between gap-10`}>
          <li className="relative">
            <Link className="menu_item" href="">Privacy Policy</Link>
          </li>
          <li className="relative">
            <Link className="menu_item" href="">Terms and Conditions</Link>
          </li>
          <li className="relative">
            <Link className="menu_item" href="">Contact Us</Link>
          </li>
          <li className="relative">
            <Link className="menu_item" href="">Careers</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
