import { useState, useEffect, useRef } from "react";

function useNearScreen({ distance = "100px", externalRef, once = true } = {}) {
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef();

  useEffect(() => {
    let observer;
    const element = externalRef ? externalRef.current : fromRef.current;

    const onChange = (entries, observer) => {
      const element = entries[0];
      console.log(element.isIntersecting);
      if (element.isIntersecting) {
        setShow(true);
        once && observer.disconnect();
      } else {
        !once && setShow(false);
      }
    };

    Promise.resolve(
      typeof IntersectionObserver !== "undefined"
        ? IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance,
      });
      observer && observer.observe(element);
    });
  });
  return { isNearScreen, fromRef };
}

export { useNearScreen };
