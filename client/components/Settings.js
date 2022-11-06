import React from "react";
import { connect } from "react-redux";
import { fetchStars, setSingleConstellation } from "../redux/starReducer.js";

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedConstellation: "",
      open: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      selectedConstellation: e.target.value,
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    try {
      await this.props.setConstellation(this.state.selectedConstellation);
      await this.props.loadStars();
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div id="settings">
        <h2>Settings</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
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
          <button type="submit">Set Constellation</button>
        </form>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    state: state,
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
