import React from "react";
import Container from "./Container";
import Image from "next/image";
import footer1 from "../../public/footer/footer1.jpg";
import footer2 from "../../public/footer/footer2.jpg";
import footer3 from "../../public/footer/footer3.jpg";
import footer4 from "../../public/footer/footer4.jpg";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#03344F] pt-12.5 pb-22.5">
        <Container>
          <div className="flex   gap-5.75 justify-between">
            <div className="left w-[30%]">
              <h2 className="text-[24px] font-bold font-montserrat text-white pb-8.75">
                Beauty Care
              </h2>
              <p className="text-base font-normal leading-8.75 text-white font-montserrat w-86.25">
                Do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris.
              </p>
              <h3 className="text-[24px] font-bold font-montserrat text-white pb-8.75 pt-5.5">
                Follow Us
              </h3>
            </div>
            <div className="right w-[70%]">
              <h4 className="text-[24px] font-bold font-montserrat text-white ">
                Instagram Shop
              </h4>
              <div className="mt-5.75 grid grid-cols-4 items-center justify-between gap-5.5">
                <Image src={footer1} />
                <Image src={footer2} />
                <Image src={footer3} />
                <Image src={footer4} />
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
