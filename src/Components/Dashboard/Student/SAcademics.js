import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import search from "../../../store/Actions/Search";
export class SAcademics extends Component {
  state = {
    se: "",
    tid: this.props.tid
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
        <div className="row input-field">
          <label>Exam.</label>
          <input
            className="white"
            type="text"
            id="exam"
            onChange={this.handleChange}
          ></input>
        </div>
        <div className="row input-field ">
          <label>Student Roll No.</label>
          <input
            type="text"
            className="col white"
            onChange={this.handleChange}
            id="se"
          ></input>
          <button className="btn green white-text" onClick={this.handleClick}>
            Search
          </button>
        </div>
        {this.props.academics.pre === undefined ? (
          <div></div>
        ) : this.props.academics.pre === "no" ? (
          <div className="white-text">No data found</div>
        ) : (
          <div className="row white-text">
            <div className="row">
              <div className="col s2 left-align">Student Roll No.</div>
              <div className="col s1">:</div>
              <div className="col s2">{this.props.academics.s.details.srn}</div>
            </div>

            <div className="row">
              <div className="col s2 left-align">Subject</div>
              <div className="col s1">:</div>
              <div className="col s2">{this.props.academics.s.details.sub}</div>
            </div>
            <div className="row">
              <div className="col s2 left-align">Mark</div>
              <div className="col s1">:</div>
              <div className="col s2">
                {this.props.academics.s.details.mark}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
const mapstate = state => {
  return {
    academics: state.academic,
    tid: state.firebase.auth.uid
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
)(SAcademics);
