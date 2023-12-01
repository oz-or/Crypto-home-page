import { useWindowSize } from "@uidotdev/usehooks";
import { Link } from "react-router-dom";

function StickyCTA() {
  const window = useWindowSize();

  return (
    window.width < 768 && (
      <div className="sticky bottom-0 left-0 w-full bg-[#fffc] px-3 pb-3 pt-2 z-40">
        <Link
          to="https://crypto.onelink.me/veNW"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex bg-[#0577da] rounded-3xl py-3 w-full justify-center gap-x-2 items-center">
            <img
              src="../../../../public/images/homePage/play_store.svg"
              alt="Download the Crypto app from the play store"
              className="h-[18px]"
            />
            <span className="font-semibold">Download Now</span>
          </button>
        </Link>
      </div>
    )
  );
}

export default StickyCTA;
