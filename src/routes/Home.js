import React from "react";
import axios from "axios";
import Movies from "../components/Movies";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }; //can save State with Redux

  getMovies = async () => {
    const {
      data: { data }
    } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
    );

    this.setState({ data, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, data } = this.state;

    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          data.movies.map(movie => (
            <Movies
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              rating={movie.rating}
              genres={movie.genres}
              big_poster={movie.large_cover_image}
              runtime={movie.runtime}
            />
          ))
        )}
      </section>
    );
  }
}

export default Home;
