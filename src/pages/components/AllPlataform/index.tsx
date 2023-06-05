import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

function AllPlataform() {

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ delay: 0.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ delay: 0.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ delay: 0.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ delay: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ delay: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ delay: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ delay: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ delay: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
        />
      </div>


      {/* Aparecer as imagens com data aos */}
    </section>
  );
}

export default AllPlataform;
