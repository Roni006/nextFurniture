import React from "react";
import Image from "next/image";
import Container from "../Components/Container";
import truck from "../../public/truck.svg";
import time from "../../public/time.svg";
import shield from "../../public/shield.svg";

const Support = () => {
  const service = [
    {
      img: truck,
      title: "Free Delivery",
      desc: "Lorem ipsum dolor sit amet.",
    },
    {
      img: time,
      title: "Support 24/7",
      desc: "Lorem ipsum dolor sit amet.",
    },
    {
      img: shield,
      title: "100% Authentic",
      desc: "Lorem ipsum dolor sit amet.",
    },
  ];
  return (
    <>
      <section className="bg-[#F2F5FF] py-8   ">
        <Container>
          <div className="flex items-center justify-between">
            {service.map((item, index) => (
              <div className="flex items-center gap-7" key={index}>
                <Image src={item.img} className="w-[50px]" />
                <div className="">
                  <h2 className="font-semibold text-[24px] font-montserrat text-[#131313] ">
                    {item.title}
                  </h2>
                  <p className="font-montserrat text-base font-normal text-[#131313]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Support;
