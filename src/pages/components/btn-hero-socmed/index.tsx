import React from "react";
import styles from "./index.module.css";
import { motion } from "framer-motion";

export function BtnHeroSocMed() {
  return (
    <div className={styles.containerTeste}>
      <motion.div
        style={{
          position: "relative",
          left: "132px",
          top: "-58px",
          zIndex: 5,
        }}
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
      >
        <div className={styles.teste}></div>
      </motion.div>

      <motion.div
        style={{
          position: "relative",
          zIndex: 4,
        }}
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
      >
        <div className={styles.teste2}></div>
      </motion.div>

      <motion.div
        style={{ position: "relative", top: "-35px", left: "-50px", zIndex: 2 }}
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
      >
        <div className={styles.teste3}></div>
      </motion.div>

      <motion.div
        style={{ position: "relative", left: "-127px", zIndex: 1 }}
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
      >
        <div className={styles.teste4}></div>
      </motion.div>
    </div>
  );
}

export default BtnHeroSocMed;
