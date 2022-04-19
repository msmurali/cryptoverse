import React from "react";
import Header from "../components/header";

const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <CryptoStats />
      <Card />
    </React.Fragment>
  );
};

const CryptoStats = () => {
  return (
    <div className="font-primary mx-4 md:mx-6 p-4 md:p-8">
      <h1 className="text-white font-medium mb-6 md:text-xl">Crypto Stats</h1>
      <div className="flex flex-col md:flex-row md:w-full md:justify-between md:items-center">
        <div className="mb-6">
          <p className="text-secondary uppercase font-medium text-sm mb-1">
            coins
          </p>
          <h1 className="text-white font-semibold text-2xl">17.3K</h1>
        </div>
        <div className="mb-6">
          <p className="text-secondary uppercase font-medium text-sm mb-1">
            coins
          </p>
          <h1 className="text-white font-semibold text-2xl">17.3K</h1>
        </div>
        <div className="mb-6">
          <p className="text-secondary uppercase font-medium text-sm mb-1">
            market cap
          </p>
          <h1 className="text-white font-semibold text-2xl">$ 2.4T</h1>
        </div>
        <div className="mb-6">
          <p className="text-secondary uppercase font-medium text-sm mb-1">
            exchanges
          </p>
          <h1 className="text-white font-semibold text-2xl">373</h1>
        </div>
        <div>
          <p className="text-secondary uppercase font-medium text-sm mb-1">
            24h value
          </p>
          <h1 className="text-white font-semibold text-2xl">$ 92.3B</h1>
        </div>
      </div>
    </div>
  );
};

const Card = () => {
  return <div className="card w-80 h-60"></div>;
};

export default HomePage;
