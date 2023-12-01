import { useWindowSize } from "@uidotdev/usehooks";
import RightArrow from "../../../SVGComponents/RightArrow";
import { motion } from "framer-motion";
import DeFiDescItem from "./DeFiDescItem";

function DefiSection() {
  const window = useWindowSize();

  return (
    <section
      id="defi-section"
      className="flex flex-col justify-center py-20  1128:items-center bg-mainTextClr 1128:py-40"
    >
      <div className="flex flex-col px-8 768:px-14 768:flex-row 1128:w-[1050px] 1280:w-[1280px]">
        <div className="flex flex-col items-center text-center 768:items-start 768:text-start 768:w-full 768:mt-16 1128:mt-20 1280:mt-40">
          <div>
            <div>
              <motion.h2
                initial={{ opacity: 0, translateY: 20 }}
                viewport={{ amount: "all" }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-3 text-[15px] font-bold text-[#0058aa] 1280:mb-6 1280:text-lg"
              >
                CRYPTO.COM DEFI
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, translateY: 20 }}
                viewport={{ amount: "all" }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-10 text-3xl font-semibold text-black 768:mb-4 1128:text-4xl 1128:leading-tight 1128:mb-6 1280:text-5xl 1280:mb-12"
              >
                DeFi Made Simple
              </motion.h1>
            </div>
            <div className="flex flex-col gap-y-3 leading-6 text-[17px] mb-14 1128:mb-24 1280:text-2xl 1280:leading-9">
              <DeFiDescItem
                blackText="DeFi Wallet."
                grayText="Your Keys, Your Crypto."
              />

              <DeFiDescItem
                blackText="Defi Earn."
                grayText="No lock-up
                period and stable returns."
              />

              <DeFiDescItem
                blackText="Defi Swap."
                grayText="Swap DeFi coins and earn Triple Yield"
              />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            viewport={{ amount: "all" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            className="1128:flex-row-reverse 1128:flex 1128:gap-x-4"
          >
            <button className="flex items-center py-3 mb-20 text-lg font-semibold bg-[#0e213b] border px-10 1128:text-lg 1128:px-6 1128:py-3 rounded-full gap-x-4 text-mainTextClr">
              Explore DeFi Features <RightArrow />
            </button>
            {window.width >= 1128 && (
              <button className="py-3 mb-16 text-lg font-semibold border px-7 1128:text-lg 1128:px-6 1128:py-3 rounded-full text-[#00254F] border-[#00254F] h-min">
                Get DeFi Wallet
              </button>
            )}
          </motion.div>
        </div>
        <div className="flex 768:justify-end 1128:justify-normal ">
          <motion.img
            initial={{ opacity: 0, translateY: 20 }}
            viewport={{ amount: 0.4 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            src="public\images\homePage\defi.webp"
            alt="iPhone showing DeFi Earn page of the Crypto.com App"
            className="h-[75%] 768:mt-5 1128:h-auto 1128:w-[460px] 1280:w-[800px]"
          />
        </div>
      </div>
    </section>
  );
}

export default DefiSection;
