import React, { useEffect, useState, useRef } from "react";
import getTrendingTerms from "../../services/getTrendingTermsService";
import Category from "../Category";

export default function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    (async () => {
      const newTrends = await getTrendingTerms();
      setTrends(newTrends);
    })();
  }, []);

  return <Category name="Tendencias" options={trends} />;
}
