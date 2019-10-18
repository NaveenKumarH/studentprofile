import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import search from "../../../store/Actions/Search";

export class TAcademics extends Component {
  state = {
    se: ""
  };
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
        <div className="btn green white-text row">
          <Link to="/taddacademics" className="white-text">
            Add New
          </Link>
        </div>
        <div className="row">
          <input
            type="text"
            className="col white input-field"
            onChange={this.handleChange}
            id="se"
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
    academic: state.academic
  };
};
const mapdispatch = dispatch => {
  return {
    search: details => dispatch(search(details))
  };
};
export default connect(
  mapstate,
  mapdispatch
)(TAcademics);
