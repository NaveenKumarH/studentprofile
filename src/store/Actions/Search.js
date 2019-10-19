const search = details => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    let flag = 0;
    const firestore = getFirestore();
    firestore
      .collection("academics")
      .get()
      .then(doc => {
        doc.docs.forEach(data => {
          if (
            data.data().details.srn === details.se &&
            data.data().details.tid === details.tid &&
            data.data().details.exam === details.exam
          ) {
            flag = 1;
            firestore
              .collection("users")
              .get()
              .then(doc => {
                doc.docs.forEach(datum => {
                  if (datum.data().regno === details.se) {
                    dispatch({
                      type: "RETRIEVE_SUCCESS",
                      data: data.data(),
                      id: "s",
                      pre: "yes",
                      name: datum.data().name
                    });
                  }
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

export default search;
