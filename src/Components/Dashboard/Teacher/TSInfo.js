import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import sds from "../../../store/Actions/SDS";
export class TSInfo extends Component {
  render() {
    return <div className="container"></div>;
  }
}
const mapstate = state => {
  return {};
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
