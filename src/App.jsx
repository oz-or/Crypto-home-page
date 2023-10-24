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

const router = createBrowserRouter([
  {
    element: <HomePage />,
    children: [
      /* Get Started */
      { element: <CryptoApp /> },
      { element: <NFT /> },
      { element: <MetalVisaCards /> },
      { element: <Pay /> },
      { element: <Earn /> },
      /* Advanced Trading */
      {
        element: <ExchangeHome />,
        children: [
          { element: <MarginTrading /> },
          { element: <DerivativesTrading /> },
        ],
      },
      { element: <DeFi /> },
      { element: <PayForBusiness /> },
      /* Company */
      { element: <About /> },
      { element: <Careers /> },
      { element: <News /> },
      { element: <Support /> },
      { element: <Security /> },
      { element: <Partners /> },
      /* Updates */
      { element: <WhatsTrending /> },
      { element: <ProductNews /> },
      { element: <Events /> },
      { element: <MarketUpdates /> },
      /* Resources */
      { element: <University /> },
      { element: <NFTDeepDives /> },
      { element: <ResearchAndAnalysis /> },
    ],
  },
]);

function App() {
  return <RouterProvider route={router} />;
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
