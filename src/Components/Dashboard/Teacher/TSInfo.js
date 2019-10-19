import React, { Component } from "react";
import { connect } from "react-redux";
import sds from "../../../store/Actions/SDS";
export class TSInfo extends Component {
  state = { srn: "" };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleClick = e => {
    e.preventDefault();
    this.props.search(this.state);
  };
  render() {
    return (
      <div className="container center">
        <div className="row input-field">
          <label>Student Reg No.</label>
          <input
            className="white"
            type="text"
            id="srn"
            onChange={this.handleChange}
          ></input>
          <button className="btn green white-text" onClick={this.handleClick}>
            Search
          </button>
        </div>
      </div>
    );
  }
}
const mapstate = state => {
  return {
    academics: state.academic
  };
};
const mapdispatch = dispatch => {
  return {
    search: details => dispatch(sds(details))
  };
};
export default connect(
  mapstate,
  mapdispatch
)(TSInfo);
