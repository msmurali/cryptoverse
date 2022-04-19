const BASE_URL = "https://bing-news-search1.p.rapidapi.com/news";

const headers = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
  "X-RapidAPI-Key": "4201501428mshc40cc43463959e1p179365jsnf3eb6fcddfed",
};

const endPoints = {
  search: (query) => ({
    method: "GET",
    url: `${BASE_URL}/search`,
    params: {
      q: query,
      count: "50",
      freshness: "Day",
      textFormat: "Raw",
      safeSearch: "Off",
    },
    headers,
  }),
};

export { endPoints };
