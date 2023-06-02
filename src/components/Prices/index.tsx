import { EffraFont, GoodDog } from "@/pages/index";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Arrow from "../../assets/images/arrowHero.svg";
import Image from "next/image";
import CardPrice from "src/components/Prices/CardPrice";

interface CardPriceProps {
  title: string;
  subtitle: string;
  price: {
    month: number;
    yearly: number;
  };
  cardType: "month" | "yearly";

  listItems: string[];

  urlRedirect: string;
  emphasis: boolean;
  delay: number;
}

function Prices() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  const dataForCards: CardPriceProps[] = [
    {
      title: "Personal",
      subtitle: "Special first packet for all",
      cardType: isOn ? "yearly" : "month",
      listItems: [
        "Up to 5 page each group",
        "Up to 10 group page",
        "5 Days group page saved",
      ],
      price: {
        month: 8,
        yearly: 120,
      },
      urlRedirect: "#",
      emphasis: false,
      delay: 0.6,
    },
    {
      title: "Regular",
      subtitle: "Recommended for personal pro",
      cardType: isOn ? "yearly" : "month",
      listItems: [
        "Up to 15 page each group",
        "Download page up to 20 page",
        "Up to 10 group page",
        "15 Days group page saved",
      ],
      price: {
        month: 20,
        yearly: 200,
      },
      urlRedirect: "#",
      emphasis: true,
      delay: 0.4,
    },

    {
      title: "Premium",
      subtitle: "Packet for Startup & Company",
      cardType: isOn ? "yearly" : "month",
      listItems: [
        "Unlimited group pages",
        "Unlimited download page",
        "Unlimited page each group",
        "Customize sorting group pages",
        "Customize group page name",
        "30 Days group page saved",
      ],
      price: {
        month: 48,
        yearly: 480,
      },
      urlRedirect: "#",
      emphasis: false,
      delay: 0.6,
    },
  ];
  return (
    <section className="bg-black py-36">
      <div className="mx-auto max-w-[1312px] px-4 w-full">
        <h2
          className={`${EffraFont.className} font-bold text-[64px] text-white mb-10 text-center`}
        >
          Get your best deal
        </h2>

        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="text-2xl flex items-center gap-8">
              <span
                className={`${
                  isOn ? "text-gray-500" : "text-white"
                } transition-all`}
              >
                Monthly
              </span>
              <div
                className={`w-[104px] h-[52px] bg-white flex items-start rounded-full px-3 cursor-pointer ${
                  isOn ? "justify-end" : ""
                } items-center`}
                data-ison={isOn}
                onClick={toggleSwitch}
              >
                <motion.div
                  className="w-9 h-9 bg-primary rounded-[40px]"
                  layout
                  transition={spring}
                />
              </div>
              <span
                className={`${
                  !isOn ? "text-gray-500" : "text-white"
                } transition-all`}
              >
                Yearly
              </span>
            </div>

            <div className="rotate-6 absolute -right-20 -top-5">
              <p
                className={`${GoodDog.className} text-white text-sm w-16 text-center`}
              >
                Save 10% per month
              </p>
              <Image src={Arrow} alt="" />
            </div>
          </div>
        </div>

        <div className="mt-10 flex gap-10 justify-center">
          {dataForCards.map(
            ({
              cardType,
              listItems,
              price,
              subtitle,
              title,
              urlRedirect,
              emphasis,
              delay,
            }) => (
              <CardPrice
                delay={delay}
                cardType={cardType}
                listItems={listItems}
                price={price}
                subtitle={subtitle}
                title={title}
                urlRedirect={urlRedirect}
                emphasis={emphasis}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Prices;
