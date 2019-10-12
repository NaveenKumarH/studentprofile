const signup=(details)=>{
    return(dispatch,getState,{ getFirebase,getFirestore})=>{
        const firebase=getFirebase();
        const firestore=getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            details.email,
            details.password
        ).then((res)=>{
            firestore.collection('details').doc(res.user.uid).set({
              
                    name :details.name,
                email :details.email,
            dob:'',
            addr:'',
            phno:'',
            devt:'',
            oss:'',
            dbs:'',
            coc:'',
            secb:'',
            secp:'',
            highb:'',
            highp:'',
            gender:'',
                plang:'',
                ugc:'',
                ugd:'',
                pgc:'',
                pgd:'',
                type:details.type,
                addtime: new Date()
    
            })
            return firestore.collection('users').doc(res.user.uid).set(
                {
                    name: details.name,
                    regno: details.regno,
                   email: details.email,
                   type:details.type
                }




                
            ).then(()=>{
                dispatch({type :'SIGNUP_SUCCESS',utype:details.type})
            }).catch(err=>{
                dispatch({type: 'SIGNUP_ERROR',err})
            })
         
    })
    
}
}
export default signup;