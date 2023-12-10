import RightArrow from "../../../SVGComponents/RightArrow";
import { motion } from "framer-motion";

function EarnSection() {
  return (
    <section
      id="earn-section"
      className="flex items-center justify-center py-20 1128:py-40"
    >
      <div className="flex flex-col 768:flex-row-reverse 768:justify-between  1128:w-[1128px]">
        <div className="z-20 flex flex-col items-center mx-4  text-center 768:mt-[56px] 768:text-start 768:items-start 1128:mt-28">
          <motion.h2
            initial={{ opacity: 0, translateY: 20 }}
            viewport={{ amount: "all" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-3 text-[15px] font-bold text-blueClr 1128:text-lg 768:mb-1"
          >
            CRYPTO EARN
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, translateY: 20 }}
            viewport={{ amount: "all" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[31px] leading-10 font-semibold 1128:text-5xl 1128:leading-tight 768:w-auto px-6 768:pl-0"
          >
            Get the most out of your assets, safely
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, translateY: 20 }}
            viewport={{ amount: "all" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#c9cedd] 768:mt-4 mt-7 mb-16 768:text-[14px] mx-6 1128:text-xl 1128:mt-8 768:ml-0 768:mb-9 1128:mb-16"
          >
            Choose from 21+ cryptocurrencies including Bitcoin and stablecoins.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, translateY: 20 }}
            viewport={{ amount: "all" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center py-3 mb-16 text-lg font-semibold border px-7 1128:text-lg 1128:px-6 1128:py-3 rounded-3xl gap-x-4 "
          >
            Calculate Rewards <RightArrow />
          </motion.button>
        </div>
        <div className="relative flex justify-center w-full h-full 768:ml-[-10%]">
          <div className="relative flex flex-col justify-center max-w-[250px] 768:max-w-[300px] w-[58%] 768:w-[46.5%] 1128:w-[360px] 1128:max-w-[360px]">
            <div className="absolute top-20 bottom-40 right-0 left-0 background z-0 scale-[155%] "></div>
            <motion.img
              initial={{ opacity: 0, translateY: 20 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5 }}
              src="/images/homePage/earn-phone.webp"
              alt="iPhone showing Crypto Earn page of the Crypto.com App"
              className="z-10"
            />
          </div>

          <div className="absolute flex justify-center w-[59%] 768:w-[46.5%] max-w-[250px] 768:max-w-[300px] 1128:w-[360px] 1128:max-w-[360px]">
            <motion.img
              initial={{ opacity: 0, translateY: 20 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5 }}
              src="/images/homePage/earn-notif-1.webp"
              alt="Pop-up notification from the Crypto.com App that tells you your staking rewards"
              className="z-10 object-contain mt-4 1128:mt-6 ml-[56%]"
            />
          </div>

          <div className="absolute flex justify-center w-[59%] max-w-[250px] 768:w-[46.5%] 768:max-w-[300px] 1128:w-[360px] 1128:max-w-[360px]">
            <motion.img
              initial={{ opacity: 0, translateY: 20 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5 }}
              src="/images/homePage/earn-notif-2.webp"
              alt="Pop-up notification from the Crypto.com App that tells you your staking rewards"
              className="z-10 object-contain mt-[41%] 1128:mt-[145px] ml-[65%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default EarnSection;
