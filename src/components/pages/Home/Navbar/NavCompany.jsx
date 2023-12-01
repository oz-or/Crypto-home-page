import ChevronDown from "../../../SVGComponents/ChevronDown";
import Triangle from "../../../SVGComponents/Triangle";

function NavCompany({ isHovered, setIsHovered }) {
  return (
    <>
      <div
        className="relative"
        onClick={() => setIsHovered(2)}
        onMouseOver={() => setIsHovered(2)}
        onMouseOut={() => setIsHovered(0)}
      >
        <div className="flex items-center opacity-50 cursor-pointer gap-x-3 hover:opacity-100">
          <span>Company</span>
          <div>
            <ChevronDown fill={"#fff"} height={"8px"} />
          </div>
        </div>

        {isHovered === 2 && (
          <div className="absolute ml-8 w-7 top-8">
            <Triangle />
          </div>
        )}
      </div>

      {isHovered === 2 && (
        <div
          className="absolute top-10 rounded-md bg-grayishWhite ml-[-90px] w-[820px] px-10 py-8 "
          onClick={() => setIsHovered(2)}
          onMouseOver={() => setIsHovered(2)}
          onMouseOut={() => setIsHovered(0)}
        >
          {/* -------------------------------------------------------------------------- */
          /*                                 First half                                  */
          /* -------------------------------------------------------------------------- */}
          <div className="flex gap-x-8 ">
            <h1 className="text-[32px] font-semibold text-grayClr mt-2 w-max">
              About us
            </h1>
            <div>
              <div className="grid grid-rows-3 ml-20 ">
                <div className="flex mb-4 mt-[-4px] gap-x-8 ">
                  <div className="px-4 border-l-2 border-l-navbarHoverCompClr h-min">
                    <h2 className="font-semibold text-mainClr">About</h2>
                    <p className="text-sm text-pClr">
                      Discover our vision, mission <br /> and team
                    </p>
                  </div>

                  <div className="px-4 border-l-2 border-l-navbarHoverCompClr h-min">
                    <h2 className="font-semibold text-mainClr">Support</h2>
                    <p className="text-sm text-pClr">Get help 24/7</p>
                  </div>
                </div>

                <div className="flex mb-4 mt-[-4px] gap-x-[90px]">
                  <div className="px-4 border-l-2 border-l-navbarHoverCompClr h-min">
                    <h2 className="font-semibold text-mainClr">Careers</h2>
                    <p className="text-sm text-pClr">Build Web3 with us</p>
                  </div>

                  <div className="px-4 border-l-2 border-l-navbarHoverCompClr h-min">
                    <h2 className="font-semibold text-mainClr">Security</h2>
                    <p className="text-sm text-pClr">
                      Learn about our industry-
                      <br />
                      leading protection
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-[69px]">
                  <div className="px-4 border-l-2 border-l-navbarHoverCompClr h-min ">
                    <h2 className="font-semibold text-mainClr">News</h2>
                    <p className="text-sm text-pClr">
                      Company and product <br /> updates
                    </p>
                  </div>

                  <div className="pl-4 pr-12 border-l-2 border-l-navbarHoverCompClr h-min">
                    <h2 className="font-semibold text-mainClr">Partners</h2>
                    <p className="text-sm text-pClr">
                      Explore our world class <br /> portfolio of partners
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavCompany;
