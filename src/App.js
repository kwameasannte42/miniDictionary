import { useState } from "react";
import "./App.css";
import axios from "axios";
import ListDetails from "./components/ListDetails";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [keyWord, setKeyWord] = useState("");

  const [result, setResult] = useState(null);

  const api = "https://api.dictionaryapi.dev/api/v2/entries/en";

  async function handleSearch() {
    try {
      const res = await axios.get(`${api}/${keyWord}`);
      console.log(res, "res");
      setResult(res.data[0]);
    } catch (e) {
      console.log({ e });
    }
  }

  function handleClear() {
    setKeyWord("");
    setResult(null);
  }

  return (
    <div className="App">
      <input value={keyWord} onChange={(e) => setKeyWord(e.target.value)} />
      <button className="button" type="submit" onClick={handleSearch}>
        Search
      </button>
      <button
        disabled={!result}
        className="button"
        type="submit"
        onClick={handleClear}
      >
        clear
      </button>

      {result && <ListDetails {...{ result }} />}
    </div>
  );
}

export default App;
