import "./App.css";
import Cards from "./components/cards/Cards";
import Section from "./components/Section+Footer/Section";
import Footer from "./components/Section+Footer/Footer";
import Location from "./components/location/Location";
import Discover from "./components/discover/Discover";
import Banner from "./components/Banner/Banner"


const App = () => {
  return (
    <div>
      <header>Header</header>
      <main>
        <Cards />
        <Banner />
        <Discover />
        <Section />
        <Location />
      </main>
      <Footer />
    </div>
  );
};

export default App;