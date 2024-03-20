import { atom } from "recoil";

const descriptionState = atom({
  key: "DescriptionState",
  default: "",
});

export default descriptionState;
