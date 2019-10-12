import Auth from "./Auth";
import Event from "./Event";
import Details from "./Details";
import { firestoreReducer } from "redux-firestore";
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
const Root = combineReducers({
  auth: Auth,
  event: Event,
  details: Details,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});
export default Root;
