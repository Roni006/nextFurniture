import React from "react";
import Container from "./Container";
import range1 from "../../public/Range/range1.png";
import range2 from "../../public/Range/range2.png";
import range3 from "../../public/Range/range3.png";
import Image from "next/image";
const Range = () => {
  return (
    <>
      <section className="py-15">
        <Container>
          <div className="text-center">
            <h2 className="font-bold font-montserrat text-[32px] text-[#333333] pb-4">
              Browse The Range
            </h2>
            <p className="text-base font-montserrat font-normal text-[#666666]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex items-center justify-center gap-10 pt-12.5">
            <div className="flex flex-col items-center justify-center ">
              <Image className="rounded-md w-full" src={range1} />
              <span className="font-semibold font-montserrat text-[24px] text-[#131313] pt-7.5 ">
                Dining
              </span>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <Image className="rounded-md" src={range2} />
              <span className="font-semibold font-montserrat text-[24px] text-[#131313] pt-7.5 ">
                Living
              </span>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <Image className="rounded-md" src={range3} />
              <span className="font-semibold font-montserrat text-[24px] text-[#131313] pt-7.5 ">
                Bedroom
              </span>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Range;
