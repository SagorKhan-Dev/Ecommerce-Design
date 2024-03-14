import React, { useEffect, useRef, useState } from "react";
import Container from "../Layouts/Container";
import Flex from "../Layouts/Flex";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import Search from "./Search";
import Dropdown from "../Layouts/Dropdown";

const Header = () => {
  const ref = useRef();
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (ref.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  return (
    <header className="bg-[#F5F5F3] font-dm">
      <Container>
        <Flex className="justify-between items-center py-6">
          <Dropdown dropRef={ref}>
            <Flex className="items-center gap-x-2">
              <FaBarsStaggered className="text-primary text-xl" />
              <p className="text-primary text-base font-medium">
                Shop by Category
              </p>
            </Flex>
            {show && (
              <ul className="absolute">
                <li>Hi</li>
                <li>Hi</li>
                <li>Hi</li>
                <li>Hi</li>
              </ul>
            )}
          </Dropdown>
          <div className="relative">
            <Search
              className="py-4 px-6 md:w-[600px]"
              placeholder="Search Products"
            />
            <IoSearch className="absolute top-5 right-5 text-2xl" />
          </div>
          <Flex className=" items-center gap-x-7">
            <Flex className="items-center">
              <FaUser className="text-xl" />
              <IoMdArrowDropdown className="text-3xl" />
            </Flex>
            <div>
              <FaShoppingCart className="text-2xl" />
            </div>
          </Flex>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
