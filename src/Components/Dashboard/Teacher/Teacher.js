import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Teacher extends Component{
   
    render(){
       
        return(
    <div >
        
        <div className="row s12 container center">
    
    
    <div className="row  container">
    <Link to="/tpersonal" className="white-text"> <div className="card-panel grey darken-3 center">
        PERSONAL<br></br> INFORMATION
        </div>
        </Link>
       
    </div>
    <div className="row  container">
    <Link to="/tacademics" className="white-text"> <div className="card-panel grey darken-3 center">
        ACADEMIC<br></br> INFORMATION
        </div>
        </Link>
    </div>
    <div className="row  container">
    <Link to="/tattendance" className="white-text"> <div className="card-panel grey darken-3 center">
        ATTENDANCE<br></br> 
        </div>
        </Link>
    </div>
    <div className="row container">
    <Link to="/tevents" className="white-text"> <div className="card-panel grey darken-3 center">
        EVENTS<br></br>
        </div>
        </Link>
    
    </div>
    
        </div>
    
      
    
    
    
    
    </div>
        );

    
}}
export default Teacher;