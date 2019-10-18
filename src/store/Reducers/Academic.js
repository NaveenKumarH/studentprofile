const initState = {};
const Academic = (state = initState, action) => {
  switch (action.type) {
    case "ADD_SUCCESS":
      window.open("tacademics", "_self");
      return {};
    case "ADD_ERROR":
      window.open("tacademics", "_self");
      return {};
    default:
      return state;
  }
};
export default Academic;
