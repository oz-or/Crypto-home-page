import { motion } from "framer-motion";

function DeFiDescItem({ blackText, grayText }) {
  return (
    <motion.p
      initial={{ opacity: 0, translateY: 20 }}
      viewport={{ amount: "all" }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
      className="font-semibold text-pClr"
    >
      <span className="pr-2 text-black">{blackText}</span> {grayText}
    </motion.p>
  );
}

export default DeFiDescItem;
