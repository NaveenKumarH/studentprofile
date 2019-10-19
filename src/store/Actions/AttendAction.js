const addattend = details => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("attendance")
      .add({
        details
      })
      .then(() => {
        dispatch({ type: "ADD_SUCCESS_A", details });
      })
      .catch(err => {
        dispatch({ type: "ADD_ERROR_A", err });
      });
  };
};
export default addattend;
