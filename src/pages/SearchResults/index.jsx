import React, { useEffect, useRef, useCallback } from "react";
import ListOfGifs from "../../components/ListOfGifs";
import { useGifs } from "../../hooks/useGifs";
import Spinner from "../../components/Spinner";
import { useNearScreen } from "../../hooks/useNearScreen";
import debounce from "just-debounce-it";
import { Helmet } from "react-helmet";
import SearchForm from "../../components/SearchForm";

export default function SearchResults({ params }) {
  const { keyword, rating = "g" } = params;
  const { loading, gifs, setPage } = useGifs({ keyword, rating });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  const title = gifs
    ? `${gifs.length} resultados de ${decodeURI(keyword)}`
    : "";

  const handleNextPage = () => {
    setPage((currentPage) => {
      return currentPage + 1;
    });
  };

  // const handleNextPage = () => console.log("next page");

  const debounceHandleNextPage = useCallback(debounce(handleNextPage, 200), []);

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage();
  }, [debounceHandleNextPage, isNearScreen]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={title} />
          </Helmet>
          <header className="o-header">
            <SearchForm initialKeyword={keyword} initialRating={rating} />
          </header>
          <h3 className="App-title">{decodeURI(params.keyword)}</h3>
          <ListOfGifs gifs={gifs} />
          <div id="visor" ref={externalRef}></div>
        </>
      )}
    </>
  );
}
