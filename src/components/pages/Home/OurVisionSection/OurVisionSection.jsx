import CountUp from "react-countup";
import RightArrow from "../../../SVGComponents/RightArrow";
import { motion } from "framer-motion";

function OurVisionSection() {
  return (
    <section
      id="ourVision-section"
      className="flex justify-center py-20 1128:py-40 "
    >
      <div className="flex flex-col items-center mx-6 text-center 1128:w-[1128px]">
        <div>
          <motion.h2
            initial={{ opacity: 0, translateY: 20 }}
            viewport={{ amount: "all" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-3 text-[15px] font-bold text-blueClr 1128:text-lg 768:mb-1"
          >
            OUR VISION
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, translateY: 20 }}
            viewport={{ amount: "all" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[31px] leading-10 font-semibold 1128:text-5xl 1128:leading-tight 768:w-auto px-6 "
          >
            Cryptocurrency <br className="hidden 768:block 1128:hidden" /> in
            <br className="hidden 768:block" /> Every Wallet™
          </motion.h1>
        </div>
        <motion.img
          initial={{ opacity: 0, translateY: 20 }}
          viewport={{ amount: 0.4 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
          src="../../../../../public/images/homePage/crypto-com-logo.webp"
          alt="Logo of Crypto.com"
          className="my-3 w-[336px] 768:w-[464px] 768:mb-0 1128:w-[581px]"
        />
        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          viewport={{ amount: "all" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-around w-full mb-12 1128:mb-16"
        >
          <div className="flex flex-col p-4 gap-y-2 1128:gap-y-6">
            <span className="font-bold 1128:text-2xl 1128:font-semibold">
              Founded in
            </span>
            <span className="text-3xl font-semibold text-blueClr 1128:text-5xl">
              <CountUp
                start={0}
                end={2016}
                duration={1}
                separator=""
                enableScrollSpy={true}
                scrollSpyDelay={100}
              />
            </span>
          </div>
          <div className="flex flex-col p-4 gap-y-2 1128:gap-y-6">
            <span className="font-bold 1128:text-2xl 1128:font-semibold">
              Users
            </span>
            <span className="text-3xl font-semibold text-blueClr 1128:text-5xl">
              <CountUp
                start={0}
                end={80}
                suffix="M"
                duration={1}
                enableScrollSpy={true}
                scrollSpyDelay={100}
              />
            </span>
          </div>
        </motion.div>
        <motion.button
          initial={{ opacity: 0, translateY: 20 }}
          viewport={{ amount: "all" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center py-3 mb-16 text-lg font-semibold border rounded-full px-7 1128:text-lg 1128:px-6 1128:py-3 gap-x-4 "
        >
          About Us <RightArrow />
        </motion.button>
      </div>
    </section>
  );
}

export default OurVisionSection;
