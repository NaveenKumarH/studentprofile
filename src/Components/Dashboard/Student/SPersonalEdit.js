import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class SPersonalEdit extends Component {
    render() {
        
        return (
            <div className="container white-text">
                
            <br></br>
            <div className="row s1 center input-field ">
<div className="col offset-s5 center"><div >Personal Information</div> </div><div className="col right"> <Link className="btn red white-text" to='/spersonal'>Back</Link></div>

</div>
<div className="row s12">
<div className="col s6">
            <div className="row s1">
                <div className="col s3">
                <div>Student Name </div>
                </div>
                <div className="col s1">
                <div >:</div>
                </div>
                <div className="col s4">
                <input className="text-field white-text" id="name"/>
                </div>
              

            </div>
            
            <div className="row s1">
                <div className="col s3">
                <div htmlFor="email">Email </div>
                </div>
                <div className="col s1">
                <div >:</div>
                </div>
                <div className="col s4">
                <input className="text-field white-text" htmlFor="email" id="email"/>
                </div>
              

            </div>


            <div className="row s1">
                <div className="col s3">
                <div htmlFor="date">D.O.B</div>
                </div>
                <div className="col s1">
                <div >:</div>
                </div>
                <div className="col s4">
                <input  type="date" className="white-text" id="dob"/>
                </div>
              

            </div>



            <div className="row s1">
                <div className="col s3">
                <div>Address </div>
                </div>
                <div className="col s1">
                <div >:</div>
                </div>
                <div className="col s4">
                <input  type="text" className="text-field white-text" id="addr"/>
                </div>
              

            </div>



            <div className="row s1">
                <div className="col s3">
                <div>Phone Number </div>
                </div>
                <div className="col s1">
                <div >:</div>
                </div>
                <div className="col s4">
                <input  type="text" id="phno" className="text-field white-text"/>
                </div>
              

            </div>


            <div className="row s1">
                <div className="col s3">
                <div>Gender </div>
                </div>
                <div className="col s1">
                <div >:</div>
                </div>
                <div className="col s4">
               <label><input type="radio" className="with-gap" name="gen" checked></input><span>Male</span></label>
              </div>
              <div className="col s4">
               <label><input type="radio" className="with-gap" name="gen"></input><span>Female</span></label>
              </div>
</div>
            </div>
<div className="col  offset-s5"> 
<div >Photo</div> </div>
</div>
            <div className="row s1 center">
<div >Skills</div>
</div>
<div className="row s1 ">
<div className="col s2">Technical :</div>
</div>
<div className="row s1 ">
<div className="col s2 offset-s1">Languages </div><div className="col s1">
                <div >:</div>
                
                </div>
                <div className="col s4">
                <input  type="text" id="plang" className="text-field white-text"/>
                </div>
</div>
<div className="row s1 ">
<div className="col s2 offset-s1">Development Tools </div><div className="col s1">
                <div >:</div>
                </div>
                <div className="col s4">
                <input  type="text" id="devt" className="text-field white-text"/>
                </div>
</div>
<div className="row s1 ">
<div className="col s2 offset-s1">Operating Systems </div><div className="col s1">
                <div >:</div>
                </div>
                <div className="col s4">
                <input  type="text" id="oss" className="text-field white-text"/>
                </div>
</div>
<div className="row s1 ">
<div className="col s2 offset-s1">Databases </div><div className="col s1">
                <div >:</div>
                </div>
                <div className="col s4">
                <input  type="text" id="dbs" className="text-field white-text"/>
                </div>
</div>
<div className="row s1 ">
<div className="col s2 ">Co-Curriculars :</div>
<div className="col s4">
                <input  type="text" id="phno" className="text-field white-text"/>
                </div>

</div>

<div className="row s1 center">
<div >Educational Information</div>

</div>
<div className="row s1 ">
<div className="col s2"> Secondary</div><div className="col s1">
                <div >:</div></div>
                
        <div className="col s1">Board :</div><input type="text" className="col s3 white-text"></input>
        <div className="col s1">Percentage :</div><input type="text" className="col s3 white-text"></input>

                </div>


<div className="row s1 ">
<div className="col s2"> Higher  Secondary</div><div className="col s1">
                <div >:</div>
                </div>
                <div className="col s1">Board :</div><input type="text" className="col s3 white-text"></input>
        <div className="col s1">Percentage :</div><input type="text" className="col s3 white-text"></input>
</div>

<div className="row center">
    <Link className="btn green white-text" to='/spersonal'>Save</Link>
</div>
           
        
        </div>  
        )
    }
}

export default SPersonalEdit
