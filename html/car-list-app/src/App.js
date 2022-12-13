import MainNav from "./components/MainNav";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [carData, setCarData] = useState([]);

  // get some data
  useEffect(() => {
    const clientId = "bPWVNq3Jw4IKnzObHBgDiC8KoAXPCl7oXg1ldS8TxgU";
    const searchTerm = "cars";
    const resource = `https://api.unsplash.com/search/photos/?query=${searchTerm}&per_page=20&client_id=${clientId}`;

    fetch(resource)
      .then((res) => res.json())
      .then((data) => setCarData(data.results));
  }, []);

  return (
    <div className="App">
      {/* Add a navbar */}
      <MainNav />
      {/* Add card container */}
      <div className="card-container">
        {carData &&
          carData.map((data, index) => (
            <p key={index}>{data.alt_description}</p>
          ))}
      </div>
    </div>
  );
}

export default App;