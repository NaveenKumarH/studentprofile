import React from "react";

import Inlinks from "./Inlinks";
import Outlinks from "./Outlinks";
import { connect } from "react-redux";

function Navbar(state) {
  const links = state.firebase.auth.uid ? <Inlinks /> : <Outlinks />;
  return (
    <div>
      <nav className="nav-wrapper grey darken-3 ">
        <div className="container nav-content">
          <div className="col s12 ">{links}</div>
        </div>
      </nav>
    </div>
  );
}

const mapStoretoProps = state => {
  console.log(state);
  return {
    ...state
  };
};

export default connect(mapStoretoProps)(Navbar);
