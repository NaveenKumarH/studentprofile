const ssas = details => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    let flag = 0;
    const firestore = getFirestore();
    firestore
      .collection("users")
      .doc(details.id)
      .get()
      .then(docu => {
        firestore
          .collection("attendance")
          .get()
          .then(doc => {
            doc.docs.forEach(data => {
              console.log(data.data());
              console.log(docu.data());
              if (
                data.data().details.srn === docu.data().regno &&
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
            dispatch({ type: "RETRIEVE_ERROR_A", err });
          });
      });
  };
};
export default ssas;
