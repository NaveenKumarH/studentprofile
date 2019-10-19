import React, { Component } from "react";
import { connect } from "react-redux";
import addattend from "../../../store/Actions/AttendAction";
export class TAddAttend extends Component {
  state = {};
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addattend(this.state);
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Add New Attendance detail</h5>
          <br></br>
          <div className="input-field">
            <label>Student Roll No.</label>
            <input type="text" id="srn" onChange={this.handleChange}></input>
          </div>

          <div className="input-field">
            <label>Subject</label>
            <input type="text" id="sub" onChange={this.handleChange}></input>
          </div>
          <div className="input-field">
            <label>Attendance Percentage</label>
            <input type="text" id="ap" onChange={this.handleChange}></input>
          </div>

          <input
            type="submit"
            className="btn white-text green center"
            value="Add"
          />
        </form>
      </div>
    );
  }
}
const mapstate = state => {
  return {};
};
const mapdispatch = dispatch => {
  return {
    addattend: details => dispatch(addattend(details))
  };
};
export default connect(
  mapstate,
  mapdispatch
)(TAddAttend);
