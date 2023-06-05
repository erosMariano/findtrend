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
          className={`w-[124px] h-[124px] cursor-auto rounded-lg flex items-center justify-center transition-all ${
            active ? "bg-primary" : "bg-white"
          }`}
        >
          <Image src={image} alt={alt} width={64} height={64} quality={100} />
        </button>
      </div>
    </motion.div>
  );
}

export default PlatformCard;
