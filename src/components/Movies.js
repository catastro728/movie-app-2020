import React from "react";
import PropTypes from "prop-types";
import "./Movies.css";

function Movies({ year, title, summary, poster, rating, genres }) {
  return (
    <div className="movie">
      <img className="poster" src={poster} alt={title} title={title}></img>
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <div className="middle">
          <h4 className="movie__year">{year}</h4>
          <h4 className="movie__rating">{rating}★</h4>
        </div>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>

        <p className="movie__summary">{summary.slice(0, 250)}...</p>
      </div>
    </div>
  );
}

Movies.prototype = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movies;
