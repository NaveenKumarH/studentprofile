import React, { Component } from "react";
import { Link } from "react-router-dom";
export class TAcademics extends Component {
  render() {
    return (
      <div className="container center">
        <div className="btn green white-text row">
          <Link to="/taddacademics" className="white-text">
            Add New
          </Link>
        </div>
        <div className="row">
          <input type="text" className="col white input-field"></input>
          <button className="btn green white-text">Search</button>
        </div>
      </div>
    );
  }
}

export default TAcademics;
