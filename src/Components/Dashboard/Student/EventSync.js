import React from "react";

const EventSync = ({ event }) => {
  return (
    <div className="section">
      <div className="card z-z-depth-0">
        <div className="card-content grey-text darken-3">
          <span className="card-title">{event.title}</span>
          <p>{event.desc}</p>
          <p className="grey-text">{event.venue}</p>
          <p>{event.date}</p>
        </div>
      </div>
    </div>
  );
};

export default EventSync;
