const initState = {};
const Academic = (state = initState, action) => {
  switch (action.type) {
    case "ADD_SUCCESS":
      window.open("tacademics", "_self");
      return { ...state };
    case "ADD_ERROR":
      window.open("tacademics", "_self");
      return { ...state };
    case "RETRIEVE_SUCCESS":
      return { ...state, [action.id]: action.data, pre: action.pre };
    case "RETRIEVE_ERROR":
      return { ...state, data: null };
    default:
      return { ...state };
  }
};
export default Academic;
