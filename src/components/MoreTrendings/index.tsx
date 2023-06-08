import { EffraFont } from "@/pages/index";
import React from "react";

function MoreTrending() {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-[1312px] px-4 w-full py-20 lg:min-h-[539px] flex items-center justify-center flex-col">
        <h2
          className={`${EffraFont.className} text-4xl lg:text-7xl font-semibold italic text-center`}
        >
          Join us on email for{" "}
          <span className={`text-green2 block`}>more trending topics</span>
        </h2>

        <button
          className={`mt-10 bg-black rounded-full ${EffraFont.className} font-bold text-white text-lg flex items-center justify-center w-[180px] py-4 transition-all border border-black hover:bg-transparent hover:text-black`}
        >
          Join Now
        </button>
      </div>
    </section>
  );
}

export default MoreTrending;
