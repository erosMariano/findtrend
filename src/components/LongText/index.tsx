import { EffraFont } from "@/pages/index";
import React, { useEffect, useRef } from "react";

function LongText() {
  useEffect(() => {
    const sectionElement = document.querySelector(`.sectionLong`) as Element;
    const textElements = document.querySelectorAll(`.paragraphLong`);
    const handleScroll = () => {
      const rect = sectionElement.getBoundingClientRect();
      if (rect.top < 600) {
        textElements.forEach((el: any) => {
          const letters = el.textContent?.split("");
          if (letters) {
            const updatedText = letters
              .map((letter: string, index: number) => {
                const color = rect.top + index * 10 < 1 ? "#000000" : "#ADADAD";
              return `<span class="spanLetter" style="color: ${color};">${letter}</span>`;
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
    <section className="sectionLong py-20 lg:py-36 2xl:h-[300vh] h-[320vh] relative">
      <div className="mx-auto max-w-[1312px] px-4 sticky top-32">
        <p
          className={`paragraphLong ${EffraFont.className} font-bold text-gray2 text-4xl italic lg:not-italic lg:text-[64px]`}
        >
          Findtrend helps you to increase your <br />
          productivity and reduce your computer's
          <br />
          memory load, an application that can
          <br />
          fulfill your daily browsing needs.
        </p>
      </div>
    </section>
  );
}

export default LongText;
