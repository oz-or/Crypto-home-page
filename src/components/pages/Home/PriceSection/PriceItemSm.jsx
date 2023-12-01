function PriceItemSm({
  cryptoName,
  cryptoShort,
  cryptoPrice,
  stockValueChange,
}) {
  return (
    <div className="flex justify-between border-b border-b-[#f4f4f44d] py-3">
      <div className="flex flex-col">
        <span className="text-[#d1d0d1] font-semibold text-lg ">
          {cryptoName}
        </span>
        <span className="text-pClr mt-[-5px]">{cryptoShort}</span>
      </div>
      <div className="flex items-start gap-x-3">
        <div className="flex flex-col items-end ">
          <span className="text-[22px] font-semibold text-mainTextClr">
            {cryptoPrice}
          </span>
          <span className="text-greenishBlue mt-[-5px]">
            {stockValueChange}
          </span>
        </div>
        <button className="text-[#0e213b] bg-mainTextClr h-max py-2 px-3 rounded-full font-semibold text-lg mt-1">
          Trade
        </button>
      </div>
    </div>
  );
}

export default PriceItemSm;
