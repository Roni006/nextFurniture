import Container from "./Container";
import Image from "next/image";
import React from "react";
import logo from "../../public/images/logo.png";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <section className="bg-white py-10 shadow-md">
        <Container>
          <div className="flex justify-between items-center">
            <div className="logo">
              <Link href="/">
                <Image src={logo} />
              </Link>
            </div>
            <div className="menus">
              <nav>
                <ul className="flex items-center gap-15">
                  <li className="menu">
                    <Link href=''>Home</Link>
                  </li>
                  <li className='menu'>
                    <Link href=''>Services</Link>
                  </li>
                  <li className='menu'>
                    <Link href=''>Doctors</Link>
                  </li>
                  <li className='menu'>
                    <Link href=''>Products</Link>
                  </li>
                  <li className='menu'>
                    <Link href=''>Gallery</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Navbar;
