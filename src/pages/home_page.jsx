import React from "react";
import Header from "../components/header";
import CryptoCurrencies from "../components/crypto_currencies";
import CryptoNews from "../components/crypto_news";
import { formatNum } from "../services/utils/helpers";
import Loader from "../components/loader";

const HomePage = ({ crypto, news }) => {
  const { data: cryptoData, status: cryptoStatus, error: cryptoErr } = crypto;
  const { data: newsData, status: newsStatus, error: newsErr } = news;

  return (
    <div className="md:px-6">
      <Header />
      {cryptoStatus !== "done" ? (
        <Loader />
      ) : (
        <React.Fragment>
          <CryptoStats stats={cryptoData.stats} />
          <CryptoCurrencies coins={cryptoData.coins} />
        </React.Fragment>
      )}
      {newsStatus !== "done" ? (
        <Loader />
      ) : (
        <CryptoNews news={newsData.value} />
      )}
    </div>
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

export default HomePage;
