"use client";
import React, { use, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import MobileMenu from "./MobileMenu";

const Hamburger = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="lg:hidden">
        <button onClick={()=> setToggle(true)}>
          <CiMenuFries className="text-4xl font-extrabold text-[#054C73] shadow-md px-2 py-2 cursor-pointer" />
        </button>
      </div>
      <MobileMenu toggle={toggle} setToggle={setToggle}/>
    </>
  );
};

export default Hamburger;
