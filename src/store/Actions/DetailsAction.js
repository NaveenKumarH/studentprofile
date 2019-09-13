 const updatepdetails =(details) =>{
    return(dispatch,getState,{ getFirebase,getFirestore})=>{
        const state=getState;
        const firestore=getFirestore();
        firestore.collection('details').doc(state.auth.firebase.auth.uid).set({
            ...details,
            addtime: new Date()

        }).then(()=>{
            dispatch({type: 'UPDATE_EVENT_SUCCESS',details});
        }).catch((err)=>{
            dispatch({type: 'UPDATE_EVENT_ERROR',err})
        })
      
    }
}
export default updatepdetails