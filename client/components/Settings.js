import React from "react";
import { connect } from "react-redux";
import {
  fetchStars,
  setSingleConstellation,
  setColor,
} from "../redux/starReducer.js";

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedConstellation: "",
      open: false,
    };
    this.handleSubmitConstellation = this.handleSubmitConstellation.bind(this);
    this.handleChangeConstellation = this.handleChangeConstellation.bind(this);
    this.handleSubmitColor = this.handleSubmitColor.bind(this);
  }

  handleChangeConstellation(e) {
    this.setState({
      selectedConstellation: e.target.value,
    });
  }

  async handleSubmitConstellation(e) {
    e.preventDefault();
    try {
      await this.props.setConstellation(this.state.selectedConstellation);
      await this.props.loadStars();
    } catch (error) {
      console.error(error);
    }
  }

  async handleSubmitColor(e) {
    e.preventDefault();
    try {
      await this.props.setColor(!this.props.color);
      await this.props.loadStars();
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div id="settings">
        <h2>Settings</h2>
        <h3>Constellation</h3>
        <form onSubmit={(e) => this.handleSubmitConstellation(e)}>
          <select
            name="constellation-select"
            id="constellation-select"
            onChange={this.handleChangeConstellation}
          >
            <option value="">Select constellation...</option>
            <option value="And">Andromeda</option>
            <option value="Tau">Taurus</option>
            <option value="Lyr">Lyra</option>
            <option value="Ori">Orion</option>
            <option value="Her">Hercules</option>
          </select>
          <button type="submit">Set Constellation</button>
        </form>
        <h3>Colorize</h3>

        <div>
          <input
            id="bV"
            type="checkbox"
            onChange={(e) => this.handleSubmitColor(e)}
          />
          <label for="bV">B-V Value</label>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    state: state,
    stars: state.stars,
    constellations: state.constellations,
    color: state.colorIndex,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadStars: () => dispatch(fetchStars()),
    setConstellation: (constellation) =>
      dispatch(setSingleConstellation(constellation)),
    setColor: (toggled) => dispatch(setColor(toggled)),
  };
};

export default connect(mapState, mapDispatch)(Settings);
