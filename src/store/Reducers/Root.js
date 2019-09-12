import Auth from './Auth'
import Event from './Event'
import {firestoreReducer} from 'redux-firestore'
import {combineReducers} from 'redux'
import {firebaseReducer} from 'react-redux-firebase'
const Root= combineReducers(
    {
        auth: Auth,
        event: Event,
        firestore: firestoreReducer,
        firebase: firebaseReducer
    }
)
export default Root