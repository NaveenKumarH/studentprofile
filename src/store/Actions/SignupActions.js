const signup=(details)=>{
    return(dispatch,getState,{ getFirebase,getFirestore})=>{
        const firebase=getFirebase();
        const firestore=getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            details.email,
            details.password
        ).then((res)=>{
            return firestore.collection('users').doc(res.user.uid).set(
                {
                    name: details.name,
                    regno: details.regno,
                   email: details.email,
                   type:details.type
                }
            ).then(()=>{
                dispatch({type :'SIGNUP_SUCCESS'})
            }).catch(err=>{
                dispatch({type: 'SIGNUP_ERROR',err})
            })
         
    })
    
}
}
export default signup;