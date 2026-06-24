import React from "react";
import "./App.css";
import Section from "./components/Section+Footer/Section";
import Footer from "./components/Section+Footer/Footer";

const App = () => {
  return (
    <div>
      <header></header>
      <main>
        <Section />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
