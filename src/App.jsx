import React from "react";
import "./App.css";
import Discover from "./components/discover/Discover";

const App = () => {
  return (
    <div>
      <header>Header</header>
      <main>
        <Discover />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default App;
