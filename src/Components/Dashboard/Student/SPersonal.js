import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class SPersonal extends Component {
    render() {
        return (
            <div className="container white-text">
                
                <br></br>
                <div className="row s1 center">
<div className="col offset-s5 center"><div >Personal Information</div> </div><div className="col right"> <Link className="btn green white-text" to='/spersonale'>Edit</Link></div>

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
                    <div className="col s2">
                    <div>Name</div>
                    </div>
                  

                </div>
                
                <div className="row s1">
                    <div className="col s3">
                    <div htmlFor="email">Email </div>
                    </div>
                    <div className="col s1">
                    <div >:</div>
                    </div>
                    <div className="col s2">
                    <div >Email</div>
                    </div>
                  

                </div>


                <div className="row s1">
                    <div className="col s3">
                    <div htmlFor="date">D.O.B</div>
                    </div>
                    <div className="col s1">
                    <div >:</div>
                    </div>
                    <div className="col s2">
                    <div >Name</div>
                    </div>
                  

                </div>



                <div className="row s1">
                    <div className="col s3">
                    <div>Address </div>
                    </div>
                    <div className="col s1">
                    <div >:</div>
                    </div>
                    <div className="col s2">
                    <div className="text" >Name</div>
                    </div>
                  

                </div>



                <div className="row s1">
                    <div className="col s3">
                    <div>Phone Number </div>
                    </div>
                    <div className="col s1">
                    <div >:</div>
                    </div>
                    <div className="col s2">
                    <div className="number" >no.</div>
                    </div>
                  

                </div>


                <div className="row s1">
                    <div className="col s3">
                    <div>Gender </div>
                    </div>
                    <div className="col s1">
                    <div >:</div>
                    </div>
                    <div className="col s2">
                    <div  >Gender</div>
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
</div>
<div className="row s1 ">
    <div className="col s2 offset-s1">Development Tools </div><div className="col s1">
                    <div >:</div>
                    </div>
</div>
<div className="row s1 ">
    <div className="col s2 offset-s1">Operating Systems </div><div className="col s1">
                    <div >:</div>
                    </div>
</div>
<div className="row s1 ">
    <div className="col s2 offset-s1">Databases </div><div className="col s1">
                    <div >:</div>
                    </div>
</div>
<div className="row s1 ">
    <div className="col s2 ">Co-Curricular :</div>
</div>







<div className="row s1 center">
<div >Educational Information</div>

</div>
<div className="row s1 ">
    <div className="col s2"> Secondary</div><div className="col s1">
                    <div >:</div>
                    </div>
</div>
<div className="row s1 ">
    <div className="col s2"> Higher  Secondary</div><div className="col s1">
                    <div >:</div>
                    </div>
</div>
<div className="row s1 ">
    <div className="col s2"> Under Graduate</div><div className="col s1">
                    <div >:</div>
                    </div>
</div>

               
            
            </div>
        )
    }
}

export default SPersonal
