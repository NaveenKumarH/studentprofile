const search = details => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    let id = 0,
      flag = 0;
    const firestore = getFirestore();
    firestore
      .collection("academics")
      .get()
      .then(doc => {
        doc.docs.forEach(data => {
          if (data.data().details.srn === details.se) {
            id += 1;
            flag = 1;
            dispatch({
              type: "RETRIEVE_SUCCESS",
              data: data.data(),
              id: id,
              pre: "yes"
            });
          }
        });
        if (flag === 0) {
          dispatch({
            type: "RETRIEVE_SUCCESS",
            data: null,
            id: "no",
            pre: "no"
          });
        }
      })
      .catch(err => {
        dispatch({ type: "RETRIEVE_ERROR", err });
      });
  };
};
export default search;
