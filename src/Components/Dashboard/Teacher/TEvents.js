import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import EventSync from "../Student/EventSync";

const TEvents = ({ events }) => {
  return (
    <div className="container center">
      <div className="btn white-text green ">
        <Link className="white-text" to="/teventadd">
          Add New Event
        </Link>
      </div>

      {events &&
        events.map(event => {
          return <EventSync event={event} />;
        })}
    </div>
  );
};

export default connect()(TEvents);
