import Bitcoin from "../../../SVGComponents/Bitcoin";
import Ethereum from "../../../SVGComponents/Ethereum";
import Dogecoin from "../../../SVGComponents/Dogecoin";
import Polkadot from "../../../SVGComponents/Polkadot";
import Cronos from "../../../SVGComponents/Cronos";
import CryptoTableItem from "./CryptoTableItem";

function CryptoTable() {
  return (
    <div className="grid grid-rows-5 ">
      {/* First */}
      <CryptoTableItem
        cryptoName="Bitcoin"
        cryptoShort="BTC"
        cryptoPrice="$34,022.57"
        stockValueChange="+0.14%"
        cryptoSVG={<Bitcoin height={"26px"} width={"26px"} />}
      />

      {/* Second */}
      <CryptoTableItem
        cryptoName="Ethereum"
        cryptoShort="ETH"
        cryptoPrice="$1,783.65"
        stockValueChange="+0.39%"
        cryptoSVG={<Ethereum height={"26px"} width={"26px"} />}
      />

      {/* Third */}
      <CryptoTableItem
        cryptoName="Dogecoin"
        cryptoShort="DOGE"
        cryptoPrice="$0.070451"
        stockValueChange="+0.42%"
        cryptoSVG={<Dogecoin height={"26px"} width={"26px"} />}
      />

      {/* Fourth */}
      <CryptoTableItem
        cryptoName="Polkadot"
        cryptoShort="DOT"
        cryptoPrice="$4.16"
        stockValueChange="-0.71%"
        cryptoSVG={<Polkadot height={"26px"} width={"26px"} />}
      />

      {/* Fifth */}
      <CryptoTableItem
        cryptoName="Cronos"
        cryptoShort="CRO"
        cryptoPrice="$0.059392"
        stockValueChange="+0.84%"
        cryptoSVG={<Cronos height={"26px"} width={"26px"} />}
      />
    </div>
  );
}

export default CryptoTable;
