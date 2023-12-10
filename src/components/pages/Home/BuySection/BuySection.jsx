import { useWindowSize } from "@uidotdev/usehooks";
import { motion } from "framer-motion";
import CryptoTable from "./CryptoTable";
import GPay from "../../../SVGComponents/GPay";

function BuySection() {
  const window = useWindowSize();

  return (
    <section
      id="buy-section"
      className="flex justify-center px-6 py-32 1128:py-44 1128:pb-48 768:px-11"
    >
      <div>
        <motion.h1
          initial={{ opacity: 0, translateY: 20 }}
          viewport={{ amount: "all" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[32px] font-semibold leading-tight text-center 1128:text-5xl 1128:leading-tight mb-20 768:text-4xl"
        >
          Your crypto journey starts here.
        </motion.h1>
        <div className="flex flex-col justify-center gap-y-3">
          {/* 1 */}
          <div className="768:flex gap-y-3 gap-x-3">
            <div className="768:w-[335px] 1128:w-[450px] flex flex-col gap-y-3">
              <div className="flex justify-between px-6 pt-12 1128:pt-4 1128:pl-12 rounded-3xl blackBlueGradientBuyCrypto">
                <div className="flex flex-col 1128:justify-center translate-y-[-12px]">
                  <span className="mb-3 text-[22px] font-semibold text-blueClr ">
                    Buy crypto
                  </span>
                  <span className="text-[22px] font-semibold mt-[-15px] leading-[29px]">
                    Buy BTC, <br className="1128:hidden" /> ETH and <br /> other
                    crypto <br className="1128:hidden" /> easily
                    <br />
                    {window.width < 1128 && (
                      <span className="flex items-center ">
                        with{" "}
                        <div className="px-2.5 py-0.5 ml-2 border rounded-md mt-0.5">
                          <GPay width="50px" height="30px" />
                        </div>
                      </span>
                    )}
                    {window.width >= 1128 && "via bank transfer."}
                  </span>
                </div>

                <img
                  src="/images/homePage/phone-small.webp"
                  alt="Hand-held phone with Crypto.com App open to the buy bitcoin page"
                  className="h-56 1128:h-64"
                />
              </div>
              {/* 2 */}
              <div className="flex flex-col p-6 blackBlueGradientPriceAlerts rounded-3xl gap-y-6 1128:px-10">
                <div className="flex flex-col">
                  <span className="mb-3 text-[24px] font-semibold text-blueClr ">
                    Price Alerts
                  </span>
                  <span className="text-[22px] font-semibold mt-[-15px] leading-[29px]">
                    Be notified on BTC, ETH, XRP{" "}
                    <br className="hidden 1128:block" /> prices, and more.
                  </span>
                </div>
                <CryptoTable />
              </div>
            </div>
            {/* 3 */}
            <div className="flex flex-col gap-y-3 768:w-[335px] 1128:w-[450px] mt-3 768:mt-0">
              <div className="px-6 pt-6 blackBlueGradientRecurringBuy rounded-3xl 1128:px-10">
                <div className="flex flex-col mb-6">
                  <span className="mb-3 text-[24px] font-semibold text-blueClr ">
                    Recurring Buy
                  </span>
                  <span className="text-[22px] font-semibold mt-[-15px] leading-[29px]">
                    Grow your portfolio automatically with daily, weekly, or
                    monthly <br className="hidden 1128:block" /> trades.
                  </span>
                </div>
                <div className="flex justify-center mt-10 1128:mt-0">
                  <img
                    src="/images/homePage/phone-half.webp"
                    alt="Phone with Crypto.com App open on recurring buy page."
                    className="w-[293px] 1128:w-[370px]"
                  />
                </div>
              </div>
              {/* 4 */}
              <div className="flex justify-between py-6 pl-6 blackBlueGradientOnChainStaking 1128:pt-4 1128:pb-0 1128:pl-10 rounded-3xl">
                <div className="z-10 flex flex-col">
                  <span className="mb-3 text-[24px] w-[220px] font-semibold text-blueClr ">
                    On-chain Staking
                  </span>
                  <span className="text-[22px] w-[200px] font-semibold mt-[-15px] leading-[29px]">
                    Generate passive <br /> income by helping <br /> to secure{" "}
                    <br />
                    blockchains.
                  </span>
                </div>

                <img
                  src="/images/homePage/on-chain-staking.webp"
                  alt="On-chain staking coin."
                  className="z-0 w-auto h-40 ml-[-100px] 1128:w-auto 1128:h-48"
                />
              </div>
            </div>
          </div>
        </div>
        {/* 5 */}
        <div className="flex flex-col justify-center pt-3 mt-3 text-center 1128:pl-11 pb-14 768:pb-4 rounded-3xl bg-whiteClr 768:justify-start 768:text-start 1128:flex-row 1128:justify-between 1128:pr-16 ">
          <div className="px-10 1128:text-center 1128:flex 1128:flex-col 1128:justify-center">
            <p className="text-[#06112180] text-lg font-semibold ">
              Join our <span className="text-[#0577da]">80M+ users</span>
            </p>
            <span className="text-[#061121] 1128:text-4xl text-[32px] leading-10 768:px-0 font-semibold  ">
              Get started today
            </span>
          </div>
          {window.width >= 1128 && (
            <div className="flex items-center gap-x-6">
              <p className="text-[#061121] text-xl font-semibold text-end">
                <span className="text-[#0577da]">Scan</span> to download <br />
                the app
              </p>
              <img
                src="/images/homePage/QR-big.webp"
                alt="Download app QR code"
                className="w-[88px] h-auto"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default BuySection;
