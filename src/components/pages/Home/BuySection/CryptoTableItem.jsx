function CryptoTableItem({
  cryptoName,
  cryptoShort,
  cryptoPrice,
  stockValueChange,
  cryptoSVG,
}) {
  return (
    <div className="flex justify-between border-b items-center border-b-[#f4f4f44d] h-max py-2 1128:py-4">
      <div className="flex gap-x-2">
        <div>{cryptoSVG}</div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-grayishWhite">
            {cryptoName}
          </span>
          <span className="text-[#9ea1a2] mt-[-5px] text-sm">
            {cryptoShort}
          </span>
        </div>
      </div>
      <div className="flex items-start gap-x-3">
        <div className="flex flex-col items-end ">
          <span className="font-semibold text-grayishWhite">{cryptoPrice}</span>
          <span className="text-greenishBlue mt-[-5px]">
            {stockValueChange}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CryptoTableItem;
