import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import updatepdetails from "../../../store/Actions/DetailsAction";
export class TPersonalEdit extends Component {
  state = {
    name: "",
    email: "",
    dob: "",
    addr: "",
    phno: "",
    devt: "",
    oss: "",
    dbs: "",
    coc: "",
    secb: "",
    secp: "",
    highb: "",
    highp: "",
    gender: "",
    ugc: "",
    ugd: "",
    pgc: "",
    pgd: "",
    type: "teacher"
  };
  handleRadio = e => {
    this.setState({
      gender: e.target.id
    });
  };
  handleSubmit = e => {
    console.log(this.state);
    e.preventDefault();
    this.props.updatepdetails(this.state);
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  render() {
    return (
      <div className="container white-text">
        <br></br>
        <div className="row s1 center input-field ">
          <div className="col offset-s5 center">
            <div>Personal Information</div>{" "}
          </div>
          <div className="col right">
            {" "}
            <Link className="btn red white-text" to="/tpersonal">
              Back
            </Link>
          </div>
        </div>
        <div className="row s12">
          <div className="col s6">
            <div className="row s1">
              <div className="col s3">
                <div>Student Name </div>
              </div>
              <div className="col s1">
                <div>:</div>
              </div>
              <div className="col s4">
                <input
                  className="text-field white-text"
                  onChange={this.handleChange}
                  id="name"
                />
              </div>
            </div>

            <div className="row s1">
              <div className="col s3">
                <div htmlFor="email">Email </div>
              </div>
              <div className="col s1">
                <div>:</div>
              </div>
              <div className="col s4">
                <input
                  className="text-field white-text"
                  onChange={this.handleChange}
                  htmlFor="email"
                  id="email"
                />
              </div>
            </div>

            <div className="row s1">
              <div className="col s3">
                <div htmlFor="date">D.O.B</div>
              </div>
              <div className="col s1">
                <div>:</div>
              </div>
              <div className="col s4">
                <input
                  type="date"
                  max="2000-12-31"
                  className="white-text"
                  onChange={this.handleChange}
                  id="dob"
                />
              </div>
            </div>

            <div className="row s1">
              <div className="col s3">
                <div>Address </div>
              </div>
              <div className="col s1">
                <div>:</div>
              </div>
              <div className="col s4">
                <input
                  type="text"
                  className="text-field white-text"
                  onChange={this.handleChange}
                  id="addr"
                />
              </div>
            </div>

            <div className="row s1">
              <div className="col s3">
                <div>Phone Number </div>
              </div>
              <div className="col s1">
                <div>:</div>
              </div>
              <div className="col s4">
                <input
                  type="text"
                  min="1000000000"
                  max="9999999999"
                  maxLength="10"
                  id="phno"
                  onChange={this.handleChange}
                  className="text-field white-text"
                />
              </div>
            </div>

            <div className="row s1">
              <div className="col s3">
                <div>Gender </div>
              </div>
              <div className="col s1">
                <div>:</div>
              </div>
              <div className="col s4">
                <label>
                  <input
                    type="radio"
                    className="with-gap"
                    id="m"
                    onChange={this.handleRadio}
                    name="gen"
                  ></input>
                  <span>Male</span>
                </label>
              </div>
              <div className="col s4">
                <label>
                  <input
                    type="radio"
                    className="with-gap"
                    id="f"
                    onChange={this.handleRadio}
                    name="gen"
                  ></input>
                  <span>Female</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="row s1 center">
          <div>Skills</div>
        </div>
        <div className="row s1 ">
          <div className="col s2">Technical :</div>
        </div>
        <div className="row s1 ">
          <div className="col s2 offset-s1">Languages </div>
          <div className="col s1">
            <div>:</div>
          </div>
          <div className="col s4">
            <input
              type="text"
              id="plang"
              onChange={this.handleChange}
              className="text-field white-text"
            />
          </div>
        </div>
        <div className="row s1 ">
          <div className="col s2 offset-s1">Development Tools </div>
          <div className="col s1">
            <div>:</div>
          </div>
          <div className="col s4">
            <input
              type="text"
              id="devt"
              onChange={this.handleChange}
              className="text-field white-text"
            />
          </div>
        </div>
        <div className="row s1 ">
          <div className="col s2 offset-s1">Operating Systems </div>
          <div className="col s1">
            <div>:</div>
          </div>
          <div className="col s4">
            <input
              type="text"
              id="oss"
              onChange={this.handleChange}
              className="text-field white-text"
            />
          </div>
        </div>
        <div className="row s1 ">
          <div className="col s2 offset-s1">Databases </div>
          <div className="col s1">
            <div>:</div>
          </div>
          <div className="col s4">
            <input
              type="text"
              id="dbs"
              onChange={this.handleChange}
              className="text-field white-text"
            />
          </div>
        </div>
        <div className="row s1 ">
          <div className="col s2 ">Co-Curriculars :</div>
          <div className="col s4">
            <input
              type="text"
              id="coc"
              onChange={this.handleChange}
              className="text-field white-text"
            />
          </div>
        </div>

        <div className="row s1 center">
          <div>Educational Information</div>
        </div>
        <div className="row s1 ">
          <div className="col s2"> Secondary</div>
          <div className="col s1">
            <div>:</div>
          </div>

          <div className="col s1">Board :</div>
          <input
            type="text"
            id="secb"
            onChange={this.handleChange}
            className="col s3 white-text"
          ></input>
          <div className="col s1">Percentage :</div>
          <input
            type="text"
            id="secp"
            onChange={this.handleChange}
            className="col s3 white-text"
          ></input>
        </div>

        <div className="row s1 ">
          <div className="col s2"> Higher Secondary</div>
          <div className="col s1">
            <div>:</div>
          </div>
          <div className="col s1">Board :</div>
          <input
            type="text"
            id="highb"
            onChange={this.handleChange}
            className="col s3 white-text"
          ></input>
          <div className="col s1">Percentage :</div>
          <input
            type="text"
            onChange={this.handleChange}
            id="highp"
            className="col s3 white-text"
          ></input>
        </div>

        <div className="row s1 ">
          <div className="col s2"> Under Graduate</div>
          <div className="col s1">
            <div>:</div>
          </div>
          <div className="col s1">College :</div>
          <input
            type="text"
            id="ugc"
            onChange={this.handleChange}
            className="col s3 white-text"
          ></input>
          <div className="col s1">Degree and stream :</div>
          <input
            type="text"
            onChange={this.handleChange}
            id="ugd"
            className="col s3 white-text"
          ></input>
        </div>

        <div className="row s1 ">
          <div className="col s2"> Post Graduate</div>
          <div className="col s1">
            <div>:</div>
          </div>
          <div className="col s1">College :</div>
          <input
            type="text"
            id="pgc"
            onChange={this.handleChange}
            className="col s3 white-text"
          ></input>
          <div className="col s1">Degree and stream :</div>
          <input
            type="text"
            onChange={this.handleChange}
            id="pgd"
            className="col s3 white-text"
          ></input>
        </div>

        <div className="row center">
          <button className="btn green white-text" onClick={this.handleSubmit}>
            Save
          </button>
        </div>
      </div>
    );
  }
}
const mapstate = state => {
  return {
    ...state
  };
};
const mapdispatch = dispatch => {
  return {
    updatepdetails: details => dispatch(updatepdetails(details))
  };
};
export default connect(
  mapstate,
  mapdispatch
)(TPersonalEdit);
