const BASE_URL = "https://coinranking1.p.rapidapi.com";

const headers = {
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  "X-RapidAPI-Key": "4201501428mshc40cc43463959e1p179365jsnf3eb6fcddfed",
};

const endPoints = {
  coins: () => `${BASE_URL}/coins`,
  coin: (uuid) => `${BASE_URL}/coin/${uuid}`,
  history: (uuid) => `${BASE_URL}/${uuid}/history`,
  exchanges: (uuid) => `${BASE_URL}/${uuid}/exchanges`,
};

export { headers, endPoints };
