'use client'
import React from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Close from "../../../assets/images/icons/closeDragDropHome.svg";

interface CardGRabProps {
  positionLeft: string;
  positionTop: string;
  image: StaticImageData;
  altImage: string;
  zIndex: number;
  content: string;
  deg: string;
}
function CardGRab({
  image,
  positionLeft,
  positionTop,
  altImage,
  zIndex,
  content,
  deg
}: CardGRabProps) {
  return (
    <motion.div
      style={{
        position: "relative",
        left: `${positionLeft}`,
        top: `${positionTop}`,
        zIndex: zIndex,
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
        className={`text-xl cursor-grab gap-3 text-white w-[341px] h-[82px] bg-black3 flex items-center justify-center shadow-2xl drop-shadow-[(5px 8px 8px rgba(0, 0, 0, 0.84))] ${deg}`}
      >
        <Image src={image} width={32} height={32} alt={altImage} className="cursor-auto"/>
        {content}
        <div className="absolute right-0">
          <Image src={Close} alt="Icon close"  className="cursor-auto"/>
        </div>
      </span>
    </motion.div>
  );
}

export default CardGRab;
