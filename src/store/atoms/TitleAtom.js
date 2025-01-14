import { atom } from "recoil";

const titleState = atom({
  key: "titleState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export default titleState;
