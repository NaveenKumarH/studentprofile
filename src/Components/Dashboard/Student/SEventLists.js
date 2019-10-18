import React, { Component } from "react";
import { connect } from "react-redux";
import SEvents from "./SEvents";
export class SEventLists extends Component {
  render() {
    const { events } = this.props;
    return <SEvents events={events} />;
  }
}
const mapStateToProps = state => {
  return {
    events: state.event.events
  };
};
export default connect(mapStateToProps)(SEventLists);
