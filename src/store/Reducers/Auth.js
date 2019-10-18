const initState = {
  authError: null,
  log: "",
  type: ""
};
const Auth = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log(action.err);
      if (action.err.code === "auth/user-not-found") {
        state.authError = "User not found";
      } else if (action.err.code === "auth/wrong-password") {
        state.authError = "Invalid Password";
      } else {
        state.authError = null;
        state.log = "Signing in....";
      }
      return { ...state };
    case "LOGIN_SUCCESS":
      console.log(action);
      if (action.utype === "student") {
        window.open("/student", "_self");
      } else if (action.utype === "teacher") {
        window.open("/teacher", "_self");
      }

      return {
        ...state,
        authError: null,
        type: action.utype
      };
    case "LOGOUT_SUCCESS":
      return {
        ...state,
        authError: null
      };
    case "SIGNUP_SUCCESS":
      if (action.utype === "student") {
        window.open("/student", "_self");
      } else {
        window.open("/teacher", "_self");
      }

      return {};
    default:
      return state;
  }
};
export default Auth;
