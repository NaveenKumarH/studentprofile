const initState = {
  addError: null
};
const Event = (state = initState, action) => {
  switch (action.type) {
    case "ADD_EVENT_SUCCESS":
      window.open("tevents", "_self");
      return {};
    case "ADD_EVENT_ERROR":
      window.open("tevents", "_self");
      return {};
    default:
      return state;
  }
};
export default Event;
