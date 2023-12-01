import { AnimatePresence, useCycle } from "framer-motion";
import MobileNavbarMenu from "./Navbar/MobileNavbarMenu";
import {
  BuySection,
  CardSection,
  DeFiSection,
  EarnSection,
  HeroSection,
  Footer,
  HomeNavbar,
  OurVisionSection,
  PriceSection,
  QuestionsSection,
  StickyCTA,
} from "./importHomeSections";

function HomePage() {
  const [isOpen, toggleIsOpen] = useCycle(false, true);

  return (
    <div>
      <AnimatePresence>
        {isOpen && (
          <MobileNavbarMenu isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
        )}
      </AnimatePresence>
      <HomeNavbar isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
      {!isOpen && (
        <>
          <HeroSection />
          <PriceSection />
          <BuySection />
          <CardSection />
          <EarnSection />
          <DeFiSection />
          <OurVisionSection />
          <QuestionsSection />
          <Footer />
          <StickyCTA />
        </>
      )}
    </div>
  );
}

export default HomePage;
