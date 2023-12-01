import { useState } from "react";
import MobileNavMenuItem from "./MobileNavMenuItem";
import MobileNavItem from "./MobileNavItem";
import { motion } from "framer-motion";

function MobileNavbarMenu({ toggleIsOpen, isOpen }) {
  const [whichIsOpen, setWhichIsOpen] = useState(0);

  //TODO: Add the transition effects

  return (
    <motion.div
      variants={{
        open: { translateX: 0 },
        closed: { translateX: "100%" },
      }}
      initial="closed"
      animate="open"
      exit="closed"
      transition={{ duration: 0.25 }}
      className="sticky z-[1000] top-0 left-0 bottom-0 w-full h-full font-semibold text-black bg-white divide-y-[1px] divide-[#ced0d0] "
    >
      <div className="flex items-center justify-between px-8 py-[18px] ">
        <div className="flex gap-x-2">
          <img src="public\images\homePage\global-round.svg" alt="Global" />
          <div className="flex items-center">
            <span>EEA</span>
            <div className="w-[1px] h-4 bg-black mx-2"></div>
            <span>EN</span>
          </div>
        </div>

        <motion.img
          animate={isOpen ? "open" : "closed"}
          src="public\images\homePage\close.svg"
          alt="Close Menu"
          onClick={() => toggleIsOpen()}
        />
      </div>

      <div className="px-8 pb-3">
        <MobileNavMenuItem
          whichIsOpen={whichIsOpen}
          setWhichIsOpen={setWhichIsOpen}
          i={1}
          title="Crypto.com App"
        >
          <MobileNavItem
            title="Buy and Sell"
            description="Buy Bitcoin, Ethereum, and 250+ cryptocurrencies"
          />
          <MobileNavItem
            title="Metal Visa Cards"
            description="Up to 5% back on all spending"
          />
          <MobileNavItem
            title="Crypto.com Pay"
            description="Spend your crypto anywhere"
          />
          <MobileNavItem
            title="Crypto Earn"
            description="Get the most out of your assets"
          />
          <MobileNavItem
            title="On-chain Staking"
            description="Generate passsive income"
          />
        </MobileNavMenuItem>

        <MobileNavMenuItem
          whichIsOpen={whichIsOpen}
          setWhichIsOpen={setWhichIsOpen}
          i={2}
          title="Exchange"
        >
          <MobileNavItem
            title="Exhange Home"
            description="Trade with low fees and deep liquidity"
          />
          <MobileNavItem title="Margin Trading" description="Get 3x leverage" />
          <MobileNavItem
            title="Derivatives Trading"
            description="20x leverage, ultra low latency"
          />
        </MobileNavMenuItem>

        <MobileNavMenuItem
          whichIsOpen={whichIsOpen}
          setWhichIsOpen={setWhichIsOpen}
          i={3}
          title="DeFi"
        >
          <MobileNavItem
            title="DeFi Wallet"
            description="One app, multiple DeFi services"
          />
          <MobileNavItem
            title="Browser Extension"
            description="Access DeFi protocols on desktop"
          />
          <MobileNavItem
            title="Desktop Wallet"
            description="Easily manage your DeFi tools"
          />
        </MobileNavMenuItem>

        <MobileNavMenuItem
          whichIsOpen={whichIsOpen}
          setWhichIsOpen={setWhichIsOpen}
          i={4}
          title="Ecosystem"
        >
          <MobileNavItem
            title="Pay for Business"
            description="Access crypto simply and securely"
          />
        </MobileNavMenuItem>

        <MobileNavMenuItem
          whichIsOpen={whichIsOpen}
          setWhichIsOpen={setWhichIsOpen}
          i={5}
          title="Company"
        >
          <MobileNavItem
            title="About"
            description="Discover our vision, mission and team"
          />
          <MobileNavItem title="Careers" description="Build Web3 with us" />
          <MobileNavItem
            title="News"
            description="Company and product updates"
          />
          <MobileNavItem title="Support" description="Get help 24/7" />
          <MobileNavItem
            title="Security"
            description="Learn about our industry-leading protection"
          />
          <MobileNavItem
            title="Partners"
            description="Explore our world-class portfolio of partners"
          />
        </MobileNavMenuItem>

        <MobileNavMenuItem
          whichIsOpen={whichIsOpen}
          setWhichIsOpen={setWhichIsOpen}
          i={6}
          title="Learn"
        >
          <MobileNavItem
            title="What's Trending"
            description="Read our top stories"
          />
          <MobileNavItem
            title="Market Updates"
            description="Track the market's latest developments"
          />
          <MobileNavItem
            title="Product News"
            description="Our latest updates and launches"
          />
          <MobileNavItem
            title="Events"
            description="Connect online and in person"
          />
          <MobileNavItem
            title="University"
            description="Build your crypto knowledge"
          />
          <MobileNavItem
            title="Research & Analysis"
            description="Get our industry-leading insights"
          />
          <MobileNavItem
            title="NFT Deep Dives"
            description="Get to know the creators and their work"
          />
        </MobileNavMenuItem>

        <div className="flex items-center justify-between py-[14px] text-lg">
          Prices
        </div>

        <div className="flex items-center justify-between py-[14px] text-lg">
          NFT
        </div>
      </div>

      <div className="px-8 py-2">
        <button className="flex border-[#0b1426] border py-[10px] px-5 gap-x-2 rounded-[3px] items-center">
          <img
            src="public\images\homePage\download-app.svg"
            alt="Download Icon"
          />
          Download App
        </button>
      </div>
    </motion.div>
  );
}

export default MobileNavbarMenu;
