
export const signin =(credentials) =>{
    return(dispatch,getState,{ getFirebase,getFirestore})=>{
        const firebase=getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=> {
            dispatch({type :'LOGIN_SUCCESS',uid:getState().firebase.auth.uid})}
        ).catch((err)=>{
            dispatch({type: 'LOGIN_ERROR',err})
        })
    }
}

export const signout =() =>{
    return(dispatch,getState,{ getFirebase,getFirestore})=>{
        const firebase=getFirebase();

        firebase.auth().signOut().then(()=> {dispatch({type :'LOGOUT_SUCCESS'})}
        ).catch((err)=>{
            dispatch({type: 'LOGOUT_ERROR',err})
        })
    }
}