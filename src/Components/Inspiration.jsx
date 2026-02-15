import React from "react";
import Container from "../Components/Container";
import Image from "next/image";
import inspire1 from "../../public/inspire/inspire1.png";
import inspire2 from "../../public/inspire/inspire2.png";
import inspire3 from "../../public/inspire/inspire3.png";
const Inspiration = () => {
  return (
    <>
      <section className="py-15">
        <Container>
          <div className="text-center">
            <h2 className="font-bold font-montserrat text-[32px] text-[#333333] pb-4">
              Inspiratio Collection
            </h2>
            <p className="text-base font-montserrat font-normal text-[#666666]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex items-center justify-center gap-10 pt-12.5">
            <Image className="rounded-[60px_0_0_0]" src={inspire3} />
            <Image className="mb-[60px]" src={inspire2} />
            <Image className="rounded-[0_0_60px_0]" src={inspire1} />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Inspiration;
