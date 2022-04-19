import React from "react";
import { formatNum } from "../services/utils/helpers";
import FlexContainer from "./flex_container";

import Card from "../components/card";

const CryptoCurrencies = ({ coins, count = 12 }) => {
  return (
    <FlexContainer title="Crypto Currencies">
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
    </FlexContainer>
  );
};

export default CryptoCurrencies;
