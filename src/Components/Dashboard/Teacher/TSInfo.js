import React, { Component } from "react";
import { connect } from "react-redux";
import sds from "../../../store/Actions/SDS";
export class TSInfo extends Component {
  state = { srn: "" };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleClick = e => {
    e.preventDefault();
    this.props.search(this.state);
  };
  render() {
    return (
      <div className="container center">
        <div className="row input-field">
          <label>Student Reg No.</label>
          <input
            className="white"
            type="text"
            id="srn"
            onChange={this.handleChange}
          ></input>
          <button className="btn green white-text" onClick={this.handleClick}>
            Search
          </button>
        </div>
        <div>
          {this.props.academics.pre === undefined ? (
            <div></div>
          ) : this.props.academics.pre === "no" ? (
            <div className="white-text">No data found</div>
          ) : (
            <div>
              <div className="row s1 center">
                <div className="col offset-s5 center">
                  <div>Personal Information</div>{" "}
                </div>
              </div>
              <div>
                <div className="row s12">
                  <div className="col s6">
                    <div className="row s1">
                      <div className="col s3">
                        <div>Student Name </div>
                      </div>
                      <div className="col s1">
                        <div>:</div>
                      </div>
                      <div className="col s3">
                        <div>{this.props.academics.s.name}</div>
                      </div>
                    </div>

                    <div className="row s1">
                      <div className="col s3">
                        <div htmlFor="email">Email </div>
                      </div>
                      <div className="col s1">
                        <div>:</div>
                      </div>
                      <div className="col s2">
                        <div>{this.props.academics.s.email}</div>
                      </div>
                    </div>

                    <div className="row s1">
                      <div className="col s3">
                        <div htmlFor="date">D.O.B</div>
                      </div>
                      <div className="col s1">
                        <div>:</div>
                      </div>
                      <div className="col s2">
                        <div>{this.props.academics.s.dob}</div>
                      </div>
                    </div>

                    <div className="row s1">
                      <div className="col s3">
                        <div>Address </div>
                      </div>
                      <div className="col s1">
                        <div>:</div>
                      </div>
                      <div className="col s2">
                        <div className="text">{this.props.academics.s.dob}</div>
                      </div>
                    </div>

                    <div className="row s1">
                      <div className="col s3">
                        <div>Phone Number </div>
                      </div>
                      <div className="col s1">
                        <div>:</div>
                      </div>
                      <div className="col s2">
                        <div className="number">
                          {this.props.academics.s.phno}
                        </div>
                      </div>
                    </div>

                    <div className="row s1">
                      <div className="col s3">
                        <div>Gender </div>
                      </div>
                      <div className="col s1">
                        <div>:</div>
                      </div>
                      <div className="col s2">
                        <div>{this.props.academics.s.gender}</div>
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
                  </div>{" "}
                  <div className="col s2">
                    <div>{this.state.plang}</div>
                  </div>
                </div>
                <div className="row s1 ">
                  <div className="col s2 offset-s1">Development Tools </div>
                  <div className="col s1">
                    <div>:</div>
                  </div>
                  <div className="col s2">
                    <div>{this.state.devt}</div>
                  </div>
                </div>
                <div className="row s1 ">
                  <div className="col s2 offset-s1">Operating Systems </div>
                  <div className="col s1">
                    <div>:</div>
                  </div>
                  <div className="col s2">
                    <div>{this.state.oss}</div>
                  </div>
                </div>
                <div className="row s1 ">
                  <div className="col s2 offset-s1">Databases </div>
                  <div className="col s1">
                    <div>:</div>
                  </div>
                  <div className="col s2">
                    <div>{this.state.dbs}</div>
                  </div>
                </div>
                <div className="row s1 ">
                  <div className="col s2 ">Co-Curricular :</div>
                  <div className="col s2">
                    <div>{this.state.coc}</div>
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
                  <div className="col s2">
                    <div>
                      <span>Board : </span>
                      {this.state.secb}
                    </div>
                  </div>
                  <div className="col s2">
                    <div>
                      <span>Percentage : </span>
                      {this.state.secp}
                    </div>
                  </div>
                </div>
                <div className="row s1 ">
                  <div className="col s2"> Higher Secondary</div>
                  <div className="col s1">
                    <div>:</div>
                  </div>
                  <div className="col s2">
                    <div>
                      <span>Board : </span>
                      {this.state.highb}
                    </div>
                  </div>
                  <div className="col s2">
                    <div>
                      <span>Percentage : </span>
                      {this.state.highp}
                    </div>
                  </div>
                </div>
                }
              </div>
            </div>
          )}
          ;
        </div>
      </div>
    );
  }
}
const mapstate = state => {
  return {
    academics: state.academic
  };
};
const mapdispatch = dispatch => {
  return {
    search: details => dispatch(sds(details))
  };
};
export default connect(
  mapstate,
  mapdispatch
)(TSInfo);
