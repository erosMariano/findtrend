import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

interface CardPartnerProps {
  image: StaticImageData;
  alt: string;
}
function CardPartner({ image, alt }: CardPartnerProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeUpVariants = {
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
    <div ref={ref}>
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="w-[155px] lg:w-[266px] h-[74px] md:w-[266px] md:h-[120px] bg-gray3 rounded-lg flex items-center justify-center">
          <Image src={image} alt={alt} className="w-[105px] md:w-auto"/>
        </div>
      </motion.div>
    </div>
  );
}

export default CardPartner;
