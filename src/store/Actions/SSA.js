const ssa = details => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    let flag = 0;
    const firestore = getFirestore();
    firestore
      .collection("attendance")
      .get()
      .then(doc => {
        doc.docs.forEach(data => {
          if (
            data.data().details.srn === details.srn &&
            data.data().details.sub === details.sub
          ) {
            flag = 1;
            dispatch({
              type: "RETRIEVE_SUCCESS_A",
              data: data.data(),
              id: "s",
              pre: "yes"
            });
          }
        });
        if (flag === 0) {
          dispatch({
            type: "RETRIEVE_SUCCESS_A",
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

export default ssa;
