import { EffraFont } from "@/pages/index";
import React from "react";
import CardPartner from "./CardPartner";

import Microsoft from "../../assets/microsoft.png";
import Allianz from "../../assets/allianz.png";
import UpWork from "../../assets/upwork.png";
import Volvo from "../../assets/volvo.png";
import Grab from "../../assets/grab.png";
import Verizon from "../../assets/verizon.png";
import Coinbase from "../../assets/coinbase.png";
import Expedia from "../../assets/expedia.png";
import AirTable from "../../assets/airtable.png";
import Magento from "../../assets/magento.png";
import Carrera from "../../assets/carrera.png";
import Bonanza from "../../assets/bonanza.png";
import WeTransfer from "../../assets/wetransfer.png";
import Suzuki from "../../assets/suzuki.png";
import Algolia from "../../assets/algolia.png";
import Heineken from "../../assets/heineken.png";

function PartnerSection() {
  const data = [
    {
      id: 1,
      image: Microsoft,
      alt: "Microsoft",
    },
    {
      id: 2,
      image: Allianz,
      alt: "Allianz",
    },
    {
      id: 3,
      image: UpWork,
      alt: "UpWork",
    },
    {
      id: 4,
      image: Volvo,
      alt: "Volvo",
    },
    {
      id: 5,
      image: Grab,
      alt: "Grab",
    },
    {
      id: 6,
      image: Verizon,
      alt: "Verizon",
    },
    {
      id: 7,
      image: Coinbase,
      alt: "Coinbase",
    },
    {
      id: 8,
      image: Expedia,
      alt: "Expedia",
    },
    {
      id: 9,
      image: AirTable,
      alt: "AirTable",
    },
    {
      id: 10,
      image: Magento,
      alt: "Magento",
    },
    {
      id: 11,
      image: Carrera,
      alt: "Carrera",
    },
    {
      id: 12,
      image: Bonanza,
      alt: "Bonanza",
    },
    {
      id: 13,
      image: WeTransfer,
      alt: "WeTransfer",
    },
    {
      id: 14,
      image: Suzuki,
      alt: "Suzuki",
    },
    {
      id: 15,
      image: Algolia,
      alt: "Algolia",
    },
    {
      id: 16,
      image: Heineken,
      alt: "Heineken",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-36">
      <div className="mx-auto max-w-[1312px] px-4 sticky top-32">
        <h2
          className={`text-4xl italic lg:not-italic font-bold lg:text-[64px] mb-8 lg:mb-20 text-center ${EffraFont.className}`}
        >
          Findtrend make +1000 Startup grow
        </h2>

        <div className="flex gap-8 flex-wrap justify-center">
          {data.map((image) => (
            <CardPartner alt={image.alt} key={image.id} image={image.image} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnerSection;
