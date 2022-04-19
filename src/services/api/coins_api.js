const BASE_URL = "https://coinranking1.p.rapidapi.com";

const headers = {
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  "X-RapidAPI-Key": "4201501428mshc40cc43463959e1p179365jsnf3eb6fcddfed",
};

const configOptions = {
  method: "GET",
  headers,
};

const endPoints = {
  coins: () => ({
    ...configOptions,
    url: `${BASE_URL}/coins`,
  }),
  coin: (uuid) => ({ ...configOptions, url: `${BASE_URL}/coin/${uuid}` }),
  history: (uuid) => ({ ...configOptions, url: `${BASE_URL}/${uuid}/history` }),
  exchanges: (uuid) => ({
    ...configOptions,
    url: `${BASE_URL}/${uuid}/exchanges`,
  }),
};

export { endPoints };
