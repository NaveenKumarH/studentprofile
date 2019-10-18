export const addevent = event => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    if (event.title === "") {
      dispatch({ type: "ADD_EVENT_ERROR" });
    } else {
      firestore
        .collection("events")
        .add({
          ...event,
          addtime: new Date()
        })
        .then(() => {
          dispatch({ type: "ADD_EVENT_SUCCESS", event });
        })
        .catch(err => {
          dispatch({ type: "ADD_EVENT_ERROR", err });
        });
    }
  };
};
