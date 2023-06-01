import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
function Prices() {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <section style={{ background: "red" }}>
        <div className={styles.switch} data-isOn={isOn} onClick={toggleSwitch}>
          <motion.div className={styles.handle} layout transition={spring} />
        </div>
    </section>
  );
}

export default Prices;
