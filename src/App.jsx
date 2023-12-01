import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomePage,
  About,
  Careers,
  CryptoApp,
  DeFi,
  Earn,
  Events,
  ExchangeHome,
  MarginTrading,
  DerivativesTrading,
  MarketUpdates,
  MetalVisaCards,
  News,
  NFT,
  NFTDeepDives,
  Partners,
  Pay,
  PayForBusiness,
  ProductNews,
  ResearchAndAnalysis,
  Security,
  Support,
  University,
  WhatsTrending,
} from "./components/pages/importPages";
import { ParallaxProvider } from "react-scroll-parallax";

const router = createBrowserRouter([
  {
    element: <HomePage />,
    path: "/",
  },
  /* Get Started */
  { element: <CryptoApp />, path: "/app" },
  { element: <NFT />, path: "/nft" },
  { element: <MetalVisaCards />, path: "/cards" },
  { element: <Pay />, path: "/pay" },
  { element: <Earn />, path: "/earn" },
  /* Advanced Trading */

  {
    element: <ExchangeHome />,
    path: "/exchange",
    children: [
      { element: <MarginTrading />, path: "/exchange/trade/BTC_USD" },
      {
        element: <DerivativesTrading />,
        path: "/exchange/trade/BTCUSD-PERP",
      },
    ],
  },

  { element: <DeFi />, path: "/defi" },
  { element: <PayForBusiness />, path: "/pay-merchant" },
  /* Company */
  { element: <About />, path: "/about" },
  { element: <Careers />, path: "/careers" },
  { element: <News />, path: "/news" },
  { element: <Support />, path: "/support" },
  { element: <Security />, path: "/security" },
  { element: <Partners />, path: "/partners" },
  /* Updates */
  { element: <WhatsTrending />, path: "/trending" },
  { element: <ProductNews />, path: "/product-news" },
  { element: <Events />, path: "/events" },
  { element: <MarketUpdates />, path: "/market-updates" },
  /* Resources */
  { element: <University />, path: "/university" },
  { element: <NFTDeepDives />, path: "/nft-stories" },
  { element: <ResearchAndAnalysis />, path: "/research" },
]);

function App() {
  return (
    <ParallaxProvider>
      <RouterProvider router={router} />
    </ParallaxProvider>
  );
}

export default App;

/* tech stack */
//React Router for routing
//Tailwind for styles

//pages

//I MAKE EVERY PAGE THAT'S ACCESSIBLE FROM THE HOMEPAGE IN 1 CLICK

/* HomePage

(under Products menu)
(Get Started)
App,
Crypto.com NFT,
Metal Visa Cards,
Crypto.com Pay,
Crypto.com Earn,

(Advanced Trading)
Exchange Home,
Margin Trading,
Derivatives Trading,
DeFi(Browser Extension and Desktop Wallet point there too),
PayForBusiness 

(under Company menu)
About,
Carreers,
News,
Support,
Security,
Partners

(under Learn menu)
(Updates)
What's Trending,
Product News,
Events,
Market Updates

(Resources)
University,
NFT Deep Dives
Research & Analysis*/
