import { EffraFont } from "@/pages/index";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import CheckedIcon from "../../../assets/images/icons/checked.svg";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

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
  delay: number
}
function CardPrice({
  cardType,
  listItems,
  price,
  subtitle,
  title,
  urlRedirect,
  emphasis,
  delay
}: CardPriceProps) {
  const constraintsRef = useRef(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const opacityVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      variants={opacityVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.5, delay: delay }}
      ref={ref}
      className="flex"
    >
      <div
        className={`${EffraFont.className} w-[360px] ${
          emphasis ? "bg-primary" : "bg-white"
        } rounded-2xl p-8 flex flex-col`}
      >
        <h3 className="text-4xl">{title}</h3>
        <span className="text-lg block pb-8 border border-t-0 border-x-0 border-b-black/20">
          {subtitle}
        </span>

        <div className="mt-4">
          <h5 className="text-[64px] font-medium">
            ${cardType === "month" ? price.month : price.yearly}
            <span className="text-lg font-normal">
              / {cardType === "month" ? "Monthly" : "Yearly"}
            </span>
          </h5>
        </div>

        <nav className="flex flex-col flex-grow">
          <ul className="flex flex-col gap-6">
            {listItems.map((item, index) => (
              <li className="flex gap-2 text-lg" key={item[index]}>
                <Image src={CheckedIcon} alt="Icon checked" />
                {item}
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href={urlRedirect}
          className={` mt-6 w-full rounded-full transition border border-black py-4 font-bold flex items-center justify-center ${
            emphasis
              ? "bg-black text-white hover:bg-transparent hover:text-black"
              : "bg-primary border-primary hover:bg-transparent"
          }`}
        >
          Start Free Trial
        </Link>
      </div>
    </motion.div>
  );
}

export default CardPrice;
