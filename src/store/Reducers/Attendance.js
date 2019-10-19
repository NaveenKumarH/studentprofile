const initState = {};
const Attendance = (state = initState, action) => {
  switch (action.type) {
    case "ADD_SUCCESS_A":
      window.open("tattendance", "_self");
      return { ...state };
    case "ADD_ERROR_A":
      window.open("tattendance", "_self");
      return { ...state };
    case "RETRIEVE_SUCCESS_A":
      return {
        ...state,
        [action.id]: action.data,
        pre: action.pre,
        name: action.name
      };
    case "RETRIEVE_ERROR_A":
      return { ...state, data: null };
    default:
      return { ...state };
  }
};
export default Attendance;
