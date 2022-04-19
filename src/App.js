import React from "react";
import "./app.css";
import useFetch from "./hooks/useFetch";
import HomePage from "./pages/home_page";
import { endPoints as coinsApiEndPoints } from "./services/api/coins_api";
import { endPoints as newsApiEndPoints } from "./services/api/news_api";

function App() {
  const cryptoApiConfig = React.useMemo(coinsApiEndPoints.coins, []);
  // const newsApiConfig = React.useMemo(newsApiEndPoints.search, []);

  const crypto = useFetch(cryptoApiConfig);
  // const news = useFetch(newsApiConfig);

  return (
    <div className="app min-h-screen bg-primary">
      <HomePage crypto={crypto} />
    </div>
  );
}

export default App;
