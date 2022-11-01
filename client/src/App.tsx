// import React from 'react';
import './App.css';
// import axios from "axios";
// import { useEffect, useState } from "react";

// type Artist = {
//   id: number;
//   name: string;
//   profile: string;
//   nationality: string;
//   image: string;
//   created_at: string;
//   updated_at: string;
// };

function App() {
  // const [artists, setArtists] = useState<Artist[]>([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/api/artist/")
  //     .then((response) => setArtists(response.data))
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
