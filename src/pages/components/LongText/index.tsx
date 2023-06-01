import React, { useEffect, useRef } from "react";
import styles from "./styles.module.css";

function LongText() {
  useEffect(() => {
    const textElements = document.querySelectorAll(`.${styles.text}`);
    const sectionElement = document.querySelector(`.${styles.section}`) as Element;

    const handleScroll = () => {
      const rect = sectionElement.getBoundingClientRect();
      if (rect.top < 600) {
        textElements.forEach((el) => {
          const letters = el.textContent?.split("");
          if (letters) {
            const updatedText = letters
              .map((letter, index) => {
                const color =
                  rect.top + index * 10 < 1 ? "#000000" : "#ADADAD";
                return `<span style="color: ${color}">${letter}</span>`;
              })
              .join("");
            el.innerHTML = updatedText;
          }
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={styles.section}>
      <p className={styles.text}>
        Findtrend helps you to increase your <br />
        productivity and reduce your computer's
        <br />
        memory load, an application that can
        <br />
        fulfill your daily browsing needs.
      </p>
    </section>
  );
}

export default LongText;
