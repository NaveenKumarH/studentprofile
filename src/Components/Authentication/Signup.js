import React, { Component } from 'react'
import signup from '../../store/Actions/SignupActions'
import {connect} from 'react-redux'
 class Signup extends Component {
     state={
email: '',
password:'',
name: '',
regno: ''

     }
     handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
     }
     handleSubmit=(e)=>{
     e.preventDefault();
   this.props.signup(this.state).then()
   
    }
   
    render() {
        const { authError}=this.props;
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign Up</h5><br></br>
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
                    <input type="password" id="password" onChange={this.handleChange}></input>
                </div>

                <div className="input-field">
                    <button className="btn green lighten-1 z-depth-0">SignUp</button>
                </div>
                <div className="red-text center">
                    {authError?<p>{authError}</p>: null}
                </div>
                </form>
            </div>
        )
    }
}
const mapstate=(state)=>{
    return{
     
    }
}
const mapdispatch=(dispatch)=>{
    return{
        signup: (details)=>dispatch(signup(details))
    }
}
export default connect(mapstate,mapdispatch)(Signup)
