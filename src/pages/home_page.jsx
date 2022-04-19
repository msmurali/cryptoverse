import React from "react";
import Header from "../components/header";
import { formatNum } from "../services/utils/helpers";

const HomePage = ({ crypto }) => {
  const { data: cryptoData, status: cryptoStatus, error: cryptoErr } = crypto;
  // // const { newsData, newsStatus, newsErr } = news;

  return (
    <React.Fragment>
      <Header />
      {cryptoStatus === "done" ? (
        <CryptoStats stats={cryptoData.stats} />
      ) : (
        <></>
      )}
      <Card />
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

const Card = () => {
  return <div className="card w-80 h-60"></div>;
};

export default HomePage;
