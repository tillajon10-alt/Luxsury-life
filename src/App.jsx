import "./App.css";

import Location from "./components/location/Location";
import Discover from "./components/discover/Discover";
import Banner from "./components/Banner/Banner"


const App = () => {
  return (
    <div>
      <header>Header</header>
      <main>
        <Banner />
        <Discover />
        <Location />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default App;
