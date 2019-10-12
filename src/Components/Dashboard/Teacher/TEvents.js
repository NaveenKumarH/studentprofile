import React from "react";

import { connect } from "react-redux";
import EventSync from "../Student/EventSync";

const TEvents = ({ events }) => {
  return (
    <div className="container">
      {events &&
        events.map(event => {
          return <EventSync event={event} />;
        })}
    </div>
  );
};

export default connect()(TEvents);
