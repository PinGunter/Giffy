import { useContext, useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import GifsContext from "../context/GifsContext";

const INITIAL_PAGE = 0;

export function useGifs({ keyword } = { keyword: null }) {
  const { gifs, setGifs } = useContext(GifsContext);
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);

  const keywordInUse = keyword || localStorage.getItem("keyword");

  useEffect(() => {
    setLoading(true);
    let newGifs;
    (async () => {
      newGifs = await getGifs({ keyword: keywordInUse });
      setGifs(newGifs);
      setLoading(false);
      localStorage.setItem("keyword", keywordInUse);
    })();
  }, [keywordInUse, setGifs]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    setLoadingNextPage(true);

    let nextGifs;

    (async () => {
      nextGifs = await getGifs({ keyword: keywordInUse, page });
      setGifs((prevGifs) => {
        return prevGifs.concat(nextGifs);
      });
      setLoadingNextPage(false);
    })();
  }, [page, keywordInUse, setGifs]);

  return { loading, loadingNextPage, gifs, setPage };
}
