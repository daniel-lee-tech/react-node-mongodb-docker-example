import AddCat from "./components/AddCat";
import { getAllCats } from "./apiCalls/cats";
import { Cat } from "./components/Cat";
import { useEffect, useState } from "react";

function App() {
  const [allCats, setAllCats] = useState([]);

  function updateAllCats() {
    getAllCats().then((response) => setAllCats(response));
  }

  useEffect(() => {
    updateAllCats();
  }, []);

  return (
    <div className="App">
      <div>
        <h2>All Cats</h2>
        <div>
          {allCats.map((cat) => (
            <Cat key={cat._id} cat={cat} updateAllCats={updateAllCats} />
          ))}
        </div>
      </div>
      <AddCat updateAllCats={updateAllCats} />
    </div>
  );
}

export default App;
