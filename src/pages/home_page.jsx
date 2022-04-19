import React from "react";
import Header from "../components/header";
import Card from "../components/card";
import { formatNum } from "../services/utils/helpers";
import Loader from "../components/loader";
import Logo from "../asset/icons/logo.svg";

const HomePage = ({ crypto, news }) => {
  const { data: cryptoData, status: cryptoStatus, error: cryptoErr } = crypto;
  const { data: newsData, status: newsStatus, error: newsErr } = news;

  return (
    <div className="md:px-2">
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

const CryptoCurrencies = ({ coins, count = 12 }) => {
  return (
    <div className="mx-4 md:mx-6 p-4 md:p-8">
      <h1 className="text-white font-medium mb-6 md:text-xl font-primary flex justify-between items-center">
        Crypto Currencies
        <span className="font-medium cursor-pointer text-sm font-primary text-secondary hidden md:inline">
          SHOW MORE
        </span>
      </h1>
      <div className="flex justify-between flex-wrap items-start">
        {coins.slice(0, count).map((coin) => (
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
      <span className="font-medium cursor-pointer block text-sm font-primary text-secondary text-center mx-auto my-6 md:hidden">
        SHOW MORE
      </span>
    </div>
  );
};

const CryptoNews = ({ news, count = 12 }) => {
  return (
    <div className="mx-4 md:mx-6 p-4 md:p-8">
      <h1 className="text-white font-medium mb-6 md:text-xl font-primary flex justify-between items-center">
        Crypto News
        <span className="font-medium cursor-pointer text-sm font-primary text-secondary hidden md:inline">
          SHOW MORE
        </span>
      </h1>
      <div className="flex justify-between flex-wrap items-start">
        {news.slice(0, count).map((news) => {
          return (
            <Card key={news.datePublished}>
              <div className="w-full flex justify-between items-center mb-4">
                <h1 className="font-medium capitalize text-secondary text-lg">
                  {`${news.name.slice(0, 40)}...`}
                </h1>
                <img
                  src={news?.image?.thumbnail?.contentUrl || Logo}
                  alt="thumbnail"
                  className="w-14 h-14 rounded ml-4"
                />
              </div>
              <div className="flex flex-col justify-evenly">
                <p className="">{`${news.description.slice(0, 60)}...`}</p>
                <p>
                  <img
                    src={news.provider[0]?.image?.thumbnail?.contentUrl || Logo}
                    alt="thumbnail"
                    className="w-6 h-6 rounded inline mr-4"
                  />
                  {news?.provider[0]?.name || ""}
                </p>
              </div>
            </Card>
          );
        })}
      </div>
      <span className="font-medium cursor-pointer block text-sm font-primary text-secondary text-center mx-auto my-6 md:hidden">
        SHOW MORE
      </span>
    </div>
  );
};

export default HomePage;
