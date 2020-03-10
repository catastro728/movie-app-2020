import React from "react";
import PropTypes from "prop-types";
import "./Movies.css";
import { Link } from "react-router-dom";

function Movies({
  id,
  year,
  title,
  summary,
  poster,
  rating,
  genres,
  big_poster,
  runtime
}) {
  return (
    <Link
      to={{
        pathname: `/movie/${id}`,
        state: {
          year,
          title,
          summary,
          poster,
          rating,
          genres,
          big_poster,
          runtime
        }
      }}
      style={{ color: "black", textDecoration: "none" }}
    >
      <div className="movie">
        <img className="poster" src={poster} alt={title} title={title}></img>
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <div className="middle">
            <ul className="movie__genres">
              {genres.map((genre, index) => (
                <li key={index} className="genres__genre">
                  {genre}
                </li>
              ))}
            </ul>
            <h4 className="movie__rating">★{rating}</h4>
          </div>
          <p className="movie__summary">{summary.slice(0, 250)}...</p>
        </div>
      </div>
    </Link>
  );
}

Movies.prototype = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  big_poster: PropTypes.string.isRequired,
  runtime: PropTypes.number.isRequired
};

export default Movies;
