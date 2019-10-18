import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signout } from "../../store/Actions/SigninoutActions";

function Inlinks(props) {
  return (
    <ul className="center">
      <li>
        <NavLink to="/" onClick={props.signout.bind()}>
          Logout
        </NavLink>
      </li>
    </ul>
  );
}
const mapstate = state => {
  return {
    authError: state.auth.authError
  };
};

const mapdispatch = dispatch => {
  return {
    signout: () => dispatch(signout())
  };
};
export default connect(
  mapstate,
  mapdispatch
)(Inlinks);
