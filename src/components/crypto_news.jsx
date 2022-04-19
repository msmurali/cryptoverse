import React from "react";
import FlexContainer from "./flex_container";
import Placeholder from "../asset/images/placeholder.jpg";

import Card from "../components/card";

const CryptoNews = ({ news, count = 12 }) => {
  return (
    <FlexContainer title="Crypto News">
      {news.slice(0, count).map((news, index) => {
        return (
          <Card key={index}>
            <div className="w-full flex justify-between items-center mb-4">
              <h1 className="font-medium capitalize text-secondary text-lg">
                {`${news.name.slice(0, 40)}...`}
              </h1>
              <img
                src={news?.image?.thumbnail?.contentUrl || Placeholder}
                alt="thumbnail"
                className="w-14 h-14 rounded ml-4"
              />
            </div>
            <div className="flex flex-col justify-evenly">
              <p className="">{`${news.description.slice(0, 60)}...`}</p>
              <p>
                <img
                  src={
                    news.provider[0]?.image?.thumbnail?.contentUrl ||
                    Placeholder
                  }
                  alt="thumbnail"
                  className="w-6 h-6 rounded inline mr-4"
                />
                {news?.provider[0]?.name || ""}
              </p>
            </div>
          </Card>
        );
      })}
    </FlexContainer>
  );
};

export default CryptoNews;
