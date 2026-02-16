import React from "react";
import Container from "../Components/Container";
import work1 from "../../public/work/work1.png";
import work2 from "../../public/work/work2.png";
import work3 from "../../public/work/work3.png";
import Image from "next/image";

const Work = () => {
  const data = [
    {
      img: work1,
      num: "1.",
      title: "Purchase Securely",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: work2,
      num: "2.",
      title: "Ships From Warehouse",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: work3,
      num: "3.",
      title: "Style Your Room",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  return (
    <>
      <section className="py-15">
        <Container>
          <div className="text-center">
            <h2 className="font-bold font-montserrat text-[32px] text-[#333333] pb-4">
              How It Works
            </h2>
            <p className="text-base font-montserrat font-normal text-[#666666]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex items-center justify-center gap-10 pt-12.5">
            {data.map((item, index) => (
              <div className="flex flex-col items-center justify-center relative" key={index}>
                <Image className="rounded-md w-full" src={item.img} />
                <div className="absolute top-82 left-37.5 bg-white h-22.5 w-22.5 p-3.75 shadow-md flex justify-center items-center rounded-full ">
                  <span className="text-[24px] font-bold font-montserrat text-white bg-black h-15 w-15 py-5 px-5 rounded-full flex justify-center items-center">
                   {item.num}
                  </span>
                </div>
                <span className="font-semibold font-montserrat text-[24px] text-[#131313] pt-7.5 mt-7.5">
                  {item.title}
                </span>
                <p className="font-normal font-montserrat text-base leading-7 text-[#666666] w-90 text-center ">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Work;
