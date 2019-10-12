import React, { Component } from "react";
import { connect } from "react-redux";
import { signin } from "../../store/Actions/SigninoutActions";
class Signin extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.signin(this.state);
  };
  render() {
    const { authError } = this.props;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <br></br>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange}></input>
          </div>
          <div className="input-field">
            <label>Password</label>
            <input
              type="password"
              id="password"
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="input-field">
            <button
              className="btn green lighten-1 z-depth-0"
              onSubmit={this.handleSubmit}
            >
              Login
            </button>
          </div>
          <div className="red-text center">
            {authError ? <p>{authError}</p> : null}
          </div>
        </form>
      </div>
    );
  }
}

const mapstate = state => {
  return {
    ...state,
    authError: state.auth.authError
  };
};

const mapdispatch = dispatch => {
  return {
    signin: creds => dispatch(signin(creds))
  };
};
export default connect(
  mapstate,
  mapdispatch
)(Signin);
