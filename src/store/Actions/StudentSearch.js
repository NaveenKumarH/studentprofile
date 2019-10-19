const ssearch = details => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    let flag = 0;
    const firestore = getFirestore();

    firestore
      .collection("academics")
      .get()
      .then(doc => {
        doc.docs.forEach(data => {
          if (
            data.data().details.srn === details.srn &&
            data.data().details.exam === details.exam &&
            data.data().details.sub === details.sub
          ) {
            flag = 1;

            firestore
              .collection("users")
              .doc(data.data().details.tid)
              .get()
              .then(doc => {
                dispatch({
                  type: "RETRIEVE_SUCCESS",
                  data: data.data(),
                  id: "s",
                  pre: "yes",
                  name: doc.data().name
                });
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
export default ssearch;
