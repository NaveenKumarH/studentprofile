import React from 'react';
import {NavLink} from 'react-router-dom';


function Outlinks() {
  return (
    <ul className="center ">
<li><NavLink to="/signin">SignIn</NavLink></li>
<li><NavLink to="/signup">SignUp</NavLink></li>
    </ul>
 
    
  );
}

export default Outlinks;
