import { useEffect, useRef } from "react";

export default function useTitle({ title }) {
  const prevTitle = useRef(document.title);
  useEffect(() => {
    document.title = `${title} | Giffy`;
  }, [title]);
}
