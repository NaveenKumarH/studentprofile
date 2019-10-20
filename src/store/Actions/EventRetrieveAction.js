const eretrieve = details => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    let id = 0;
    const firestore = getFirestore();

    firestore
      .collection("events")
      .get()
      .then(doc => {
        doc.docs.forEach(data => {
          id += 1;
          firestore
            .collection("users")
            .doc(details.id)
            .get()
            .then(doc => {
              dispatch({
                type: "RETRIEVE_SUCCESS",
                data: data.data(),
                id: "e" + id,
                pre: "yes",
                name: doc.data().name
              });
            });
        });
      })
      .catch(err => {
        dispatch({
          type: "RETRIEVE_SUCCESS",
          data: null,
          id: "no",
          pre: "no"
        });
      });
  };
};
export default eretrieve;
