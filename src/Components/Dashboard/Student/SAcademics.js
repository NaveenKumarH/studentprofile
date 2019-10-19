import React, { Component } from "react";
import { connect } from "react-redux";
import firebase from "firebase";
import ssearch from "../../../store/Actions/StudentSearch";
export class SAcademics extends Component {
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
    this.props.ssearch(this.state);
    console.log(this.props);
  };
  render() {
    const firestore = firebase.firestore();
    firestore
      .collection("users")
      .doc(this.props.data)
      .get()
      .then(doc => {
        this.setState({ srn: doc.data().regno });
      });

    return (
      <div className="container center">
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
          <label>Subject.</label>
          <input
            type="text"
            className="col white"
            onChange={this.handleChange}
            id="sub"
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
              <div className="col s2 left-align">Handling Teacher:</div>
              <div className="col s1">:</div>
              <div className="col s2">{this.props.academics.name}</div>
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
    data: state.firebase.auth.uid
  };
};
const mapdispatch = dispatch => {
  return {
    ssearch: details => dispatch(ssearch(details))
  };
};
export default connect(
  mapstate,
  mapdispatch
)(SAcademics);
