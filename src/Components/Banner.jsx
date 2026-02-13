import React from "react";
import Container from "./Container";
import Image from "next/image";
import bannerBg from "../../public/images/banner.jpg";

const Banner = () => {
  return (
    <>
      <section>
        <div className="relative ">
          <Image className="w-full h-screen" src={bannerBg} />
          <div className="bg-[#DFE9F4] px-10.5 py-10 w-161.25 absolute right-22.5 top-38.75 rounded-[10px]">
            <h6 className="font-semibold font-montserrat text-base tracking-[3px] text-[#333333] pb-5">
              New Arrival
            </h6>
            <h1 className="text-[#054C73] text-[52px] font-montserrat leading-15.25 font-bold  w-97.5 pb-5">Discover Our New Collection</h1>
            <p className="text-[18px] font-montserrat leading-9.75 font-medium text-[#333333] w-117.5 pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <button className="bg-[#054C73] px-18 py-6.25 rounded-[50px] text-[#ffffff] font-bold text-base font-montserrat">BUY NOW</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
