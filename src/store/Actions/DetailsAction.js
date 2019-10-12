const updatepdetails = details => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const state = getState().firebase;
    const firestore = getFirestore();
    firestore
      .collection("details")
      .doc(state.auth.uid)
      .set({
        ...details,
        addtime: new Date()
      })
      .then(() => {
        dispatch({ type: "UPDATE_EVENT_SUCCESS", details });
      })
      .catch(err => {
        dispatch({ type: "UPDATE_EVENT_ERROR", err });
      });
  };
};
export default updatepdetails;
