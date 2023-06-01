import { EffraFont, GoodDog } from "@/pages/index";
import { motion } from "framer-motion";
import ArrowLeft from "../../assets/images/arrowNewTabLeft.svg";
import ArrowRight from "../../assets/images/arrowNewTabRight.svg";
import Close from "../../assets/images/icons/closeDragDropHome.svg";
import IconLogo from "../../assets/images/icons/logoIcon.svg";
import React, { useRef } from "react";
import Image from "next/image";
function OpenNewTab() {
  const constraintsRef = useRef(null);

  return (
    <section className="bg-primary py-36">
      <h1 className={`text-center font-bold text-7xl ${EffraFont.className}`}>
        Open new tabs is sh*t{" "}
      </h1>
      {/* <div>
        <motion.div
          className="w-80 h-80 bg-black border-full"
          initial={{ opacity: 0 }}
          transition={{ delay: 0.5 }}
          whileInView={{ opacity: 1 }}
        />
      </div> */}

      <div className="flex gap-6 items-center justify-center mt-16">
        <div className="w-28 text-center rotate-6 flex flex-col item-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
            whileInView={{ opacity: 1 }}
          >
            <Image
              src={ArrowLeft}
              alt="Arrow left"
              className="relative left-12"
            />

            <p className={GoodDog.className}>solution for discover a trend</p>
          </motion.div>
        </div>

        <div
          className="w-[502px] h-[202px] bg-gray3 rounded-2xl flex items-center justify-center"
          ref={constraintsRef}
        >
          <motion.div
            drag
            dragConstraints={constraintsRef}
            dragSnapToOrigin={true}
            className="cursor-pointer"
            initial={{ opacity: 0 }}
            transition={{ delay: 0.6 }}
            whileInView={{ opacity: 1 }}
          >
            <span className="relative text-xl gap-3 text-white w-[341px] h-[82px] bg-black3 flex items-center justify-center shadow-2xl drop-shadow-[(5px 8px 8px rgba(0, 0, 0, 0.84))]">
              <Image src={IconLogo} width={32} height={32} alt="Icon twitter" />
              Findtrend - Elon Musk
              <div className="absolute right-0 top-[-1px]">
                <Image src={Close} alt="Icon close" />
              </div>
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          transition={{ delay: 0.4 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="w-24 text-center rotate-6 flex flex-col item-center justify-center relative top-6">
            <p className={GoodDog.className}>You just need one tab now</p>
            <Image src={ArrowRight} alt="Arrow right" />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        transition={{ delay: 0.8 }}
        whileInView={{ opacity: 1 }}
      >
        <p
          className={`w-[580px] text-center mx-auto mt-16 ${EffraFont.className}`}
        >
          A solution for your browser tabs and don't make your device get slower
          over time. Get ease and faster to discover a trend with just one tab.
        </p>
      </motion.div>
    </section>
  );
}

export default OpenNewTab;
