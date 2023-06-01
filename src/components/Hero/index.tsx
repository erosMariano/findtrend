import { EffraFont, GoodDog } from "@/pages/index";
import React from "react";
import Arrow from "../../assets/images/arrowHero.svg";
import Twitter from "../../assets/images/icons/twitter.svg";
import Pinterest from "../../assets/images/icons/pinterest.svg";
import Facebook from "../../assets/images/icons/facebook.svg";
import Dribble from "../../assets/images/icons/dribble.svg";
import Mouse from "../../assets/images/icons/mouse.svg";

import Image from "next/image";

import { motion } from "framer-motion";
import BgLines from "./BgLines";

function Hero() {
  return (
    <section className="bg-black 2xl:pt-48 pt-40 pb-24 overflow-x-hidden overflow-y-hidden flex flex-col relative">
      <div className="mx-auto max-w-[1312px] px-4 z-10">
        <h1
          className={`text-white text-center mb-6 ${EffraFont.className} font-bold text-7xl`}
        >
          Minimize your tabs. <br /> Find the trends!
        </h1>
        <p className="text-gray1 text-center max-w-lg mx-auto mb-10">
          Don't let your computer memories consumes all of those browser tabs.
          Findtrend let you gathers all of your favorite website into one place.
        </p>

        <div className="flex gap-4 justify-center items-center">
          <button
            className={`bg-primary px-8 py-4 rounded-full ${EffraFont.className} font-bold transition-all hover:bg-buttonHover hover:text-white`}
          >
            Get Started 🔥
          </button>

          <div className="relative -top-2">
            <span
              className={`text-white block ${GoodDog.className} text-sm w-24 text-center rotate-6`}
            >
              All research start from here
            </span>
            <Image src={Arrow} alt="Arrow image" />
          </div>
        </div>
      </div>

      <div className="mt-24 flex items-center justify-center">
        <motion.div
          style={{
            position: "relative",
            left: "132px",
            top: "-58px",
            zIndex: 5,
            cursor: "pointer",
          }}
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
        >
          <span
            style={{ filter: "drop-shadow(5px 8px 8px rgba(0, 0, 0, 0.84))" }}
            className="gap-3 text-white w-[341px] h-[82px] bg-black3 -rotate-[4deg] flex items-center justify-center shadow-2xl drop-shadow-[(5px 8px 8px rgba(0, 0, 0, 0.84))]"
          >
            <Image src={Twitter} width={32} height={32} alt="Icon twitter" />
            Cryptopunk - Search
          </span>
        </motion.div>

        <motion.div
          style={{
            position: "relative",
            zIndex: 4,
            cursor: "pointer",
          }}
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
        >
          <span
            style={{ filter: "drop-shadow(5px 8px 8px rgba(0, 0, 0, 0.84))" }}
            className="gap-3 text-white w-[341px] h-[82px] bg-black3 -rotate-[4deg] flex items-center justify-center shadow-2xl drop-shadow-[(5px 8px 8px rgba(0, 0, 0, 0.84))]"
          >
            <Image
              src={Pinterest}
              width={32}
              height={32}
              alt="Icon Pinterest"
            />
            Popular Design - Search
          </span>
        </motion.div>

        <motion.div
          style={{
            position: "relative",
            top: "-35px",
            left: "-50px",
            zIndex: 2,
            cursor: "pointer",
          }}
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
        >
          <span
            style={{ filter: "drop-shadow(5px 8px 8px rgba(0, 0, 0, 0.84))" }}
            className="gap-3 text-white w-[341px] h-[82px] bg-black3 rotate-[2deg] flex items-center justify-center shadow-2xl drop-shadow-[(5px 8px 8px rgba(0, 0, 0, 0.84))]"
          >
            <Image src={Facebook} width={32} height={32} alt="Icon Facebook" />
            Product Design - Search
          </span>
        </motion.div>

        <motion.div
          style={{
            position: "relative",
            left: "-127px",
            zIndex: 1,
            cursor: "pointer",
          }}
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
        >
          <span
            style={{ filter: "drop-shadow(5px 8px 8px rgba(0, 0, 0, 0.84))" }}
            className="gap-3 text-white w-[341px] h-[82px] bg-black3 -rotate-[4deg] flex items-center justify-center shadow-2xl drop-shadow-[(5px 8px 8px rgba(0, 0, 0, 0.84))]"
          >
            <Image src={Dribble} width={32} height={32} alt="Icon Dribble" />
            Elon Musk - Search
          </span>
        </motion.div>
      </div>

      <BgLines />

      <div className="text-white z-10 flex items-center flex-col relative top-9">
        <span className={GoodDog.className}>Click and drag cards</span>
        <Image src={Mouse} alt="Icon mouse" width={24} height={24} />
      </div>
    </section>
  );
}

export default Hero;
