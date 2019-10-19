const sds = details => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    let flag = 0;
    const firestore = getFirestore();
    firestore
      .collection("details")
      .get()
      .then(doc => {
        doc.docs.forEach(data => {
          if (data.data().regno === details.srn) {
            flag = 1;
            dispatch({
              type: "RETRIEVE_SUCCESS",
              data: data.data(),
              id: "s",
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

export default sds;
