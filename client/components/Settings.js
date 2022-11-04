import React, { StrictMode, useEffect } from "react";
import { connect } from "react-redux";
import { fetchStars, setSingleConstellation } from "../redux/starReducer.js";

class Settings extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="settings">
        <form>
          <select
            name="constellation-select"
            id="constellation-select"
            onChange={this.handleChange}
          >
            <option value="">Select constellation...</option>
            <option value="And">Andromeda</option>
            <option value="Tau">Taurus</option>
            <option value="Lyr">Lyra</option>
          </select>
        </form>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    stars: state.stars,
    constellations: state.constellations,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadStars: () => dispatch(fetchStars()),
    setConstellation: (constellation) =>
      dispatch(setSingleConstellation(constellation)),
  };
};

export default connect(mapState, mapDispatch)(Settings);
