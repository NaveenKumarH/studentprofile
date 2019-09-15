
export const signin =(credentials) =>{
    
    return(dispatch,getState,{ getFirebase,getFirestore})=>{
        const firebase=getFirebase();
const firestore=getFirestore();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then((res)=> {

            const docRef = firestore.collection('users').doc(res.user.uid);
        
           docRef.get().then((doc)=>{
            dispatch({type :'LOGIN_SUCCESS',utype:doc.data().type})
           })     
        }
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