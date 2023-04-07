import { useState } from "react";
import "./App.css";
import axios from 'axios';

function App() {
  const [keyWord, setKeyWord] = useState("");

  const api = "https://api.dictionaryapi.dev/api/v2/entries/en"

  async function handleSearch() {
    try {
      const res = await axios.get(`${api}/${keyWord}`);
      console.log(res, 'res');
    } catch (e) {
      console.log({ e })
    }
  }

  function handleClear() {
    setKeyWord("")
  }

  return (
    <div className="App">
      <input value={keyWord} onChange={(e) => setKeyWord(e.target.value)} />
      <button className="button" type="submit" onClick={handleSearch}>
        Search
      </button>
      <button className="button" type="submit" onClick={handleClear}>
        clear
      </button>
    </div>
  );
}

export default App;
