import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Home/Navbar";
import Welcome from "./Components/Home/Welcome";
import Signin from "./Components/Authentication/Signin";
import Signup from "./Components/Authentication/Signup";
import Student from "./Components/Dashboard/Student/Student";
import SPersonal from "./Components/Dashboard/Student/SPersonal";
import SAcademics from "./Components/Dashboard/Student/SAcademics";
import SAttendance from "./Components/Dashboard/Student/SAttendance";
import SEventLists from "./Components/Dashboard/Student/SEventLists";
import TEventList from "./Components/Dashboard/Teacher/TEventList";
import SPersonalEdit from "./Components/Dashboard/Student/SPersonalEdit";
import TAddEvent from "./Components/Dashboard/Teacher/TAddEvent";
import Teacher from "./Components/Dashboard/Teacher/Teacher";
import TPersonal from "./Components/Dashboard/Teacher/TPersonal";
import TPersonalEdit from "./Components/Dashboard/Teacher/TPersonalEdit";
import TAcademics from "./Components/Dashboard/Teacher/TAcademics";
import TAddAcademics from "./Components/Dashboard/Teacher/TAddAcademics";
import TSInfo from "./Components/Dashboard/Teacher/TSInfo";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <br></br>
      <Switch>
        <Route exact path="/" component={Welcome}></Route>
        <Route path="/signin" component={Signin}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/student" component={Student}></Route>
        <Route path="/spersonal" component={SPersonal}></Route>
        <Route path="/sacademics" component={SAcademics}></Route>
        <Route path="/tacademics" component={TAcademics}></Route>
        <Route path="/sattendance" component={SAttendance}></Route>
        <Route path="/seventslist" component={SEventLists}></Route>
        <Route path="/teventslist" component={TEventList}></Route>
        <Route path="/spersonale" component={SPersonalEdit}></Route>
        <Route path="/teventadd" component={TAddEvent}></Route>
        <Route path="/teacher" component={Teacher}></Route>
        <Route path="/tpersonal" component={TPersonal}></Route>
        <Route path="/tpersonale" component={TPersonalEdit}></Route>
        <Route path="/taddacademics" component={TAddAcademics}></Route>
        <Route path="/tsinfo" component={TSInfo}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
