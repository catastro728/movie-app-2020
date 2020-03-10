import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/"); //Block wrong access
    }
  }

  render() {
    const {
      location: { state }
    } = this.props;
    console.log(state);
    if (state) {
      return (
        <div className="detail">
          <div className="box_poster">
            <img
              className="detail__poster"
              src={state.big_poster}
              alt={state.title}
              title={state.title}
            ></img>
          </div>
          <div className="detail__data">
            <h1 className="detail__title">{state.title}</h1>
            <h4 className="detail__year">release : {state.year}</h4>
            <h4 className="detail__rating">rating : {state.rating} / 10</h4>
            <h4 className="detail__runtime">runtime : {state.runtime} min</h4>
            <ul className="detail__genres">
              {state.genres.map((genre, index) => (
                <li key={index} className="detail__genres__genre">
                  {genre}
                </li>
              ))}
            </ul>
            <p className="detail__summary">{state.summary}</p>
          </div>
        </div>
      );
    } else return null;
  }
}

export default Detail;
