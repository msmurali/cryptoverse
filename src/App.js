import "./app.css";
import useFetch from "./hooks/useFetch";
import HomePage from "./pages/home_page";
import { headers, endPoints } from "./services/api/coins_api";

function App() {
  const {
    data: cryptoData,
    status: cryptoStatus,
    error: cryptoErr,
  } = useFetch({
    url: endPoints.coins(),

    headers,
  });

  return (
    <div className="app min-h-screen bg-primary">
      <HomePage />
    </div>
  );
}

export default App;
