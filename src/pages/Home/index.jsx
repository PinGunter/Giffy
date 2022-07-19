import React, { useCallback } from "react";
import ListOfGifs from "../../components/ListOfGifs";
import { useGifs } from "../../hooks/useGifs";
import TrendingSearches from "../../components/TrendingSearches";
import Spinner from "../../components/Spinner";
import SearchForm from "../../components/SearchForm";
import { Helmet } from "react-helmet";

export default function Home() {
  const { loading, gifs } = useGifs();

  return (
    <>
      <Helmet>
        <title>Home || Giffy</title>
      </Helmet>
      <header className="o-header">
        <SearchForm />
      </header>
      <div className="App-main">
        <div className="App-results">
          <>
            {loading ? (
              <Spinner />
            ) : (
              <>
                <h3 className="App-title">Última búsqueda</h3>
                <ListOfGifs gifs={gifs} />
              </>
            )}
          </>
        </div>
        <div className="App-category">
          <TrendingSearches />
        </div>
      </div>
    </>
  );
}
