import React from "react";
import "./App.css";
import Discover from "./components/discover/Discover";
import Banner from "./components/Banner/Banner"


const App = () => {
  return (
    <div>
      <header>Header</header>
      <main>
        <Banner />
        <Discover />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default App;
