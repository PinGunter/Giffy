import React, { useCallback } from "react";
import ListOfGifs from "../../components/ListOfGifs";
import { useGifs } from "../../hooks/useGifs";
import { useLocation } from "wouter";
import TrendingSearches from "../../components/TrendingSearches";
import Spinner from "../../components/Spinner";
import SearchForm from "../../components/SearchForm";
import { Helmet } from "react-helmet";

export default function Home() {
  const { loading, gifs } = useGifs();
  const [location, setLocation] = useLocation();

  const handleSubmit = useCallback(
    ({ keyword }) => {
      if (keyword) setLocation(`/search/${keyword}`);
    },
    [setLocation]
  );

  return (
    <>
      <Helmet>
        <title>Home || Giffy</title>
      </Helmet>
      <SearchForm onSubmit={handleSubmit} />
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
