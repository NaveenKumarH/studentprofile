import React, { Component } from "react";
import { connect } from "react-redux";
import addaca from "../../../store/Actions/AcademicAction";
export class TAddAcademics extends Component {
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addaca(this.state);
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Add New Academic detail</h5>
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
            <label>Examination</label>
            <input type="text" id="exam" onChange={this.handleChange}></input>
          </div>
          <div className="input-field">
            <label>Mark</label>
            <input
              type="number"
              min="0"
              max="100"
              maxLength="2"
              id="mark"
              onChange={this.handleChange}
            ></input>
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
const mapdispatch = dispatch => {
  return {
    addaca: details => dispatch(addaca(details))
  };
};
export default connect(
  null,
  mapdispatch
)(TAddAcademics);
