import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        {" "}
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          Coded by Shelley White-Lyons <br /> Open-Sourced on{" "}
          <a href="https://github.com/wkshelley/dictionary-app">GitHub</a>{" "}
          hosted on{" "}
          <a href="https://modest-bardeen-12d2c7.netlify.app/">Netlify</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
