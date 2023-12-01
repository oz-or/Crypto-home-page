import RightArrow from "../../../SVGComponents/RightArrow";
import { motion } from "framer-motion";

function CardSection() {
  return (
    <section
      id="card-section"
      className="h-[642px] relative flex justify-center items-center 768:h-[682px] 1128:h-[1074px] "
    >
      <video
        autoPlay
        loop
        playsInline
        type="video/mp4"
        className="z-0 object-cover w-full h-full brightness-50"
      >
        <source src="public\videos\homePage\Cards-video.mp4" />
        Sorry, your browser doesn&apos;t support embedded videos.
      </video>

      <div className="absolute z-10 flex flex-col items-center  text-center">
        <motion.h2
          initial={{ opacity: 0, translateY: 20 }}
          viewport={{ amount: "all" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-3 text-[15px] font-bold text-blueClr 1128:text-lg "
        >
          CRYPTO.COM VISA CARD
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, translateY: 20 }}
          viewport={{ amount: "all" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[32px] leading-10 font-semibold 1128:text-5xl 1128:leading-tight  768:w-auto "
        >
          The only crypto card <br /> you need
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, translateY: 20 }}
          viewport={{ amount: "all" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#c9cedd] mt-9 mb-16 768:text-sm 768:mt-4 1128:text-xl 1128:mt-8"
        >
          Enjoy up to 5% back on all spending with your sleek, pure
          <br className="hidden 500:block 768:hidden" /> metal card. <br />
          No annual fees. Top-up with fiat or crypto.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, translateY: 20 }}
          viewport={{ amount: "all" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center py-3 mb-20 text-lg font-semibold border px-7 1128:text-lg 1128:px-6 1128:py-3 rounded-3xl gap-x-4 bg-mainTextClr text-[#0e213b]"
        >
          Choose Your Card <RightArrow />
        </motion.button>
      </div>
    </section>
  );
}

export default CardSection;
