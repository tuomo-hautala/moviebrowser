import React, { useEffect, useContext } from "react";
import "./App.css";
import { MoviesContext } from "./AppContext";

import Movies from "./components/Movies";
import SelectedMovie from "./components/SelectedMovie";

function App() {
  const { isLoading, appState, setScrollLock } = useContext(MoviesContext);

  useEffect(() => {
    appState !== 0 ? setScrollLock(true) : setScrollLock(false);
  }, [appState, setScrollLock]);

  return (
    <div className="App">
      <Movies />
      <div
        className="SelectedMovieContent"
        style={
          appState === 2 && isLoading === false
            ? { opacity: "1", transform: "translateX(0%)" }
            : { opacity: "0", transform: "translateX(100%)" }
        }
      >
        <SelectedMovie />
      </div>
    </div>
  );
}

export default App;
