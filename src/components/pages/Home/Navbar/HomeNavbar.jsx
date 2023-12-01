import { useWindowSize } from "@uidotdev/usehooks";
import ChevronDown from "../../../SVGComponents/ChevronDown";
import { useState } from "react";
import { Link } from "react-router-dom";
import Triangle from "../../../SVGComponents/Triangle";
import NavProducts from "./NavProducts";
import NavCompany from "./NavCompany";
import NavLearn from "./NavLearn";

function HomeNavbar({ toggleIsOpen, isOpen }) {
  //TODO: Separate the navbar into smaller components
  //TODO: Add the transition effects

  const window = useWindowSize();

  const [isHovered, setIsHovered] = useState(0);

  return (
    <div className="sticky top-0 z-50 1128:flex 1128:justify-center bg-mainClr">
      <div className="flex items-center justify-between px-8 py-2 768:px-16 1128:w-[1128px] 1128:px-6 1128:py-4">
        <div className="flex items-center">
          <Link to="/">
            <img
              src="../../../../../images/homePage/logo-nav.webp"
              alt="Crypto.com logo"
              className="w-[147px]"
            />
          </Link>
          <div className="w-[1px] h-5 bg-white opacity-50 mx-2"></div>
          <img
            src="../../../../../images/homePage/eu-flag.webp"
            alt="EU flag"
            className="h-6"
          />
        </div>
        {window.width >= 1128 && (
          <div className="flex items-center text-lg font-medium gap-x-6 1128:mr-[-75px] relative">
            <span className="opacity-50 cursor-pointer hover:opacity-100">
              NFT
            </span>
            <span className="opacity-50 cursor-pointer hover:opacity-100">
              Prices
            </span>

            <NavProducts isHovered={isHovered} setIsHovered={setIsHovered} />

            <NavCompany isHovered={isHovered} setIsHovered={setIsHovered} />

            <NavLearn isHovered={isHovered} setIsHovered={setIsHovered} />
          </div>
        )}

        <div className="flex gap-x-6 768:gap-x-10">
          <Link to="https://play.google.com/store/apps/details?id=co.mona.android">
            <button className=" p-[10px] border border-blueClr rounded flex gap-x-3">
              <img
                src="../../../../../images/homePage/play_store.svg"
                alt="Play Store"
              />
              {window.width > 767 && (
                <span className="font-bold">Download</span>
              )}
            </button>
          </Link>
          {window.width <= 1127 ? (
            <img
              src="../../../../../images/homePage/hamburger-menu.svg"
              alt="Menu"
              onClick={() => toggleIsOpen()}
            />
          ) : (
            <div className="flex items-center gap-x-1">
              <img
                src="../../../../../images/homePage/geolocation-white.svg"
                alt="Language selector"
                className="h-[22px]"
              />
              <span className="font-bold">English</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeNavbar;
