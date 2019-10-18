const addaca = details => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("academics")
      .add({
        details
      })
      .then(() => {
        dispatch({ type: "ADD_SUCCESS", details });
      })
      .catch(err => {
        dispatch({ type: "ADD_ERROR", err });
      });
  };
};
export default addaca;
