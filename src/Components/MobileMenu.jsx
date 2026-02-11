import Link from "next/link";
import React from "react";
import logo from "../../public/images/logo.png";
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";

const MobileMenu = ({ toggle, setToggle }) => {
  return (
    <>
      <aside
        className={`h-screen w-8/10 fixed top-[-82px] duration-300 ease-in-out ${toggle ? "left-0" : "left-[-100%]"}  bg-white px-5 py-10 shadow-2xl mt-21`}
      >
        <div className="logo relative">
          <div className="absolute -right-1.25 -top-8.75 text-2xl font-extrabold text-[#054C73] shadow-md px-2 py-2 cursor-pointer">
            {/* <button onClick={()=>setToggle(false)}> */}
            <button>
              <RxCross1 />
            </button>
          </div>
          <Link href="/">
            <Image className="border-b-3 border-[#054C73]" src={logo} />
          </Link>
        </div>

        <nav>
          <ul className="flex flex-col gap-5 mt-10">
            <li className="menu">
              <Link href="">Home</Link>
            </li>
            <li className="menu">
              <Link href="">Services</Link>
            </li>
            <li className="menu">
              <Link href="">Doctors</Link>
            </li>
            <li className="menu">
              <Link href="">Products</Link>
            </li>
            <li className="menu">
              <Link href="">Gallery</Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default MobileMenu;
