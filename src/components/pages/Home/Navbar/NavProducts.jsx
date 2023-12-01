import ChevronDown from "../../../SVGComponents/ChevronDown";
import Triangle from "../../../SVGComponents/Triangle";

function NavProducts({ isHovered, setIsHovered }) {
  return (
    <>
      <div
        className="relative"
        onMouseOver={() => setIsHovered(1)}
        onMouseOut={() => setIsHovered(0)}
      >
        <div className="flex items-center opacity-50 cursor-pointer gap-x-3 hover:opacity-100">
          <span>Products</span>
          <div>
            <ChevronDown fill={"#fff"} height={"8px"} />
          </div>
        </div>

        {isHovered === 1 && (
          <div className="absolute ml-8 w-7 top-8">
            <Triangle />
          </div>
        )}
      </div>

      {isHovered === 1 && (
        <div
          className="absolute top-10 rounded-md bg-grayishWhite ml-[-330px] w-[1128px] px-16"
          onMouseOver={() => setIsHovered(1)}
          onMouseOut={() => setIsHovered(0)}
        >
          {/* -------------------------------------------------------------------------- */
          /*                                 First half                                  */
          /* -------------------------------------------------------------------------- */}
          <div className="flex pb-7">
            <h1 className="text-[32px] font-semibold text-grayClr mt-9 w-max">
              Get Started
            </h1>
            <div>
              <div className="grid items-center grid-rows-3 ml-20 ">
                <div className="flex text-base font-bold text-navbarHoverCompClr ">
                  <h2>BUY AND SELL</h2>
                  <h2 className="ml-32">SPEND</h2>
                  <h2 className="ml-48">GROW</h2>
                </div>
                <div className="flex mb-4 mt-[-4px] gap-x-8">
                  <div className="px-4 border-l-2 border-l-navbarHoverCompClr h-min">
                    <h2 className="font-semibold text-mainClr">App</h2>
                    <p className="text-sm text-pClr">
                      Buy Bitcoin, Ethereum, and <br /> 250+ cryptocurrencies
                    </p>
                  </div>

                  <div className="pl-4 pr-12 border-l-2 border-l-navbarHoverCompClr h-min">
                    <h2 className="font-semibold text-mainClr">
                      Metal Visa Cards
                    </h2>
                    <p className="text-sm text-pClr">
                      Up to 5% back on all <br /> spending
                    </p>
                  </div>

                  <div className="px-4 border-l-2 border-l-navbarHoverCompClr h-min">
                    <h2 className="font-semibold text-mainClr">Crypto Earn</h2>
                    <p className="text-sm text-pClr">
                      Get the most out of your <br /> assets
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-[46px]">
                  <div className="px-4 border-l-2 border-l-navbarHoverCompClr h-min ">
                    <h2 className="font-semibold text-mainClr">
                      Crypto.com NFT
                    </h2>
                    <p className="text-sm text-pClr">
                      Own the culture you love
                    </p>
                  </div>

                  <div className="pl-4 pr-12 border-l-2 border-l-navbarHoverCompClr h-min">
                    <h2 className="font-semibold text-mainClr">
                      Crypto.com Pay
                    </h2>
                    <p className="text-sm text-pClr">
                      Spend your crypto <br /> anywhere
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[0.5px] bg-pClr"></div>
          {/* -------------------------------------------------------------------------- */
          /*                                 Second half                                */
          /* -------------------------------------------------------------------------- */}
          <div className="flex pb-7">
            <h1 className="text-[32px] leading-tight font-semibold text-grayClr mt-9 w-min mr-6">
              Advanced Trading
            </h1>
            <div>
              <div className="grid items-center grid-rows-4 ml-20 ">
                <div className="flex text-base font-bold text-navbarHoverCompClr ">
                  <h2>EXCHANGE</h2>
                  <h2 className="ml-[155px]">DEFI</h2>
                  <h2 className="ml-[214px]">ECOSYSTEM</h2>
                </div>
                <div className="flex mb-4 mt-[-4px] gap-x-8">
                  <div className="px-4 border-l-2 border-l-navbarHoverCompClr h-min">
                    <h2 className="font-semibold text-mainClr">
                      Exchange Home
                    </h2>
                    <p className="text-sm text-pClr">
                      Trade with low fees and <br /> deep liquidity
                    </p>
                  </div>

                  <div className="pl-4 pr-12 ml-6 border-l-2 border-l-navbarHoverCompClr h-min">
                    <h2 className="font-semibold text-mainClr">DeFi Wallet</h2>
                    <p className="text-sm text-pClr">
                      One app, multiple DeFi <br /> services
                    </p>
                  </div>

                  <div className="px-4 border-l-2 border-l-navbarHoverCompClr h-min">
                    <h2 className="font-semibold text-mainClr">
                      Pay for Business
                    </h2>
                    <p className="text-sm text-pClr">
                      Accept crypto safely and <br /> securely
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-[61px]">
                  <div className="px-4 border-l-2 border-l-navbarHoverCompClr h-min ">
                    <h2 className="font-semibold text-mainClr">
                      Margin Trading
                    </h2>
                    <p className="text-sm text-pClr">Get 3x leverage</p>
                  </div>

                  <div className="pl-4 pr-12 ml-6 border-l-2 border-l-navbarHoverCompClr h-min">
                    <h2 className="font-semibold text-mainClr">
                      Browser Extension
                    </h2>
                    <p className="text-sm text-pClr">
                      Access DeFi protocols on <br /> desktop
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-[23px]">
                  <div className="px-4 border-l-2 border-l-navbarHoverCompClr h-min ">
                    <h2 className="font-semibold text-mainClr">
                      Derivatives Trading
                    </h2>
                    <p className="text-sm text-pClr">
                      20x leverage, ultra low <br /> latency
                    </p>
                  </div>

                  <div className="pl-4 pr-12 ml-6 border-l-2 border-l-navbarHoverCompClr h-min">
                    <h2 className="font-semibold text-mainClr">
                      Desktop Wallet
                    </h2>
                    <p className="text-sm text-pClr">
                      Easily manage your DeFi <br /> tools
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

export default NavProducts;
