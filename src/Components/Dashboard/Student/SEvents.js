import React from "react";

import { connect } from "react-redux";
import EventSync from "./EventSync";

const SEvents = ({ events }) => {
  return (
    <div className="container">
      {events &&
        events.map(event => {
          return <EventSync event={event} />;
        })}
    </div>
  );
};

export default connect()(SEvents);
