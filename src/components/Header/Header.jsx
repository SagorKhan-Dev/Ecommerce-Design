import React, { useEffect, useRef, useState } from "react";
import Container from "../Layouts/Container";
import Flex from "../Layouts/Flex";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import Search from "./Search";
import Dropdown from "../Layouts/Dropdown";
import cart from "../../assets/cart.png";

const Header = () => {
  const categoryRef = useRef();
  const userRef = useRef();
  const cartRef = useRef();

  const [showCategory, setShowCategory] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (categoryRef.current.contains(e.target)) {
        setShowCategory(true);
      } else {
        setShowCategory(false);
      }

      if (userRef.current.contains(e.target)) {
        setShowUser(true);
      } else {
        setShowUser(false);
      }

      if (cartRef.current.contains(e.target)) {
        setShowCart(true);
      } else {
        setShowCart(false);
      }
    });
  }, []);

  return (
    <header className="bg-[#F5F5F3] font-dm">
      <Container>
        <Flex className="justify-between items-center py-6">
          {/* Shop by category part */}
          <Dropdown dropRef={categoryRef}>
            <Flex className="items-center gap-x-2">
              <FaBarsStaggered className="text-primary text-xl" />
              <p className="text-primary text-base font-medium">
                Shop by Category
              </p>
            </Flex>
            {showCategory && (
              <ul className="absolute top-40 w-80 bg-gray-900 text-[#BEBEBE]">
                <li className="py-4 px-5 border-b-2 border-primary hover:text-white hover:mx-4 ease-in duration-200 hover:font-bold">
                  Accessories
                </li>
                <li className="py-4 px-5 border-b-2 border-primary hover:text-white hover:mx-4 ease-in duration-200 hover:font-bold">
                  Furniture
                </li>
                <li className="py-4 px-5 border-b-2 border-primary hover:text-white hover:mx-4 ease-in duration-200 hover:font-bold">
                  Electronics
                </li>
                <li className="py-4 px-5 border-b-2 border-primary hover:text-white hover:mx-4 ease-in duration-200 hover:font-bold">
                  Clothes
                </li>
                <li className="py-4 px-5 border-b-2 border-primary hover:text-white hover:mx-4 ease-in duration-200 hover:font-bold">
                  Bags
                </li>
                <li className="py-4 px-5  hover:text-white hover:mx-4 ease-in duration-200 hover:font-bold">
                  Home appliances
                </li>
              </ul>
            )}
          </Dropdown>

          {/* Search input part */}
          <div className="relative">
            <Search
              className="py-4 px-6 md:w-[600px]"
              placeholder="Search Products"
            />
            <IoSearch className="absolute top-5 right-5 text-2xl" />
          </div>

          <Flex className=" items-center gap-x-7 relative">
            {/* User icon part */}
            <Dropdown dropRef={userRef}>
              <Flex className="items-center">
                <FaUser className="text-xl" />
                <IoMdArrowDropdown className="text-3xl" />
              </Flex>
              {showUser && (
                <ul className="absolute right-0 top-10 w-52 bg-gray-900 text-white text-center border-2">
                  <li className="py-4 px-5 hover:text-gray-900 border-b-2 hover:bg-white ease-in duration-200 hover:font-bold ">
                    <p>My Account</p>
                  </li>
                  <li className="py-4 px-5 hover:text-gray-900 hover:bg-white ease-in duration-200 hover:font-bold ">
                    <p>Logout</p>
                  </li>
                </ul>
              )}
            </Dropdown>

            {/* Shopping cart part */}
            <Dropdown dropRef={cartRef}>
              <div>
                <FaShoppingCart className="text-2xl" />
              </div>
              {showCart && (
                <div className="absolute right-0 top-10 w-96 ">
                  <Flex className="bg-[#e6e6e6] p-5 items-center justify-between">
                    <img src={cart} alt="" />
                    <div>
                      <p className="font-bold">Black Smart Watch</p>
                      <p className="font-bold mt-3">$44.00</p>
                    </div>
                    <ImCross />
                  </Flex>
                  <div className="p-5">
                    <p className="font-bold">
                      <span className="text-gray-400">Subtotal: </span> $44.00
                    </p>
                    <Flex className="justify-between mt-4">
                      <button className="font-bold py-4 px-10 border-black border-2">
                        View Cart
                      </button>
                      <button className="font-bold py-4 px-10 bg-black text-white border-2 border-black">
                        Checkout
                      </button>
                    </Flex>
                  </div>
                </div>
              )}
            </Dropdown>
          </Flex>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
