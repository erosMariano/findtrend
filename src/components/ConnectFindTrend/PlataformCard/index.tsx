import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";
interface PlatformCardProps {
  image: StaticImageData;
  alt: string;
  id: number;
  active: boolean;
  delay: number;
}
function PlatformCard({ image, alt, active, delay }: PlatformCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      transition={{ delay: delay }}
      whileInView={{ opacity: 1, scale: 1 }}
    >
      <div>
        <button
          className={` w-16 h-16 lg:w-[124px] lg:h-[124px] cursor-auto rounded-lg flex items-center justify-center transition-all ${
            active ? "bg-primary" : "bg-white"
          }`}
        >
          <Image src={image} alt={alt} className="w-7 lg:w-16 h-7 lg:h-16" quality={100} />
        </button>
      </div>
    </motion.div>
  );
}

export default PlatformCard;
