import { useState } from "react";
import AccordionPlus from "../../../SVGComponents/AccordionPlus";
import AccordionMinus from "../../../SVGComponents/AccordionMinus";
import { Link } from "react-router-dom";

function QuestionsSection() {
  //TODO: Render the questions programmatically
  //TODO: At the accordion item that has an ol, put the numbers of the li-s before the texts

  const [whichIsOpen, setWhichIsOpen] = useState(0);

  return (
    <section
      id="questions-section"
      className="px-6 py-20 border-b border-b-[#323c52] 768:px-14 1128:px-6 1128:flex 1128:justify-center"
    >
      <div className="flex flex-col 1128:flex-row 1128:justify-between 1128:w-[1128px]">
        <h1 className="text-[25px] leading-8 font-semibold 1128:text-[28px] 1128:w-[300px] pb-7 1128:pt-10">
          Frequently Asked Questions
        </h1>

        <div className="1128:w-[750px]">
          {/* -------------------------------------------------------------------------- */
          /*                                    First                                    */
          /* -------------------------------------------------------------------------- */}
          <div
            className={`flex items-center justify-between text-lg font-semibold text-mainTextClr 1128:text-2xl ${
              whichIsOpen !== 1 && "border-b border-b-[#7d7d7d] "
            }  h-max py-6`}
            onClick={() =>
              whichIsOpen !== 1 ? setWhichIsOpen(1) : setWhichIsOpen(0)
            }
          >
            What is crypto?
            <div>
              {whichIsOpen !== 1 && (
                <AccordionPlus height="24px" width="24px" />
              )}
              {whichIsOpen === 1 && (
                <AccordionMinus height="24px" width="24px" />
              )}
            </div>
          </div>
          {whichIsOpen === 1 && (
            <div className="text-[#a0ab9e] border-b border-b-[#7d7d7d] pb-6 leading-5">
              Cryptocurrency is a digital or virtual currency that operates on
              distributed ledger technology called a{" "}
              <Link
                to="#"
                rel="noopener noreferrer"
                target="_blank"
                className="underline text-blueClr"
              >
                blockchain
              </Link>{" "}
              and uses{" "}
              <Link
                to="#"
                rel="noopener noreferrer"
                target="_blank"
                className="underline text-blueClr"
              >
                cryptography
              </Link>{" "}
              for security. It is decentralized and operates independently of a
              central bank.
              <br />
              Unlike traditional currencies, cryptocurrencies are not backed by
              a physical commodity or government, and their value is determined
              by market demand and supply. Cryptocurrencies can be used to buy
              goods and services, transfer funds, and trade in markets. Popular
              cryptocurrencies include{" "}
              <Link
                to="#"
                rel="noopener noreferrer"
                target="_blank"
                className="underline text-blueClr"
              >
                Bitcoin
              </Link>
              ,{" "}
              <Link
                to="#"
                rel="noopener noreferrer"
                target="_blank"
                className="underline text-blueClr"
              >
                Ethereum
              </Link>
              ,{" "}
              <Link
                to="#"
                rel="noopener noreferrer"
                target="_blank"
                className="underline text-blueClr"
              >
                Litecoin
              </Link>
              ,{" "}
              <Link
                to="#"
                rel="noopener noreferrer"
                target="_blank"
                className="underline text-blueClr"
              >
                Ripple
              </Link>
              , and{" "}
              <Link
                to="#"
                rel="noopener noreferrer"
                target="_blank"
                className="underline text-blueClr"
              >
                Cronos
              </Link>
              .<br />
              Many cryptocurrencies, like Bitcoin, are created through a process
              called{" "}
              <Link
                to="#"
                rel="noopener noreferrer"
                target="_blank"
                className="underline text-blueClr"
              >
                mining
              </Link>
              , which involves solving complex mathematical equations to
              validate and record transactions on a blockchain. This mechanism
              is also called{" "}
              <Link
                to="#"
                rel="noopener noreferrer"
                target="_blank"
                className="underline text-blueClr"
              >
                Proof of Work (PoW)
              </Link>
              . Another consensus mechanism that has increased in popularity —
              as it is more energy efficient — is{" "}
              <Link
                to="#"
                rel="noopener noreferrer"
                target="_blank"
                className="underline text-blueClr"
              >
                Proof of Stake (PoS)
              </Link>
              . Instead of mining, PoS relies on network participants validating
              transactions. Ethereum, the second-largest cryptocurrency, uses
              this consensus mechanism.
            </div>
          )}
          {/* -------------------------------------------------------------------------- */
          /*                                    Second                                   */
          /* -------------------------------------------------------------------------- */}
          <div
            className={`flex items-center justify-between text-lg font-semibold text-mainTextClr 1128:text-2xl ${
              whichIsOpen !== 2 && "border-b border-b-[#7d7d7d]"
            }  h-max py-6`}
            onClick={() =>
              whichIsOpen !== 2 ? setWhichIsOpen(2) : setWhichIsOpen(0)
            }
          >
            What is Bitcoin?
            <div>
              {whichIsOpen !== 2 && (
                <AccordionPlus height="24px" width="24px" />
              )}
              {whichIsOpen === 2 && (
                <AccordionMinus height="24px" width="24px" />
              )}
            </div>
          </div>
          {whichIsOpen === 2 && (
            <div className="text-[#a0ab9e] border-b border-b-[#7d7d7d] pb-6 leading-5">
              <Link
                to="#"
                rel="noopener noreferrer"
                target="_blank"
                className="underline text-blueClr"
              >
                Bitcoin
              </Link>{" "}
              is a cryptocurrency that operates on a peer-to-peer (P2P) network.
              It was created in 2009 by an unknown person or group using the
              pseudonym Satoshi Nakamoto. Bitcoin is the first and most
              well-known cryptocurrency, and it has gained significant
              popularity and value since its creation. Unlike traditional fiat
              currency, which is controlled by central banks and governments,
              Bitcoin operates independently of any central authority.
              Transactions are verified and recorded on the blockchain, which is
              a distributed ledger that maintains a permanent and transparent
              record of all transactions. Bitcoin can be bought, sold, and
              exchanged on various cryptocurrency{" "}
              <Link
                to="#"
                rel="noopener noreferrer"
                target="_blank"
                className="underline text-blueClr"
              >
                exchanges
              </Link>
              , and it can be used to purchase goods and services from merchants
              that accept Bitcoin as a form of payment. The supply of bitcoins
              is limited to 21 million units, and new bitcoins are created
              through mining, which involves using specialized computer hardware
              to solve complex mathematical equations. Bitcoin is known for its
              high volatility, and its value can fluctuate rapidly in response
              to market conditions, news events, and other factors. Many
              traders, including institutional investors, see Bitcoin as a store
              of value and a way to participate in the growing cryptocurrency
              ecosystem.
            </div>
          )}
          {/* -------------------------------------------------------------------------- */
          /*                                    Third                                    */
          /* -------------------------------------------------------------------------- */}
          <div
            className={`flex items-center justify-between text-lg font-semibold text-mainTextClr 1128:text-2xl ${
              whichIsOpen !== 3 && "border-b border-b-[#7d7d7d]"
            }  h-max py-6`}
            onClick={() =>
              whichIsOpen !== 3 ? setWhichIsOpen(3) : setWhichIsOpen(0)
            }
          >
            Where to buy crypto?
            <div>
              {whichIsOpen !== 3 && (
                <AccordionPlus height="24px" width="24px" />
              )}
              {whichIsOpen === 3 && (
                <AccordionMinus height="24px" width="24px" />
              )}
            </div>
          </div>
          {whichIsOpen === 3 && (
            <div className="text-[#a0ab9e] border-b border-b-[#7d7d7d] pb-6 leading-5">
              <div>
                There are several ways to buy cryptocurrencies, including:
                <br />
                <ol className="py-5 leading-5 marker:text-2xl ps-10">
                  <li className="list-item ">
                    <span className="font-bold text-mainTextClr">
                      Brokerage services:
                    </span>{" "}
                    Crypto brokers allow users to simply buy and sell
                    cryptocurrencies. A popular example is the{" "}
                    <Link
                      to
                      href="#"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="underline text-blueClr"
                    >
                      Crypto.com App
                    </Link>
                    , trusted by over 80 million users. It is available at the
                    Apple Store and on Google Play.
                  </li>
                  <li>
                    <span>Cryptocurrency exchanges:</span> These are online
                    platforms where users can buy, sell, and trade
                    cryptocurrencies using fiat currency or other
                    cryptocurrencies. They offer more complex functions compared
                    to a crypto brokerage, adding trading instruments like
                    crypto derivatives. The{" "}
                    <Link
                      to
                      href="#"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="underline text-blueClr"
                    >
                      Crypto.com Exchange
                    </Link>{" "}
                    is an example of a popular crypto exchange.
                  </li>
                  <li>
                    <span>Peer-to-peer (P2P) marketplaces:</span> These are
                    platforms where buyers and sellers can directly trade
                    cryptocurrencies without the involvement of a third-party
                    exchange. This is also known as{" "}
                    <Link
                      to
                      href="#"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="underline text-blueClr"
                    >
                      DeFi
                    </Link>
                    , short for decentralized finance. Multiple P2P crypto
                    marketplaces can be accessed all in one app via the{" "}
                    <Link
                      to
                      href="#"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="underline text-blueClr"
                    >
                      Crypto.com DeFi Wallet
                    </Link>
                    .
                  </li>
                </ol>
                It is important to perform proper research and choose a
                reputable platform to buy cryptocurrencies. For instance,
                Crypto.com holds the{" "}
                <Link
                  toef="#"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="underline text-blueClr"
                >
                  highest security rating in the industry
                </Link>
                . In addition, it is advisable to store cryptocurrencies
                securely in a wallet like the Crypto.com App or Crypto.com DeFi
                Wallet.
              </div>
            </div>
          )}
          {/* -------------------------------------------------------------------------- */
          /*                                    Fourth                                   */
          /* -------------------------------------------------------------------------- */}
          <div
            className={`flex items-center justify-between text-lg font-semibold text-mainTextClr 1128:text-2xl ${
              whichIsOpen !== 4 && "border-b border-b-[#7d7d7d]"
            }  h-max py-6`}
            onClick={() =>
              whichIsOpen !== 4 ? setWhichIsOpen(4) : setWhichIsOpen(0)
            }
          >
            How to buy crypto?
            <div>
              {whichIsOpen !== 4 && (
                <AccordionPlus height="24px" width="24px" />
              )}
              {whichIsOpen === 4 && (
                <AccordionMinus height="24px" width="24px" />
              )}
            </div>
          </div>
          {whichIsOpen === 4 && (
            <div className="text-[#a0ab9e] border-b border-b-[#7d7d7d] pb-6 leading-5">
              <div>
                To buy crypto, follow these general steps:
                <br />
                <ol className="py-5 marker:text-2xl ps-8">
                  <li className="list-item">
                    Choose a crypto platform to use, like the{" "}
                    <Link
                      to
                      href="#"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="underline text-blueClr"
                    >
                      Crypto.com Exchange
                    </Link>{" "}
                    or{" "}
                    <Link
                      to
                      href="#"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="underline text-blueClr"
                    >
                      Crypto.com App
                    </Link>
                    .
                  </li>
                  <li>
                    Create an account on the chosen platform by providing
                    personal information and ID verification, also known as
                    ‘Know Your Customer’ (
                    <Link
                      to
                      href="#"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="underline text-blueClr"
                    >
                      KYC
                    </Link>
                    ) procedures.
                  </li>
                  <li>
                    Deposit fiat currency or another cryptocurrency into the
                    newly created account. The Crypto.com App supports bank
                    transfers, credit cards, debit cards, and cryptocurrency
                    transfers to buy crypto, depending on region.
                  </li>
                  <li>
                    Navigate to the ‘Buy’ section of the Crypto.com Exchange or
                    App and select the crypto to buy.
                  </li>
                  <li>
                    Enter the amount of cryptocurrency to buy and confirm the
                    transaction.
                  </li>
                  <li>
                    The crypto will be deposited into the account. From here, it
                    can be transferred to other crypto wallets or converted back
                    to fiat currency and paid out to a bank account.
                  </li>
                </ol>
                It is important to perform proper research and choose a
                reputable platform to buy cryptocurrencies. For instance,
                Crypto.com holds the{" "}
                <Link
                  toef="#"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="underline text-blueClr"
                >
                  highest security rating in the industry
                </Link>
                . In addition, it is advisable to store cryptocurrencies
                securely in a wallet like the{" "}
                <Link
                  toef="#"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="underline text-blueClr"
                >
                  Crypto.com App
                </Link>{" "}
                or{" "}
                <Link
                  toef="#"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="underline text-blueClr"
                >
                  Crypto.com DeFi Wallet.
                </Link>
              </div>
            </div>
          )}
          {/* -------------------------------------------------------------------------- */
          /*                                    Fifth                                    */
          /* -------------------------------------------------------------------------- */}
          <div
            className={`flex items-center justify-between text-lg font-semibold text-mainTextClr 1128:text-2xl ${
              whichIsOpen !== 5 && "border-b border-b-[#7d7d7d]"
            }  h-max py-6`}
            onClick={() =>
              whichIsOpen !== 5 ? setWhichIsOpen(5) : setWhichIsOpen(0)
            }
          >
            How to buy Bitcoin?
            <div>
              {whichIsOpen !== 5 && (
                <AccordionPlus height="24px" width="24px" />
              )}
              {whichIsOpen === 5 && (
                <AccordionMinus height="24px" width="24px" />
              )}
            </div>
          </div>
          {whichIsOpen === 5 && (
            <div className="text-[#a0ab9e] border-b border-b-[#7d7d7d] pb-6 leading-5 ">
              <div>
                Users can buy{" "}
                <Link
                  toef="#"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="underline text-blueClr"
                >
                  Bitcoin
                </Link>{" "}
                from a cryptocurrency exchange, a crypto brokerage service like
                the{" "}
                <Link
                  toef="#"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="underline text-blueClr"
                >
                  Crypto.com App
                </Link>
                , or a peer-to-peer (P2P) marketplace like those found in the{" "}
                <Link
                  toef="#"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="underline text-blueClr"
                >
                  Crypto.com DeFi Wallet
                </Link>
                . Here are some general steps to buying bitcoin from an exchange
                or brokerage service:
                <br />
                <ol className="py-5 marker:text-2xl ps-8">
                  <li className="list-item">
                    Choose a reputable cryptocurrency platform that supports
                    Bitcoin trading. Popular options include the{" "}
                    <Link
                      to
                      href="#"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="underline text-blueClr"
                    >
                      Crypto.com App
                    </Link>{" "}
                    and the{" "}
                    <Link
                      to
                      href="#"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="underline text-blueClr"
                    >
                      Crypto.com Exchange
                    </Link>
                    .
                  </li>
                  <li>
                    Create an account on the chosen platform and complete the{" "}
                    <Link
                      to
                      href="#"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="underline text-blueClr"
                    >
                      KYC
                    </Link>{" "}
                    verification process, which may require providing personal
                    identification documents.
                  </li>
                  <li>
                    Fund an account using a bank transfer, credit/debit card, or
                    other cryptocurrency, depending on region.
                  </li>
                  <li>
                    Navigate to the ‘Buy’ section of the platform and select
                    Bitcoin as the cryptocurrency to buy.
                  </li>
                  <li>
                    Enter the amount of bitcoin to buy, or the amount of fiat or
                    cryptocurrency to spend.
                  </li>
                  <li>
                    Review the transaction details and confirm the purchase.
                  </li>
                  <li>
                    Once the transaction is complete, the bitcoin will be
                    deposited into the chosen account. From here, the funds can
                    be transferred to other crypto wallets or converted back to
                    fiat currency and paid out to a bank account.
                  </li>
                </ol>
                It is important to perform proper research and choose a
                reputable platform to buy cryptocurrencies. For instance,
                Crypto.com holds the{" "}
                <Link
                  toef="#"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="underline text-blueClr"
                >
                  highest security rating in the industry
                </Link>
                . In addition, it is advisable to store cryptocurrencies
                securely in a wallet like the{" "}
                <Link
                  toef="#"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="underline text-blueClr"
                >
                  Crypto.com App
                </Link>{" "}
                or{" "}
                <Link
                  toef="#"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="underline text-blueClr"
                >
                  Crypto.com DeFi Wallet.
                </Link>
              </div>
            </div>
          )}
          {/* -------------------------------------------------------------------------- */
          /*                                    Sixth                                    */
          /* -------------------------------------------------------------------------- */}
          <div
            className={`flex items-center justify-between text-lg font-semibold text-mainTextClr 1128:text-2xl ${
              whichIsOpen !== 6 && "border-b border-b-[#7d7d7d]"
            }  h-max py-6`}
            onClick={() =>
              whichIsOpen !== 6 ? setWhichIsOpen(6) : setWhichIsOpen(0)
            }
          >
            How to trade crypto?
            <div>
              {whichIsOpen !== 6 && (
                <AccordionPlus height="24px" width="24px" />
              )}
              {whichIsOpen === 6 && (
                <AccordionMinus height="24px" width="24px" />
              )}
            </div>
          </div>
          {whichIsOpen === 6 && (
            <div className="text-[#a0ab9e] border-b border-b-[#7d7d7d] pb-6 leading-5 ">
              <div>
                To trade cryptocurrency, follow these general steps:
                <br />
                <ol className="py-5 marker:text-2xl ps-8">
                  <li className="list-item">
                    Choose a cryptocurrency exchange that supports trading. A
                    popular option is the{" "}
                    <Link
                      to
                      href="#"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="underline text-blueClr"
                    >
                      Crypto.com Exchange
                    </Link>
                    .
                  </li>
                  <li>
                    Create an account on the chosen platform and perform ID
                    verification, known as{" "}
                    <Link
                      to
                      href="#"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="underline text-blueClr"
                    >
                      KYC
                    </Link>{" "}
                    (‘Know Your Customer’).
                  </li>
                  <li>
                    Deposit funds into the newly created account using a
                    supported payment method. The Crypto.com Exchange supports
                    bank transfers and credit/debit cards.
                  </li>
                  <li>
                    Navigate to the trading section of the platform and select
                    the cryptocurrency pair to trade.
                  </li>
                  <li>
                    Choose whether to buy or sell the cryptocurrency, and enter
                    the amount to trade.
                  </li>
                  <li>
                    Set the preferred price and order type. There are several
                    types of orders, including market orders, limit orders, stop
                    orders, and crypto options, which allow users to buy or sell
                    at a specific price or under certain conditions.
                  </li>
                  <li>
                    Submit the trade order and wait for it to be executed.
                    Depending on market conditions, the trade may be filled
                    immediately, or it may take time to be filled.
                  </li>
                  <li>Monitor trades and adjust strategies as necessary.</li>
                </ol>
                Here is an introduction to{" "}
                <Link
                  toef="#"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="underline text-blueClr"
                >
                  trading on the Crypto.com Exchange
                </Link>
                .<br />
                It is crucial to note that trading cryptocurrency carries risk,
                and it is important to trade only what you can afford to lose.
              </div>
            </div>
          )}
          {/* -------------------------------------------------------------------------- */
          /*                                    Seventh                                  */
          /* -------------------------------------------------------------------------- */}
          <div
            className={`flex items-center justify-between text-lg font-semibold text-mainTextClr 1128:text-2xl ${
              whichIsOpen !== 7 && "border-b border-b-[#7d7d7d]"
            }  h-max py-6`}
            onClick={() =>
              whichIsOpen !== 7 ? setWhichIsOpen(7) : setWhichIsOpen(0)
            }
          >
            How to earn crypto?
            <div>
              {whichIsOpen !== 7 && (
                <AccordionPlus height="24px" width="24px" />
              )}
              {whichIsOpen === 7 && (
                <AccordionMinus height="24px" width="24px" />
              )}
            </div>
          </div>
          {whichIsOpen === 7 && (
            <div className="text-[#a0ab9e] border-b border-b-[#7d7d7d] pb-6 leading-5">
              <div>
                There are several ways to earn cryptocurrency, including:
                <br />
                <ol className="py-5 marker:text-2xl ps-8">
                  <li className="list-item">
                    <Link
                      to
                      href="#"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="underline text-blueClr"
                    >
                      Mining
                    </Link>
                    : Cryptocurrency mining involves using specialized computer
                    hardware to solve complex mathematical equations that
                    validate transactions on a blockchain network. Successful
                    miners are rewarded with newly minted cryptocurrency for
                    their efforts.
                  </li>
                  <li>
                    <Link
                      to
                      href="#"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="underline text-blueClr"
                    >
                      Staking/Lockups
                    </Link>
                    : Staking and lockups involve holding or locking up a
                    certain amount of cryptocurrency in a wallet or on a
                    platform to support the operations of the blockchain
                    network. Stakers are rewarded with new cryptocurrency as a
                    form of interest for their support.
                  </li>
                  <li>
                    <Link
                      to
                      href="#"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="underline text-blueClr"
                    >
                      Trading
                    </Link>
                    : Trading cryptocurrency involves buying and selling
                    cryptocurrencies on exchanges or other trading platforms.
                    Those who have a good understanding of market trends and are
                    able to make informed trading decisions can earn profits
                    through trading.
                  </li>
                  <li>
                    Airdrops: Airdrops are free distributions of cryptocurrency
                    to users who meet certain criteria or participate in
                    promotional activities.
                  </li>
                  <li>
                    <Link
                      to
                      href="#"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="underline text-blueClr"
                    >
                      Crypto Projects
                    </Link>
                    : Some blockchain projects offer rewards or bounties for
                    users who contribute to their development or community. This
                    can include activities like bug bounties, testing, or
                    content creation.
                  </li>
                </ol>
                It&apos;s important to note that each method of earning
                cryptocurrency carries its own risks and rewards. It is
                recommended to carefully research cryptocurrencies and
                understand the process before buying. Learn more about the
                crypto market at{" "}
                <Link
                  toef="#"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="underline text-blueClr"
                >
                  Crypto.com University
                </Link>
                .
              </div>
            </div>
          )}
          {/* -------------------------------------------------------------------------- */
          /*                                    Eight                                    */
          /* -------------------------------------------------------------------------- */}
          <div
            className={`flex items-center justify-between text-lg font-semibold text-mainTextClr 1128:text-2xl ${
              whichIsOpen !== 8 && "border-b border-b-[#7d7d7d]"
            }  h-max py-6`}
            onClick={() =>
              whichIsOpen !== 8 ? setWhichIsOpen(8) : setWhichIsOpen(0)
            }
          >
            How to earn rewards on crypto?
            <div>
              {whichIsOpen !== 8 && (
                <AccordionPlus height="24px" width="24px" />
              )}
              {whichIsOpen === 8 && (
                <AccordionMinus height="24px" width="24px" />
              )}
            </div>
          </div>
          {whichIsOpen === 8 && (
            <div className="text-[#a0ab9e] border-b border-b-[#7d7d7d] pb-6 leading-5">
              <div>
                Users can earn rewards on their cryptocurrency holdings through
                various products that offer rewards-bearing accounts or lending
                services. Here are some ways to earn rewards on cryptocurrency:
                <br />
                <ol className="py-5 marker:text-2xl ps-8">
                  <li className="list-item">
                    The{" "}
                    <Link
                      to
                      href="#"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="underline text-blueClr"
                    >
                      Crypto.com App
                    </Link>
                    ,{" "}
                    <Link
                      to
                      href="#"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="underline text-blueClr"
                    >
                      Exchange
                    </Link>
                    , and{" "}
                    <Link
                      to
                      href="#"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="underline text-blueClr"
                    >
                      DeFi Wallet
                    </Link>{" "}
                    all offer different ways to earn rewards on crypto, called{" "}
                    <Link
                      to
                      href="#"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="underline text-blueClr"
                    >
                      Crypto Earn
                    </Link>
                    .
                  </li>
                  <li>
                    Create an account on the chosen platform and deposit
                    cryptocurrency holdings into the rewards account.
                  </li>
                  <li>
                    Depending on the platform, users may earn rewards through
                    lending their cryptocurrency to other users or by locking up
                    their cryptocurrency for a period of time.
                  </li>
                  <li>
                    Some products offer fixed reward rates (e.g., the{" "}
                    <Link
                      to
                      href="#"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="underline text-blueClr"
                    >
                      Crypto.com Visa Card
                    </Link>
                    ), while others may offer variable rates that depend on
                    market conditions (e.g., the &apos;Earn&apos; feature in the
                    Crypto.com DeFi Wallet).
                  </li>
                  <li>Monitor rewards and adjust strategies as necessary.</li>
                </ol>
                It&apos;s important to note that earning interest and rewards on
                cryptocurrency carries risks, including fluctuations in market
                conditions that may affect interest rates. Make sure to
                carefully research and understand terms and conditions before
                depositing cryptocurrency.
              </div>
            </div>
          )}
          <div className="flex py-6 gap-x-1">
            <span className="font-semibold text-mainTextClr">
              Have more questions?
            </span>
            <span className="text-blueClr">Contact Us</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuestionsSection;
