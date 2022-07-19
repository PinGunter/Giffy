import React from "react";
import { useLocation } from "wouter";
import { useForm } from "./useForm";

const RATINGS = ["g", "pg", "pg-13", "r"];

function SearchForm({ initialKeyword = "", initialRating = "g" }) {
  const [location, setLocation] = useLocation();

  const { keyword, rating, updateKeyboard, updateRating } = useForm({
    initialKeyword,
    initialRating,
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (keyword) setLocation(`/search/${keyword}/${rating}`);
  };

  const handleChange = ({ target }) => {
    updateKeyboard(target.value);
  };

  const handleChangeRating = ({ target }) => {
    updateRating(target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button>Buscar</button>
      <input
        placeholder="Search a gif here..."
        onChange={handleChange}
        type="text"
        value={keyword}
      />
      <select value={rating} onChange={handleChangeRating}>
        <option disabled>Rating:</option>
        {RATINGS.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
    </form>
  );
}

export default React.memo(SearchForm);
