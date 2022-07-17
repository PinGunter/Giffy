import { useEffect, useState } from "react";
import getSingleGif from "../services/getSingleGif";
import { useGifs } from "./useGifs";

export default function useSingleGif({ id }) {
  const { gifs } = useGifs();
  const gifFromCache = gifs.find((singleGif) => singleGif.id === id);

  const [gif, setGif] = useState(gifFromCache);
  const [isLoading, setIsLoading] = useState(!gif);

  useEffect(() => {
    if (!gif) {
      setIsLoading(true);
      (async () => {
        const newGif = await getSingleGif({ id });
        setGif(newGif);
        setIsLoading(false);
      })();
    }
  }, [gif, id]);

  return { gif, isLoading };
}
