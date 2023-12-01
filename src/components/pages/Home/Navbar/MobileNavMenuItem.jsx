import ChevronDown from "../../../SVGComponents/ChevronDown";
import { AnimatePresence, motion } from "framer-motion";

function MobileNavMenuItem({
  whichIsOpen,
  setWhichIsOpen,
  i,
  title,
  children,
}) {
  return (
    <>
      <div
        className="flex items-center justify-between py-[14px] text-lg"
        onClick={() =>
          whichIsOpen !== i ? setWhichIsOpen(i) : setWhichIsOpen(0)
        }
      >
        {title}

        <motion.div
          initial={{ rotate: 0 }}
          animate={whichIsOpen === i ? { rotate: 180 } : { rotate: 360 }}
        >
          <ChevronDown height={"8px"} />
        </motion.div>
      </div>

      <AnimatePresence>
        {whichIsOpen === i && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="shadow-[rgba(0,_45,_116,_0.05)_0px_4px_4px_inset,_rgba(0,_45,_116,_0.05)_0px_-4px_4px_inset] bg-grayishWhite mx-[-32px] 
          divide-y-[2px] divide-white "
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MobileNavMenuItem;
