const initstate = {
  name: "",
  email: "",
  dob: "",
  addr: "",
  phno: "",
  devt: "",
  oss: "",
  dbs: "",
  coc: "",
  secb: "",
  secp: "",
  highb: "",
  highp: "",
  gender: "",
  type: "",
  ugc: "",
  ugd: "",
  pgc: "",
  pgd: ""
};
const Details = (state = initstate, action) => {
  switch (action.type) {
    case "UPDATE_EVENT_SUCCESS":
      if (action.details.type === "student") {
        window.open("/spersonal", "_self");
      } else if (action.details.type === "teacher") {
        window.open("/tpersonal", "_self");
      }

      return { ...action.details };
    default:
      return { ...action.details };
  }
};
export default Details;
