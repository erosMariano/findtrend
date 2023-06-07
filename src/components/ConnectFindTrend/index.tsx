import React, { useState } from "react";
import FacebookIcon from "../../assets/images/icons/facebook.svg";
import TwitterIcon from "../../assets/images/icons/twitter.svg";
import DribbleIcon from "../../assets/images/icons/dribble.svg";
import PinteRestIcon from "../../assets/images/icons/pinterest.svg";
import MediumIcon from "../../assets/images/icons/medium.png";
import RedditIcon from "../../assets/images/icons/reddit.png";
import VktIcon from "../../assets/images/icons/vk.png";
import LinkedInIcon from "../../assets/images/icons/linkedin.png";
import PlatformCard from "./PlataformCard";

import ImageTwitter1 from "../../assets/images/tweet1.png";
import ImageTwitter2 from "../../assets/images/tweet2.png";
import ImageTwitter3 from "../../assets/images/tweet3.png";
import Image from "next/image";
import { EffraFont } from "@/pages/index";

function ConnectFindTrend() {
  const dataIcons = [
    {
      image: FacebookIcon,
      alt: "Icon facebook",
      active: false,
      id: 0,
      delay: 0.1,
    },
    {
      image: TwitterIcon,
      alt: "Icon Twitter",
      active: true,
      id: 1,
      delay: 0.2,
    },
    {
      image: DribbleIcon,
      alt: "Icon Dribble",
      active: false,
      id: 2,
      delay: 0.3,
    },
    {
      image: PinteRestIcon,
      alt: "Icon Pinterest",
      active: false,
      id: 3,
      delay: 0.4,
    },
    {
      image: MediumIcon,
      alt: "Icon Medium",
      active: false,
      id: 4,
      delay: 0.5,
    },
    {
      image: RedditIcon,
      alt: "Icon Reddit",
      active: false,
      id: 5,
      delay: 0.6,
    },
    {
      image: VktIcon,
      alt: "Icon Vk",
      active: false,
      id: 6,
      delay: 0.7,
    },
    {
      image: LinkedInIcon,
      alt: "Icon LinkedIn",
      active: false,
      id: 10,
      delay: 0.8,
    },
  ];

  return (
    <section className="bg-[#FAFAFA] py-20 lg:py-36">
      <div className="mx-auto max-w-[1312px] px-4 w-full">
        <div className="overflow-x-scroll scrollSocial">
          <div className="flex gap-[2.563rem] w-max lg:flex-wrap">
            {dataIcons.map((item) => (
              <PlatformCard
                image={item.image}
                id={item.id}
                alt={item.alt}
                key={item.alt}
                active={item.active}
                delay={item.delay}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:gap-10 items-center mt-8 lg:mt-20 lg:max-w-[800px] mx-auto">
          <Image src={ImageTwitter1} alt="Image twitter 1" quality={100} className="w-full"/>
          <Image src={ImageTwitter2} alt="Image twitter 2" quality={100} className="w-full"/>
          <Image src={ImageTwitter3} alt="Image twitter 3" quality={100} className="w-full"/>
        </div>

        <button className={`${EffraFont.className} rounded-full text-sm lg:text-lg font-bold text-white bg-black w-[154px] h-[44px] lg:w-[200px] lg:h-[57px] flex items-center justify-center mx-auto mt-8 lg:mt-20 border border-black transition-all hover:bg-transparent hover:text-black`}>View More Trend</button>
      </div>
    </section>
  );
}

export default ConnectFindTrend;
