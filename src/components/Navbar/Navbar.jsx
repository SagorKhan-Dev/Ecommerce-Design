import React from "react";
import logo from "../../assets/logo.png";
import Flex from "../Layouts/Flex";
import Container from "../Layouts/Container";
const Navbar = () => {
  return (
    <nav>
      <Container>
        <Flex className="justify-between items-center py-8">
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <ul className="flex gap-x-10 font-dm">
              <li className=" text-xl text-primary font-bold hover:text-primary hover:font-bold duration-500 ease-in-out">
                Home
              </li>
              <li className=" text-xl text-[#767676] font-bold hover:text-primary hover:font-bold duration-500 ease-in-out">
                Shop
              </li>
              <li className=" text-xl text-[#767676] font-bold hover:text-primary hover:font-bold duration-500 ease-in-out">
                About
              </li>
              <li className=" text-xl text-[#767676] font-bold hover:text-primary hover:font-bold duration-500 ease-in-out">
                Contacts
              </li>
              <li className=" text-xl text-[#767676] font-bold hover:text-primary hover:font-bold duration-500 ease-in-out">
                Journal
              </li>
            </ul>
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
