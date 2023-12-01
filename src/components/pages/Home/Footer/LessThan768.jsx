import ChevronDown from "../../../SVGComponents/ChevronDown";
import SocialMediaIcon from "./SocialMediaIcon";

function LessThan768({ whichIsOpen, setWhichIsOpen }) {
  return (
    window.width < 768 && (
      <div>
        {/*  */}

        <div>
          <img
            src="../../../../../public/images/homePage/logo-footer.svg"
            alt="CDC logo"
            className="h-[30px] mb-12"
          />
        </div>
        <div>
          {/* 1 */}
          <div
            className="flex items-center justify-between text-2xl font-semibold text-[#eaeef4]  h-max py-4"
            onClick={() =>
              whichIsOpen !== 1 ? setWhichIsOpen(1) : setWhichIsOpen(0)
            }
          >
            Products
            <div>
              {whichIsOpen !== 1 && <ChevronDown height="9px" fill="#eaeef4" />}
              {whichIsOpen === 1 && (
                <div>
                  <ChevronDown height="9px" fill="#eaeef4" />
                </div>
              )}
            </div>
          </div>
          {whichIsOpen === 1 && (
            <div className="text-[#c9cfdd] pt-2 pb-9 leading-6 pl-4 flex flex-col gap-y-6">
              <div>App</div>

              <div>Visa Card</div>

              <div>Exchange</div>

              <div>DeFi Wallet</div>

              <div>NFT</div>
            </div>
          )}
          {/* 2 */}
          <div
            className="flex items-center justify-between text-2xl font-semibold text-[#eaeef4]  h-max py-4"
            onClick={() =>
              whichIsOpen !== 2 ? setWhichIsOpen(2) : setWhichIsOpen(0)
            }
          >
            Features
            <div>
              {whichIsOpen !== 2 && <ChevronDown height="9px" fill="#eaeef4" />}
              {whichIsOpen === 2 && (
                <div>
                  <ChevronDown height="9px" fill="#eaeef4" />
                </div>
              )}
            </div>
          </div>
          {whichIsOpen === 2 && (
            <div className="text-[#c9cfdd] pt-2 pb-9 leading-6 pl-4 flex flex-col gap-y-6">
              <div>Buy and Sell</div>

              <div>Crypto Earn</div>

              <div>Crypto.com Pay</div>

              <div>Pay for Business</div>

              <div>Margin Trading</div>

              <div>Derivatives Trading</div>

              <div>Supercharger</div>

              <div>Trading Arena</div>
            </div>
          )}
          {/* 3 */}
          <div
            className="flex items-center justify-between text-2xl font-semibold text-[#eaeef4]  h-max py-4"
            onClick={() =>
              whichIsOpen !== 3 ? setWhichIsOpen(3) : setWhichIsOpen(0)
            }
          >
            Learn
            <div>
              {whichIsOpen !== 3 && <ChevronDown height="9px" fill="#eaeef4" />}
              {whichIsOpen === 3 && (
                <div>
                  <ChevronDown height="9px" fill="#eaeef4" />
                </div>
              )}
            </div>
          </div>
          {whichIsOpen === 3 && (
            <div className="text-[#c9cfdd] pt-2 pb-9 leading-6 pl-4 flex flex-col gap-y-6">
              <div>University</div>

              <div>Research & Analysis</div>

              <div>What is Bitcoin?</div>

              <div>What is Ethereum?</div>

              <div>What is Blockchain?</div>

              <div>How to buy Bitcoin?</div>

              <div>How to buy Ethereum?</div>

              <div>How to buy Crypto</div>

              <div>What is Crypto?</div>

              <div>What is DeFi?</div>
            </div>
          )}
          {/* 4 */}
          <div
            className="flex items-center justify-between text-2xl font-semibold text-[#eaeef4]  h-max py-4"
            onClick={() =>
              whichIsOpen !== 4 ? setWhichIsOpen(4) : setWhichIsOpen(0)
            }
          >
            Prices
            <div>
              {whichIsOpen !== 4 && <ChevronDown height="9px" fill="#eaeef4" />}
              {whichIsOpen === 4 && (
                <div>
                  <ChevronDown height="9px" fill="#eaeef4" />
                </div>
              )}
            </div>
          </div>
          {whichIsOpen === 4 && (
            <div className="text-[#c9cfdd] pt-2 pb-9 leading-6 pl-4 flex flex-col gap-y-6">
              <div>Crypto Prices</div>

              <div>Bitcoin Price</div>

              <div>Ethereum Price</div>

              <div>Site Widgets</div>
            </div>
          )}
          {/* 5 */}
          <div
            className="flex items-center justify-between text-2xl font-semibold text-[#eaeef4]  h-max py-4"
            onClick={() =>
              whichIsOpen !== 5 ? setWhichIsOpen(5) : setWhichIsOpen(0)
            }
          >
            News
            <div>
              {whichIsOpen !== 5 && <ChevronDown height="9px" fill="#eaeef4" />}
              {whichIsOpen === 5 && (
                <div>
                  <ChevronDown height="9px" fill="#eaeef4" />
                </div>
              )}
            </div>
          </div>
          {whichIsOpen === 5 && (
            <div className="text-[#c9cfdd] pt-2 pb-9 leading-6 pl-4 flex flex-col gap-y-6">
              <div>What&apos;s Trending</div>

              <div>Market Updates</div>

              <div>Product News</div>

              <div>Company News</div>

              <div>Events</div>
            </div>
          )}
          {/* 6 */}
          <div
            className="flex items-center justify-between text-2xl font-semibold text-[#eaeef4]  h-max py-4 "
            onClick={() =>
              whichIsOpen !== 6 ? setWhichIsOpen(6) : setWhichIsOpen(0)
            }
          >
            Company
            <div>
              {whichIsOpen !== 6 && <ChevronDown height="9px" fill="#eaeef4" />}
              {whichIsOpen === 6 && (
                <div>
                  <ChevronDown height="9px" fill="#eaeef4" />
                </div>
              )}
            </div>
          </div>
          {whichIsOpen === 6 && (
            <div className="text-[#c9cfdd] pt-2 pb-9 leading-6 pl-4 flex flex-col gap-y-6">
              <div>About Us</div>

              <div>Partners</div>

              <div>Security</div>

              <div>Proof of Reserves</div>

              <div>Tax</div>

              <div>Climate</div>

              <div>Capital</div>

              <div>Affiliate</div>

              <div>Careers</div>

              <div>Complaints Policy</div>

              <div>Support</div>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center my-16 text-center gap-y-5">
          <h2 className="text-[20px] font-semibold text-[#eaeef4] leading-[29px]">
            Get started with crypto
          </h2>
          <button className="flex bg-[#0577da] rounded-3xl py-3 w-full justify-center gap-x-2 items-center">
            <img
              src="../../../../../public/images/homePage/play_store.svg"
              alt="Download the Crypto app from the play store"
              className="h-[18px]"
            />
            <span className="font-semibold">Download App</span>
          </button>
        </div>

        <div className="grid grid-cols-4 mb-16 justify-items-center gap-x-3">
          <div className="flex flex-col gap-y-[12px]">
            <SocialMediaIcon
              src="../../../../../public/images/homePage/twitter.svg"
              alt="Twitter"
            />
            <SocialMediaIcon
              src="../../../../../public/images/homePage/discord.svg"
              alt="Discord"
            />
          </div>
          <div className="flex flex-col gap-y-[12px] ">
            <SocialMediaIcon
              src="../../../../../public/images/homePage/instagram.svg"
              alt="Instagram"
            />
            <SocialMediaIcon
              src="../../../../../public/images/homePage/linkedin.svg"
              alt="LinkedIn"
            />
          </div>
          <div className="flex flex-col gap-y-[12px]">
            <SocialMediaIcon
              src="../../../../../public/images/homePage/threads.svg"
              alt="Threads"
            />
            <SocialMediaIcon
              src="../../../../../public/images/homePage/reddit.svg"
              alt="Reddit"
            />
          </div>
          <div className="flex flex-col gap-y-[12px]">
            <SocialMediaIcon
              src="../../../../../public/images/homePage/facebook.svg"
              alt="Facebook"
            />
            <SocialMediaIcon
              src="../../../../../public/images/homePage/telegram.svg"
              alt="Telegram"
            />
          </div>
        </div>
        <div className="text-[11px] text-[#a0a9be]">
          <div className="border-b border-b-[#323c52] pb-10 flex flex-col gap-y-4 leading-[14px]">
            <p>
              The purpose of this website is solely to display information
              regarding the products and services available on the Crypto.com
              App. It is not intended to offer access to any of such products
              and services. You may obtain access to such products and services
              on the Crypto.com App.
            </p>
            <p>
              Please note that the availability of the products and services on
              the Crypto.com App is subject to jurisdictional limitations.
              Crypto.com may not offer certain products, features and/or
              services on the Crypto.com App in certain jurisdictions due to
              potential or actual regulatory restrictions.
            </p>
            <p>
              Foris DAX MT Limited, a company incorporated in Malta with Company
              number (C88392) trading under the name “Crypto.com” via the
              Crypto.com app is licensed as a Class 3 Virtual Financial Assets
              Service Provider by the Malta Financial Services Authority. Foris
              DAX MT Limited is authorised to provide the following VFA
              services: 1. execution of orders on behalf of other persons; 2.
              dealing on own account; and 3. custodian or nominee services to
              experienced and non-experienced investors.
            </p>
            <p>
              Any other product or service offered in the Crypto.com App and
              advertised on this website is provided by other group companies
              and does not fall within the Foris DAX MT Limited regulated
              services.
            </p>
            <p>
              Email: <span className="text-blueClr">contact@crypto.com</span> |
              Office: Level 7, Spinola Park, Triq Mikiel Ang Borg, St Julians
              SPK 1000 Malta.
            </p>
          </div>
          <div className="flex flex-col mt-4 gap-y-3">
            <p>Copyright © 2018 - 2023 Crypto.com. All rights reserved.</p>
            <p>
              <span className="pr-2 border-r border-r-[#f4f4f480]">
                Privacy Notice
              </span>
              <span className="pl-2">Status</span>
            </p>
          </div>
        </div>
      </div>
    )
  );
}

export default LessThan768;
