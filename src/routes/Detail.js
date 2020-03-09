import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/"); //Block wrong access
    }
  }

  render() {
    const { location } = this.props;
    console.log(location.state);
    if (location.state) {
      return <div>{location.state.title}</div>;
    } else return null;
  }
}

export default Detail;
