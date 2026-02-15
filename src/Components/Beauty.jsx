import React from "react";
import Container from "./Container";
import Image from "next/image";
import circle from "../../public/beauty/circle.png";
import bg from "../../public/beauty/bg.png";
const Beauty = () => {
  return (
    <>
      <section className="bg-[#F2F5FF] py-15">
        <Container>
          <div className="flex items-center justify-center gap-15.5">
            {/* todo: left content  */}
            <div className="w-138.5">
              <h2 className="font-bold font-montserrat text-[32px] text-[#131313]">
                Beautify Your Space
              </h2>
              <p className="font-normal font-montserrat text-[18px] leading-9.75 text-[#666666] max-w-97 pt-5 pb-7.5">
                Do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris.
              </p>
              <button className="bg-[#054C73] px-18 py-6.25 rounded-[50px] text-[#ffffff] font-bold text-base font-montserrat cursor-pointer">
                LEARN MORE
              </button>
            </div>
            {/* todo: right content  */}
            <div className="relative">
              <Image className="relative rounded-[50px_0_0_0] z-10" src={bg} />
              <Image
                src={circle}
                className="absolute top-[190px] right-[-79px] z-0"
              /> 
               
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Beauty;
