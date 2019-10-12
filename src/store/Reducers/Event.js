const initState = {
  addError: null
};
const Event = (state = initState, action) => {
  switch (action.type) {
    case "ADD_EVENT_SUCCESS":
      window.open("tevents", "_self");
      return { events: action.everyevent };
    case "ADD_EVENT_ERROR":
      window.open("tevents", "_self");
      return { events: action.everyevent };
    default:
      return state;
  }
};
export default Event;
