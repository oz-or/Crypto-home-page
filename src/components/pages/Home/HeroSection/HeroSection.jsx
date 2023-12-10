import { useWindowSize } from "@uidotdev/usehooks";
import CheckMark from "../../../SVGComponents/CheckMark";
import QRCode from "../../../SVGComponents/QRCode";
import { Link } from "react-router-dom";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

function HeroSection() {
  const window = useWindowSize();

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const scrollX = useTransform(scrollYProgress, [0.15, 0.75], [44.8811, 0]);

  const QRCodeValues = window.width < 1128 ? "18px" : "24px";

  return (
    <motion.section
      id="hero-section"
      className="relative flex flex-col items-center perspective-class"
      ref={targetRef}
    >
      <div className="absolute top-0 w-full linear-gradient-hero h-[508px] 1128:h-[663px] z-10"></div>
      <video
        autoPlay
        loop
        playsInline
        muted
        type="video/mp4"
        className="h-[508px] 1128:h-[575px] w-full object-cover brightness-[30%] mb-32 "
      >
        <source src="/videos/homePage/Hero_Video.mp4" />
        Sorry, your browser doesn&apos;t support embedded videos.
      </video>

      <div className="flex flex-col items-center w-full h-full 768:text-center ">
        <div className="absolute top-0 w-full py-[118px] 1128:pt-44 1128:w-[996px] px-6 768:w-[544px] flex flex-col justify-center z-20">
          <motion.h1
            initial={{ opacity: 0, translateY: 20 }}
            viewport={{ amount: "all" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[40px] leading-[1.2] font-semibold 1128:text-6xl 1128:leading-tight"
          >
            The World&apos;s Leading Cryptocurrency Platform
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, translateY: 20 }}
            viewport={{ amount: "all" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6 mb-6 text-[24px] leading-[34px] font-semibold 768:text-[27px]"
          >
            Buy Bitcoin, Ethereum, and all your favourite crypto
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            viewport={{ amount: "all" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            className="grid font-medium gap-y-1 768:w-[589px] 768:ml-[-50px] 1128:ml-[100px] 1128:w-full 1128:text-[17px]"
          >
            <div className="flex gap-x-4 text-start">
              <div className="p-1 rounded-full bg-blueClr w-min h-min">
                <CheckMark height={"12px"} width={"12px"} />
              </div>
              <p className="text-[#D1D0D1]">
                Trusted by more than{" "}
                <span className="text-blueClr">80M users</span> world-wide
              </p>
            </div>
            <div className="flex gap-x-4 text-start">
              <div className="p-1 rounded-full bg-blueClr w-min h-min">
                <CheckMark height={"12px"} width={"12px"} />
              </div>
              <p className="text-[#D1D0D1]">
                Leader in{" "}
                <span className="text-blueClr">regulatory compliance</span> and{" "}
                <span className="text-blueClr">security certifications</span>
              </p>
            </div>
            <div className="flex gap-x-4 text-start">
              <div className="p-1 rounded-full bg-blueClr w-min h-min">
                <CheckMark height={"12px"} width={"12px"} />
              </div>
              <p className="text-[#D1D0D1] ">
                The industry&apos;s most comprehensive{" "}
                <span className="text-blueClr">insurance coverage</span> and{" "}
                <span className="text-blueClr">verified proof of reserves</span>
              </p>
            </div>
          </motion.div>

          {window.width >= 768 && (
            <div className="flex justify-center mt-8">
              <Link
                to="https://crypto.onelink.me/veNW"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center self-center px-4 py-2 font-semibold border 1128:text-lg 1128:px-6 1128:py-3 rounded-3xl gap-x-2">
                  Download App
                  <QRCode height={QRCodeValues} width={QRCodeValues} />
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <motion.div
        className="relative flex justify-center origin-[50%_0px]  w-[210px] 768:w-[290px] 1128:w-[400px]"
        style={{ rotateX: scrollX }}
      >
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-behindPhoneGradient z-0 1128:right-auto 1128:left-auto 1128:w-[1100px]"></div>
        <motion.img
          src="../../../../../images/homePage/phone-main.webp"
          alt="The Crypto.com App with various coin values on the wallet page"
          className="w-[210px] 768:w-[290px] 1128:w-[455px] z-10 "
        />
      </motion.div>
    </motion.section>
  );
}

export default HeroSection;
