import { useWindowSize } from "@uidotdev/usehooks";
import PolylineOne from "../../../SVGComponents/PolylineOne";
import PolylineOneLong from "../../../SVGComponents/PolylineOneLong";
import PolylineTwo from "../../../SVGComponents/PolylineTwo";
import PolylineTwoLong from "../../../SVGComponents/PolylineTwoLong";
import PolylineThree from "../../../SVGComponents/PolylineThree";
import PolylineThreeLong from "../../../SVGComponents/PolylineThreeLong";
import PolylineFour from "../../../SVGComponents/PolylineFour";
import PolylineFourLong from "../../../SVGComponents/PolylineFourLong";
import PolylineFive from "../../../SVGComponents/PolylineFive";
import PolylineFiveLong from "../../../SVGComponents/PolylineFiveLong";
import PriceItemSm from "./PriceItemSm";
import PriceHeader from "./PriceHeader";
import { motion } from "framer-motion";

function PriceSection() {
  const window = useWindowSize();

  return (
    <section
      id="price-section"
      className="px-6 mt-40 mb-20 1128:flex 1128:flex-col 1128:items-center 768:px-12"
    >
      <PriceHeader />
      <motion.div
        initial={{ opacity: 0, translateY: 20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}
      >
        {window.width < 768 && (
          <div className="grid grid-rows-5 ">
            {/* First */}
            <PriceItemSm
              cryptoName="Bitcoin"
              cryptoShort="BTC"
              cryptoPrice="$34,022.57"
              stockValueChange="+0.14%"
            />

            {/* Second */}

            <PriceItemSm
              cryptoName="Ethereum"
              cryptoShort="ETH"
              cryptoPrice="$1,783.65"
              stockValueChange="+0.39%"
            />

            {/* Third */}

            <PriceItemSm
              cryptoName="Cardano"
              cryptoShort="ADA"
              cryptoPrice="$0.289757"
              stockValueChange="+1.62%"
            />

            {/* Fourth */}
            <PriceItemSm
              cryptoName="Dogecoin"
              cryptoShort="DOGE"
              cryptoPrice="$0.070451"
              stockValueChange="+0.42%"
            />

            {/* Fifth */}
            <PriceItemSm
              cryptoName="Polkadot"
              cryptoShort="DOT"
              cryptoPrice="$4.16"
              stockValueChange="-0.71%"
            />
          </div>
        )}
        {window.width >= 768 && (
          <div className="grid grid-rows-5 ">
            {/* 1 */}

            <div className="flex justify-between items-center border-b border-b-[#f4f4f44d] py-3 1128:w-[1080px]">
              <div>
                <span className="text-[#d1d0d1] font-semibold text-lg mr-2 1128:text-2xl">
                  Bitcoin
                </span>
                <span className=" text-pClr 1128:text-xl">BTC</span>
              </div>

              <span className="text-[22px] font-semibold text-mainTextClr 1128:text-3xl 768:translate-x-12 1128:translate-x-16">
                $34,022.57
              </span>
              <span className="text-xs 1128:translate-x-24 768:translate-x-16 text-greenishBlue 1128:text-lg">
                +0.14%
              </span>

              <span className="text-xs 768:translate-x-14 1128:translate-x-16 1128:text-lg">
                $664,305,973,024.33
              </span>

              <div className="translate-x-8">
                {window.width < 1128 && <PolylineOne />}
                {window.width >= 1128 && <PolylineOneLong />}
              </div>

              <button className="text-[#0e213b] bg-mainTextClr h-max py-2 px-[26px] rounded-full font-semibold text-lg mt-1">
                Trade
              </button>
            </div>

            {/* 2 */}

            <div className="flex justify-between items-center border-b border-b-[#f4f4f44d] py-3 1128:w-[1080px]">
              <div>
                <span className="text-[#d1d0d1] font-semibold text-lg mr-2 1128:text-2xl">
                  Ethereum
                </span>
                <span className=" text-pClr 1128:text-xl">ETH</span>
              </div>

              <span className="text-[22px] font-semibold text-mainTextClr 1128:text-3xl 768:translate-x-[27px] 1128:translate-x-10">
                $1,783.65
              </span>
              <span className="text-xs 1128:translate-x-[94px] 768:translate-x-[63px] text-greenishBlue 1128:text-lg">
                +0.39%
              </span>

              <span className="text-xs 768:translate-x-[55px] 1128:translate-x-[60px] 1128:text-lg">
                $215,282,823,420.28
              </span>

              <div className="translate-x-8">
                {window.width < 1128 && <PolylineTwo />}
                {window.width >= 1128 && <PolylineTwoLong />}
              </div>

              <button className="text-[#0e213b] bg-mainTextClr h-max py-2 px-[26px] rounded-full font-semibold text-lg mt-1">
                Trade
              </button>
            </div>

            {/* 3 */}

            <div className="flex justify-between items-center border-b border-b-[#f4f4f44d] py-3 1128:w-[1080px]">
              <div>
                <span className="text-[#d1d0d1] font-semibold text-lg mr-2 1128:text-2xl">
                  Cardano
                </span>
                <span className=" text-pClr 1128:text-xl">ADA</span>
              </div>

              <span className="text-[22px] font-semibold text-mainTextClr 1128:text-3xl 768:translate-x-[35px] 1128:translate-x-10">
                $0.289757
              </span>
              <span className="text-xs 1128:translate-x-[86px] 768:translate-x-[57px] text-greenishBlue 1128:text-lg">
                +1.62%
              </span>

              <span className="text-xs 768:translate-x-[49px]  1128:text-lg">
                $10,411,737,064.80
              </span>

              <div className="translate-x-8">
                {window.width < 1128 && <PolylineThree />}
                {window.width >= 1128 && <PolylineThreeLong />}
              </div>

              <button className="text-[#0e213b] bg-mainTextClr h-max py-2 px-[26px] rounded-full font-semibold text-lg mt-1">
                Trade
              </button>
            </div>

            {/* 4 */}

            <div className="flex justify-between items-center border-b border-b-[#f4f4f44d] py-3 1128:w-[1080px]">
              <div>
                <span className="text-[#d1d0d1] font-semibold text-lg mr-2 1128:text-2xl">
                  Dogecoin
                </span>
                <span className="text-pClr 1128:text-xl">DOGE</span>
              </div>

              <span className="text-[22px] font-semibold text-mainTextClr 1128:text-3xl 768:translate-x-[18px] 1128:translate-x-10">
                $0.070451
              </span>
              <span className="text-xs 1128:translate-x-[71px] 768:translate-x-[46px] text-greenishBlue 1128:text-lg">
                +0.42%
              </span>

              <span className="text-xs 768:translate-x-[38px] 1128:text-lg">
                $9,748,110,535.23
              </span>

              <div className="translate-x-8">
                {window.width < 1128 && <PolylineFour />}
                {window.width >= 1128 && <PolylineFourLong />}
              </div>

              <button className="text-[#0e213b] bg-mainTextClr h-max py-2 px-[26px] rounded-full font-semibold text-lg mt-1">
                Trade
              </button>
            </div>

            {/* 5 */}

            <div className="flex justify-between items-center border-b border-b-[#f4f4f44d] py-3 1128:w-[1080px]">
              <div>
                <span className="text-[#d1d0d1] font-semibold text-lg mr-2 1128:text-2xl">
                  Polkadot
                </span>
                <span className=" text-pClr 1128:text-xl">DOT</span>
              </div>

              <span className="text-[22px] font-semibold text-mainTextClr 1128:text-3xl 768:translate-x-[22px] 1128:translate-x-10">
                $4.16
              </span>
              <span className="text-xs 1128:translate-x-[132px] 768:translate-x-[90px] text-greenishBlue 1128:text-lg">
                -0.71%
              </span>

              <span className="text-xs 768:translate-x-[72px] 1128:translate-x-20 1128:text-lg">
                $5,248,129,215.79
              </span>

              <div className="translate-x-8">
                {window.width < 1128 && <PolylineFive />}
                {window.width >= 1128 && <PolylineFiveLong />}
              </div>

              <button className="text-[#0e213b] bg-mainTextClr h-max py-2 px-[26px] rounded-full font-semibold text-lg mt-1">
                Trade
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}

export default PriceSection;
