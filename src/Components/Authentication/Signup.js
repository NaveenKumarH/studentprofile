import React, { Component } from "react";
import signup from "../../store/Actions/SignupActions";
import { connect } from "react-redux";
class Signup extends Component {
  state = {
    email: "",
    password: "",
    name: "",
    regno: "",
    type: ""
  };
  handleRadio = e => {
    this.setState({
      type: e.target.id
    });
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.signup(this.state);
  };

  render() {
    const { authError } = this.props;
    const { log } = this.props;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <br></br>
          <div className="input-field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" onChange={this.handleChange}></input>
          </div>

          <div className="input-field">
            <label htmlFor="regno">Reg No.</label>
            <input type="text" id="regno" onChange={this.handleChange}></input>
          </div>

          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange}></input>
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="row ">
            <div className="col s2">
              <label>
                <input
                  type="radio"
                  className="with-gap"
                  id="student"
                  onChange={this.handleRadio}
                  name="type"
                ></input>
                <span>Student</span>
              </label>
            </div>
            <div className="col s2">
              <label>
                <input
                  type="radio"
                  className="with-gap"
                  id="teacher"
                  onChange={this.handleRadio}
                  name="type"
                ></input>
                <span>Teacher</span>
              </label>
            </div>
          </div>

          <div className="input-field">
            <button className="btn green lighten-1 z-depth-0" type="submit">
              SignUp
            </button>
          </div>
          <div className="red-text center">
            {authError ? <p>{authError}</p> : null}
          </div>
          <div className="green-text center">{log ? <p>{log}</p> : null}</div>
        </form>
      </div>
    );
  }
}

const mapdispatch = dispatch => {
  return {
    signup: details => dispatch(signup(details))
  };
};
export default connect(
  null,
  mapdispatch
)(Signup);
