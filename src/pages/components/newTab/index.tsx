import React from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
function NewTab() {
  // Animação para os textos do newsTabs

  return (
    <div style={{height: "100vh", background: "red"}}>
      <motion.div
        className={styles.box}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.5 }}
        whileInView={{ opacity: 1 }}
      />
    </div>
  );
}

export default NewTab;
