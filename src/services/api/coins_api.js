const BASE_URL = "https://coinranking1.p.rapidapi.com";

const headers = {
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  "X-RapidAPI-Key": "4201501428mshc40cc43463959e1p179365jsnf3eb6fcddfed",
};

const endPoints = {
  coins: () => "/coins",
  coin: (uuid) => `/coin/${uuid}`,
  history: (uuid) => `/${uuid}/history`,
  exchanges: (uuid) => `/${uuid}/exchanges`,
};
