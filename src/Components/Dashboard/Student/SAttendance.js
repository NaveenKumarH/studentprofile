import React, { Component } from "react";
import { connect } from "react-redux";
import ssas from "../../../store/Actions/SSAS";

export class SAttendance extends Component {
  state = {
    sub: "",
    id: this.props.id
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleClick = e => {
    e.preventDefault();
    this.props.search(this.state);
    console.log(this.state);
  };
  render() {
    return (
      <div className="center container">
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
          <button className="btn green white-text" onClick={this.handleClick}>
            Search
          </button>
        </div>
        {this.props.attendance.pre === undefined ? (
          <div></div>
        ) : this.props.attendance.pre === "no" ? (
          <div className="white-text">No data found</div>
        ) : (
          <div className="row white-text">
            <div className="row">
              <div className="col s2 left-align">Attendance Percentage</div>
              <div className="col s1">:</div>
              <div className="col s2">{this.props.attendance.s.details.ap}</div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
const mapstate = state => {
  return {
    attendance: state.attendance,
    id: state.firebase.auth.uid
  };
};
const mapdispatch = dispatch => {
  return {
    search: details => dispatch(ssas(details))
  };
};
export default connect(
  mapstate,
  mapdispatch
)(SAttendance);
