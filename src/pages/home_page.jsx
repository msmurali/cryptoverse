import React from "react";
import Header from "../components/header";
import Card from "../components/card";
import { formatNum } from "../services/utils/helpers";

const HomePage = ({ crypto }) => {
  const { data: cryptoData, status: cryptoStatus, error: cryptoErr } = crypto;
  // const { newsData, newsStatus, newsErr } = news;

  return (
    <React.Fragment>
      <Header />
      {/* {cryptoStatus === "done" ? (
        <CryptoStats stats={cryptoData.stats} />
      ) : (
        <></>
      )}
      {cryptoStatus === "done" ? (
        <CryptoCurrencies coins={cryptoData.coins} />
      ) : (
        <></>
      )} */}
    </React.Fragment>
  );
};

const CryptoStats = ({ stats }) => {
  return (
    <div className="font-primary mx-4 md:mx-6 p-4 md:p-8">
      <h1 className="text-white font-medium mb-6 md:text-xl">Crypto Stats</h1>
      <div className="flex flex-col md:flex-row md:w-full md:justify-between md:items-center">
        <div className="mb-6">
          <p className="text-secondary uppercase font-medium text-sm mb-1">
            coins
          </p>
          <h1 className="text-white font-semibold text-2xl">
            {formatNum(stats.totalCoins)}
          </h1>
        </div>
        <div className="mb-6">
          <p className="text-secondary uppercase font-medium text-sm mb-1">
            markets
          </p>
          <h1 className="text-white font-semibold text-2xl">
            {" "}
            {formatNum(stats.totalMarkets)}
          </h1>
        </div>
        <div className="mb-6">
          <p className="text-secondary uppercase font-medium text-sm mb-1">
            exchanges
          </p>
          <h1 className="text-white font-semibold text-2xl">
            {formatNum(stats.totalExchanges)}
          </h1>
        </div>
        <div className="mb-6">
          <p className="text-secondary uppercase font-medium text-sm mb-1">
            market cap
          </p>
          <h1 className="text-white font-semibold text-2xl">
            {formatNum(stats.totalMarketCap)}
          </h1>
        </div>
        <div className="mb-6">
          <p className="text-secondary uppercase font-medium text-sm mb-1">
            24h value
          </p>
          <h1 className="text-white font-semibold text-2xl">
            {formatNum(stats.total24hVolume)}
          </h1>
        </div>
      </div>
    </div>
  );
};

const CryptoCurrencies = ({ coins }) => {
  return (
    <div className="mx-4 md:mx-6 p-4 md:p-8">
      <h1 className="text-white font-medium mb-6 md:text-xl font-primary">
        Crypto Currencies
      </h1>
      <div className="flex justify-between flex-wrap items-start">
        {coins.map((coin) => (
          <Card key={coin.uuid}>
            <div className="w-full flex justify-between items-center mb-4">
              <h1 className="font-medium capitalize text-secondary text-lg">
                {coin.name}
              </h1>
              <img src={coin.iconUrl} alt={coin.name} className="w-14 h-14" />
            </div>
            <div className="flex flex-col justify-evenly">
              <div className="w-full flex justify-between items-center">
                <h1 className="capitalize">price:</h1>
                <p className="">{formatNum(coin.price)}</p>
              </div>
              <div className="w-full flex justify-between items-center">
                <h1 className="capitalize">market cap:</h1>
                <p className="">{formatNum(coin.marketCap)}</p>
              </div>
              <div className="w-full flex justify-between items-center">
                <h1 className="capitalize">24h volume:</h1>
                <p className="">{formatNum(coin["24hVolume"])}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
