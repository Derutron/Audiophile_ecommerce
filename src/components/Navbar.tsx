import React, { useState } from "react";
import Hamburger from "../images/shared/tablet/icon-hamburger.svg";
import Logo from "../images/shared/audiophile-logo.svg";
import Cart from "../images/shared/icon-cart.svg";
import Close from "../images/shared/tablet/icon-close-menu.svg";
import { Link } from "react-router-dom";
import { menuListArray } from "../components/menuListArray";
import { motion } from "framer-motion";

interface Props {
  mobileMenu: boolean;
  setMobileMenu: (e: boolean) => void;
  activeMenuRoute: number | null;
  setActiveMenuRoute: (e: number) => void;
  productAmount: number;
  addToCart: boolean;
  setAddToCart: (e: boolean) => void; 
  cartOverlay: boolean;
  setCartOverlay: (e: boolean) => void;
  checkoutRoute: boolean;
  setCheckoutRoute: (e: boolean) => void;
}


const Navbar: React.FC<Props> = ({
  mobileMenu,
  setMobileMenu,
  activeMenuRoute,
  setActiveMenuRoute,
  productAmount,
  addToCart,
  cartOverlay,
  setCartOverlay,
}: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
    setIsDropdownOpen(false);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
    setIsDropdownOpen(false);
  };

  return (
    <div className="bg-black">
      <motion.div
        initial={{ opacity: 0, y: -500 }}
        animate={{ opacity: 3, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="lg:max-w-[1440px] lg:sticky lg:top-0 lg:right-0 lg:left-0 max-w-full z-[100] flex lg:mx-auto justify-between items-center bg-black px-6 md:px-[39px] lg:px-[165px] py-8 lg:py-9">
          {mobileMenu ? (
            <img
              onClick={handleMobileMenuToggle}
              src={Close}
              alt="Close"
              className="lg:hidden cursor-pointer z-[100]"
            />
          ) : (
            <img
              onClick={handleMobileMenuToggle}
              src={Hamburger}
              alt="Hamburger"
              className="lg:hidden cursor-pointer z-[100]"
            />
          )}
          {/* MobileMenu starts here */}
          {mobileMenu && (
            <div className="absolute z-[100] top-0 left-0 right-0 bg-black w-full h-[auto] lg:hidden">
              <img
                onClick={handleMobileMenuToggle}
                src={Close}
                alt="Close"
                className="lg:hidden absolute top-9 left-6 cursor-pointer z-[100]"
              />
              <div className="w-full h-[auto] bg-black mt-[9px] pt-[80px] md:pt-[auto] md:gap-20 md:px-5 flex flex-col md:flex-row">
                <div className="mx-auto">
                  <ul className="text-white text-[15px] font-bold tracking-[1px] uppercase mb-4 space-y-2 mx-auto">
                    {menuListArray.map((item, index) => (
                      <li
                      key={item.id}
                      className={`${
                        index === activeMenuRoute ? "text-orange" : ""
                      } cursor-pointer hover:text-orange transition-all duration-400 flex justify-center`}
                      onClick={() => {
                        setActiveMenuRoute(index);
                        handleDropdownToggle();
                        setCartOverlay(false);
                        closeMobileMenu();
                      }}
                    >
                      <Link to={item.to}>{item.title}</Link>
                    </li>
                    
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
          {/* MobileMenu ends here */}
          <Link
            to={"/"}
            onClick={() => {
              setActiveMenuRoute(0);
              handleDropdownToggle();
              setCartOverlay(false);
              closeMobileMenu();
            }}
            className="z-[100]"
          >
            <img src={Logo} alt="Logo" className="cursor-pointer z-50" />
          </Link>
          <ul className="text-white z-[100] hidden lg:flex items-center gap-8">
            {menuListArray.map((item, index) => (
              <li
                onClick={() => {
                  setActiveMenuRoute(index);
                  handleDropdownToggle();
                  setCartOverlay(false);
                  closeMobileMenu();
                }}
                key={item.id}
                className={`${
                  index === activeMenuRoute ? "text-orange" : ""
                } text-[13px] font-bold leading-6 tracking-[2px] uppercase cursor-pointer hover:text-orange transition-all duration-400`}
              >
                <Link to={item.to}>{item.title}</Link>
              </li>
            ))}
          </ul>
          <div>
            <div
              className="relative z-[100] cursor-pointer"
              onClick={() => {
                setCartOverlay(!cartOverlay);
                closeMobileMenu();
              }}
            >
              <img
                src={Cart}
                alt="Cart"
                className="cursor-pointer z-30 relative"
              />
              {productAmount > 0 && addToCart === true ? (
                <div className="absolute -top-4 left-1 bg-orange text-whiteSmoke w-6 h-4 rounded-full flex justify-center font-bold items-center text-sm text-center">
                  <p>{productAmount}</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="md:px-[39px] lg:px-[165px] lg:max-w-[1440px] lg:mx-auto">
          <div className="w-full bg-white h-[1px] opacity-20"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
