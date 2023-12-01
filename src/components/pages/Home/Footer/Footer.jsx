import { useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import SocialMediaIcon from "./SocialMediaIcon";
import GreaterThan1128 from "./GreaterThan1128";
import LessThan768 from "./LessThan768";
import Between768And1128 from "./Between768And1128";

function Footer() {
  //TODO: Rotate the Chevrons when they are clicked

  const window = useWindowSize();

  const [whichIsOpen, setWhichIsOpen] = useState(0);

  return (
    <section
      id="footer"
      className="px-6 py-16 768:px-14 1128:flex 1128:justify-center "
    >
      <LessThan768 whichIsOpen={whichIsOpen} setWhichIsOpen={setWhichIsOpen} />

      {window.width >= 768 && (
        <div>
          <div className="flex items-center mb-16">
            <div>
              <img
                src="../../../../../public/images/homePage/logo-footer.svg"
                alt="CDC logo"
                className="h-[30px] 1128:h-10"
              />
            </div>
            <div className=" mx-5 flex-1 h-[1px] bg-[#323C52]"></div>

            <div className="flex gap-x-2 1128:gap-x-3">
              <SocialMediaIcon
                src="../../../../../public/images/homePage/twitter.svg"
                alt="Twitter"
              />
              <SocialMediaIcon
                src="../../../../../public/images/homePage/discord.svg"
                alt="Discord"
              />

              <SocialMediaIcon
                src="../../../../../public/images/homePage/instagram.svg"
                alt="Instagram"
              />
              <SocialMediaIcon
                src="../../../../../public/images/homePage/linkedin.svg"
                alt="LinkedIn"
              />

              <SocialMediaIcon
                src="../../../../../public/images/homePage/threads.svg"
                alt="Threads"
              />
              <SocialMediaIcon
                src="../../../../../public/images/homePage/reddit.svg"
                alt="Reddit"
              />

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
          <Between768And1128 />

          <GreaterThan1128 />

          <div className="text-[11px] text-[#a0a9be] max-w-[1080px] 1128:mt-10">
            <div className="border-y border-y-[#323c52] 768:py-10 1128:flex gap-y-4 leading-[14px] 1128:justify-between">
              <div className="1128:w-[675px]">
                <p>
                  The purpose of this website is solely to display information
                  regarding the products and services available on the
                  Crypto.com App. It is not intended to offer access to any of
                  such products and services. You may obtain access to such
                  products and services on the Crypto.com App.
                </p>
                <p>
                  Please note that the availability of the products and services
                  on the Crypto.com App is subject to jurisdictional
                  limitations. Crypto.com may not offer certain products,
                  features and/or services on the Crypto.com App in certain
                  jurisdictions due to potential or actual regulatory
                  restrictions.
                </p>
                <p>
                  Foris DAX MT Limited, a company incorporated in Malta with
                  Company number (C88392) trading under the name “Crypto.com”
                  via the Crypto.com app is licensed as a Class 3 Virtual
                  Financial Assets Service Provider by the Malta Financial
                  Services Authority. Foris DAX MT Limited is authorised to
                  provide the following VFA services: 1. execution of orders on
                  behalf of other persons; 2. dealing on own account; and 3.
                  custodian or nominee services to experienced and
                  non-experienced investors.
                </p>
                <p>
                  Any other product or service offered in the Crypto.com App and
                  advertised on this website is provided by other group
                  companies and does not fall within the Foris DAX MT Limited
                  regulated services.
                </p>
                <p>
                  Email:{" "}
                  <span className="text-blueClr">contact@crypto.com</span> |
                  Office: Level 7, Spinola Park, Triq Mikiel Ang Borg, St
                  Julians SPK 1000 Malta.
                </p>
              </div>
              <div className="flex mt-3 1128:flex-col 1128:gap-y-4">
                <div className="flex 1128:gap-x-3">
                  <img
                    src="../../../../../public/images/homePage/AICPA-certificate.webp"
                    alt="AICPA SOC security logo"
                    className="w-auto h-[50px]"
                  />
                  <img
                    src="../../../../../public/images/homePage/SGS-certificate-first.webp"
                    alt="SGS ISO 27701 security logo"
                    className="w-auto h-[50px]"
                  />
                  <img
                    src="../../../../../public/images/homePage/SGS-certificate-second.webp"
                    alt="SGS ISO 27001 security logo"
                    className="w-auto h-[50px]"
                  />
                </div>
                <div className="flex">
                  <img
                    src="../../../../../public/images/homePage/PCI-certificate.webp"
                    alt="PCi DSS certified logo"
                    className="w-auto h-[50px]"
                  />
                  <img
                    src="../../../../../public/images/homePage/BSI-certificate.webp"
                    alt="bsi ISO 22301 certified logo"
                    className="w-auto h-[50px]"
                  />
                </div>
                <img
                  src="../../../../../public/images/homePage/CYBER-certificate.webp"
                  alt="CSA Cyber Trust logo"
                  className="w-auto h-[50px] ml-2"
                />
              </div>
            </div>

            <div className="flex justify-between mt-4 ">
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
      )}
    </section>
  );
}

export default Footer;
