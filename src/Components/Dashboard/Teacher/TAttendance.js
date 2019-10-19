import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ssa from "../../../store/Actions/SSA";

export class TAttendance extends Component {
  state = {
    srn: "",
    sub: ""
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
      <div className="center container">
        <div className="btn green white-text row">
          <Link to="/taddattend" className="white-text">
            Add New
          </Link>
        </div>
        <div className="row input-field">
          <label>Subject</label>
          <input
            className="white"
            type="text"
            id="sub"
            onChange={this.handleChange}
          ></input>
        </div>
        <div className="row input-field ">
          <label>Student Roll No.</label>
          <input
            type="text"
            className="col white"
            onChange={this.handleChange}
            id="srn"
          ></input>
          <button className="btn green white-text" onClick={this.handleClick}>
            Search
          </button>
        </div>
        ;
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
    search: details => dispatch(ssa(details))
  };
};
export default connect(
  mapstate,
  mapdispatch
)(TAttendance);
