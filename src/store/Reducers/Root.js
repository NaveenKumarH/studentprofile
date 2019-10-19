import Auth from "./Auth";
import Event from "./Event";
import Details from "./Details";
import Academic from "./Academic";
import { firestoreReducer } from "redux-firestore";
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import Attendance from "./Attendance";
const Root = combineReducers({
  auth: Auth,
  event: Event,
  details: Details,
  academic: Academic,
  attendance: Attendance,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});
export default Root;
