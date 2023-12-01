import ChevronDown from "../../../SVGComponents/ChevronDown";
import Triangle from "../../../SVGComponents/Triangle";

function NavLearn({ isHovered, setIsHovered }) {
  return (
    <>
      <div
        className="relative"
        onClick={() => setIsHovered(3)}
        onMouseOver={() => setIsHovered(3)}
        onMouseOut={() => setIsHovered(0)}
      >
        <div className="flex items-center opacity-50 cursor-pointer gap-x-3 hover:opacity-100">
          <span>Learn</span>
          <div>
            <ChevronDown fill={"#fff"} height={"8px"} />
          </div>
        </div>

        {isHovered === 3 && (
          <div className="absolute ml-4 w-7 top-8">
            <Triangle />
          </div>
        )}
      </div>
      {isHovered === 3 && (
        <div
          className="absolute top-10 rounded-md bg-grayishWhite ml-[-80px] w-[820px] px-10 pt-8"
          onClick={() => setIsHovered(3)}
          onMouseOver={() => setIsHovered(3)}
          onMouseOut={() => setIsHovered(0)}
        >
          <div className="flex pb-7 gap-x-8">
            <h1 className="text-[32px] font-semibold text-grayClr pt-2 w-max">
              Updates
            </h1>
            <div>
              <div className="grid items-center grid-rows-2 ml-20 ">
                <div className="flex mb-4 mt-[-4px] gap-x-8">
                  <div className="px-4 border-l-2 border-l-navbarHoverCompClr h-min">
                    <h2 className="font-semibold text-mainClr">
                      What&apos;s Trending
                    </h2>
                    <p className="text-sm text-pClr">Read our top stories</p>
                  </div>

                  <div className="pl-4 ml-12 border-l-2 border-l-navbarHoverCompClr h-min">
                    <h2 className="font-semibold text-mainClr">Events</h2>
                    <p className="text-sm text-pClr">
                      Connect online and in person
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-[46px]">
                  <div className="px-4 border-l-2 border-l-navbarHoverCompClr h-min ">
                    <h2 className="font-semibold text-mainClr">Product News</h2>
                    <p className="text-sm text-pClr">
                      Our latest updates and <br /> launches
                    </p>
                  </div>

                  <div className="pl-4 ml-6 border-l-2 border-l-navbarHoverCompClr h-min">
                    <h2 className="font-semibold text-mainClr">
                      Market Updates
                    </h2>
                    <p className="text-sm text-pClr">
                      Track the market&apos;s latest <br /> developments
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[0.5px] bg-pClr"></div>

          <div className="flex py-8 gap-x-8">
            <h1 className="text-[32px] leading-tight font-semibold text-grayClr  w-min mr-6">
              Resources
            </h1>
            <div>
              <div className="grid items-center grid-rows-2 ml-6">
                <div className="flex mb-4 mt-[-4px] gap-x-8">
                  <div className="px-4 border-l-2 border-l-navbarHoverCompClr h-min">
                    <h2 className="font-semibold text-mainClr">University</h2>
                    <p className="text-sm text-pClr">
                      Build your crypto knowledge
                    </p>
                  </div>

                  <div className="pl-4 border-l-2 border-l-navbarHoverCompClr h-min">
                    <h2 className="font-semibold text-mainClr">
                      Research &Analysis
                    </h2>
                    <p className="text-sm text-pClr">
                      Get our industry-leading <br /> insights
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-[61px]">
                  <div className="px-4 border-l-2 border-l-navbarHoverCompClr h-min ">
                    <h2 className="font-semibold text-mainClr">
                      NFT Deep Dives
                    </h2>
                    <p className="text-sm text-pClr">
                      Get to know the creators and <br /> their work
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

export default NavLearn;
