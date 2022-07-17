import React from "react";
import "./App.css";
import { Route, useLocation, Link } from "wouter";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import { GifsContextProvider } from "./context/GifsContext";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <figure className="App-logo">
            <img alt="Giffy logo" src="/logo.png" />
          </figure>
        </Link>
        <GifsContextProvider>
          <Route component={Home} path="/" />
          <Route component={SearchResults} path="/search/:keyword" />
          <Route component={Detail} path="/gif/:id" />
          <Route component={() => <h1>{"404 ERROR :("}</h1>} path="/404" />
        </GifsContextProvider>
      </section>
    </div>
  );
}

export default App;
