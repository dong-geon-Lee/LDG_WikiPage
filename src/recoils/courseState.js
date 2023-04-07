import { atom } from "recoil";
import { courseDatas } from "../data/mockData";

export const courseState = atom({
  key: "courseDatas",
  default: courseDatas,
});
