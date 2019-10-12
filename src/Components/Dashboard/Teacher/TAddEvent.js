import React, { Component } from "react";
import { addevent } from "../../../store/Actions/EventActions";
import { connect } from "react-redux";
export class TAddEvent extends Component {
  state = {
    title: "",
    desc: "",
    venue: "",
    date: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addevent(this.state);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Add New Event</h5>
          <br></br>
          <div className="input-field">
            <label>Title</label>
            <input type="text" id="title" onChange={this.handleChange}></input>
          </div>
          <div className="input-field">
            <label>Description</label>
            <input type="text" id="desc" onChange={this.handleChange}></input>
          </div>
          <div className="input-field">
            <label>Venue</label>
            <input type="text" id="venue" onChange={this.handleChange}></input>
          </div>
          <div className="input-field">
            <label>Date</label>
            <input type="text" id="date" onChange={this.handleChange}></input>
          </div>
          <div className="input-field">
            <button
              className="btn green lighten-1 z-depth-0"
              onSubmit={this.handleSubmit}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapdispatch = dispatch => {
  return {
    addevent: event => dispatch(addevent(event))
  };
};
export default connect(
  null,
  mapdispatch
)(TAddEvent);
