import { EffraFont, GoodDog } from "@/pages/index";
import { motion } from "framer-motion";
import ArrowLeft from "../../assets/images/arrowNewTabLeft.svg";
import ArrowRight from "../../assets/images/arrowNewTabRight.svg";
import Close from "../../assets/images/icons/closeDragDropHome.svg";
import IconLogo from "../../assets/images/icons/logoIcon.svg";
import React, { useRef } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import ArrowMobile from '../../assets/images/icons/arrowMobile.svg'
function OpenNewTab() {
  const constraintsRef = useRef(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const opacityVariants = {
    hidden: {
      opacity: 0,
      y: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="bg-primary py-20 lg:py-36 px-4">
      <h2
        className={`text-center font-bold text-4xl lg:text-7xl ${EffraFont.className}`}
      >
        Open new tabs is sh*t{" "}
      </h2>

      <div
        className="relative flex gap-6 items-center justify-center mt-16 w-[339px] mx-auto lg:w-full"
        ref={ref}
      >
        <div className="absolute top-[140px] left-0 bottom-0  w-28 text-center lg:rotate-6 flex flex-col item-center justify-center lg:left-0 lg:relative lg:top-0">
          <motion.div
            variants={opacityVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src={ArrowLeft}
              alt="Arrow left"
              className="relative left-12 rotate-[-25deg] lg:rotate-0"
            />

            <p className={GoodDog.className}>solution for discover a trend</p>
          </motion.div>
        </div>

        <div
          className="w-[339px] h-[118px] lg:w-[502px] lg:h-[202px] bg-gray3 rounded-2xl flex items-center justify-center"
          ref={constraintsRef}
        >
          <motion.div
            drag
            dragConstraints={constraintsRef}
            dragSnapToOrigin={true}
            className="cursor-grab"
            variants={opacityVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <span className="relative text-xl gap-3 text-white w-[291px] lg:w-[341px] h-[69px] lg:h-[82px] bg-black3 flex items-center justify-center shadow-2xl drop-shadow-[(5px 8px 8px rgba(0, 0, 0, 0.84))]">
              <Image src={IconLogo} width={32} height={32} alt="Icon twitter" />
              Findtrend - Elon Musk
              <div className="absolute right-0 lg:top-[-1px]">
                <Image
                  src={Close}
                  alt="Icon close"
                  className="h-[69px] lg:h-auto"
                />
              </div>
            </span>
          </motion.div>
        </div>

        <div className="absolute -right-0 top-[-77px] lg:right-0 lg:-top-10 lg:relative">
          <motion.div
            variants={opacityVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="w-24 text-center lg:rotate-6 flex flex-col item-center justify-center relative top-6">
              <p className={GoodDog.className}>You just need one tab now</p>
              <Image src={ArrowRight} alt="Arrow right" className="hidden lg:block"/>
              <Image src={ArrowMobile} alt="Arrow right" className="lg:hidden -top-2 relative"/>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        variants={opacityVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <p
          className={`w-full md:w-[580px] text-center mx-auto mt-24 lg:mt-16 ${EffraFont.className}`}
        >
          A solution for your browser tabs and don't make your device get slower
          over time. Get ease and faster to discover a trend with just one tab.
        </p>
      </motion.div>
    </section>
  );
}

export default OpenNewTab;
