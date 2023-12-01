import ChartUp from "../../../SVGComponents/ChartUp";
import { motion } from "framer-motion";

function PriceHeader() {
  return (
    <motion.div className="flex flex-col items-center text-center ">
      <motion.h2
        initial={{ opacity: 0, translateY: 20 }}
        viewport={{ amount: "all" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-3 text-sm font-bold text-blueClr 1128:text-lg "
      >
        CRYPTO.COM PRICE
      </motion.h2>
      <motion.h1
        initial={{ opacity: 0, translateY: 20 }}
        viewport={{ amount: "all" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}
        className="text-[39px] leading-tight font-semibold 1128:text-6xl 1128:leading-tight w-[320px] 768:w-auto"
      >
        Buy Bitcoin, Ethereum, and <br /> 250+ cryptocurrencies.
      </motion.h1>
      <motion.button
        initial={{ opacity: 0, translateY: 20 }}
        viewport={{ amount: "all" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center py-3 mt-8 mb-20 text-lg font-semibold border px-7 1128:text-lg 1128:px-6 1128:py-3 rounded-3xl gap-x-4"
      >
        Check Crypto Prices <ChartUp />
      </motion.button>
    </motion.div>
  );
}

export default PriceHeader;
