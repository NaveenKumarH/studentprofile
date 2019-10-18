const search = details => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("academics")
      .get()
      .then(doc => {
        doc.docs.forEach(data => {
          if (data.data().details.srn === details.se) {
            dispatch({
              type: "RETRIEVE_SUCCESS",
              data: data.data(),
              id: data.id
            });
          } else {
            dispatch({
              type: "RETRIEVE_SUCCESS",
              data: "No such data present"
            });
          }
        });
      })
      .catch(err => {
        dispatch({ type: "RETRIEVE_ERROR", err });
      });
  };
};
export default search;
