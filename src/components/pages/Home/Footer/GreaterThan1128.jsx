function GreaterThan1128() {
  return (
    window.width >= 1128 && (
      <div className="1128:w-[1080px] flex ">
        <div>
          <div className="text-[#c9cfdd] flex flex-col gap-y-5 tracking-widest leading-6 text-[17px] font-semibold w-[175px]">
            <div className="pl-3 border-l border-l-whiteClr">APP</div>

            <div className="pl-3 border-l border-l-whiteClr">VISA CARD</div>

            <div className="pl-3 border-l border-l-whiteClr">EXCHANGE</div>

            <div className="pl-3 border-l border-l-whiteClr">DEFI WALLET</div>

            <div className="pl-3 border-l border-l-whiteClr">NFT</div>
          </div>
        </div>
        <div className="flex text-[#eaeef4] w-full justify-around">
          <div>
            <h2 className="text-[20px] w-[120px] font-semibold mb-4">
              Features
            </h2>
            <div className="flex flex-col text-xs gap-y-3">
              <div>Buy and Sell</div>

              <div>Crypto Earn</div>

              <div>On-chain Staking</div>

              <div>Crypto.com Pay</div>

              <div>Pay for Business</div>

              <div>Margin Trading</div>

              <div>Derivatives Trading</div>

              <div>Supercharger</div>

              <div>Trading Arena</div>
            </div>
          </div>
          <div>
            <h2 className="text-[20px] w-[120px] font-semibold mb-4 ">Learn</h2>
            <div className="flex flex-col text-xs gap-y-3">
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
          </div>

          {/*  */}

          <div className="flex flex-col gap-y-6">
            <div>
              <h2 className="text-[20px] w-[120px] font-semibold mb-4">
                Prices
              </h2>
              <div className="flex flex-col text-xs gap-y-3">
                <div>Crypto Prices</div>

                <div>Bitcoin Price</div>

                <div>Ethereum Price</div>

                <div>Site Widgets</div>
              </div>
            </div>
            <div>
              <h2 className="text-[20px] w-[120px] font-semibold mb-4">News</h2>
              <div className="flex flex-col text-xs gap-y-3">
                <div>What&apos;s Trending</div>

                <div>Market Updates</div>

                <div>Product News</div>

                <div>Company News</div>

                <div>Events</div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-[20px] w-[120px] font-semibold mb-4">
              Company
            </h2>
            <div className="flex flex-col text-xs gap-y-3">
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
          </div>
        </div>
        <div className="flex flex-col items-center text-center gap-y-5 w-[200px]">
          <span className="text-[20px] w-[120px] font-semibold text-[#eaeef4] leading-[29px]">
            Get started with crypto
          </span>

          <div className="p-[16px] pb-4  border border-[#1199f980] rounded-[20px] flex flex-col items-center">
            <img
              src="public\images\homePage\qrCode-big.webp"
              alt="qrCode"
              className="w-[121px] mb-4"
            />
            <span className="text-[14px] font-semibold leading-4 block">
              Scan to <br /> Download
            </span>
          </div>
        </div>
      </div>
    )
  );
}

export default GreaterThan1128;
