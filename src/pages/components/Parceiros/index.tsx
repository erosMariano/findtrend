import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
function Parceiros() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sectionElement = document.querySelector(
      `.${styles.parceiros}`
    ) as Element;

    const handleScroll = () => {
      const rect = sectionElement.getBoundingClientRect();
      if (sectionElement) {
        if(rect.top < 400){
          setIsOpen(true)
        }else{
          setIsOpen(false)
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.parceiros}>
      <motion.div
        layout
        data-isOpen={isOpen}
        initial={{ borderRadius: 50 }}
        className={styles.parent}
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div layout className={styles.child} />
      </motion.div>
    </div>
  );
}

export default Parceiros;
