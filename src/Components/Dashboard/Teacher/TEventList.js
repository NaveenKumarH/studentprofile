import React, { Component } from "react";
import { connect } from "react-redux";
import TEvents from "./TEvents";
export class TEventList extends Component {
  render() {
    const { events } = this.props;
    return <TEvents events={events} />;
  }
}
const mapStateToProps = state => {
  return {
    events: state.event.events
  };
};

export default connect(mapStateToProps)(TEventList);
