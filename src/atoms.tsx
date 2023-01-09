import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const isVisibleState = atom({
  key: "isVisible",
  default: true,
  effects_UNSTABLE: [persistAtom],
});

export const navActiveState = atom({
  key: "navActive",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const navState = atom({
  key: "navState",
  default: "/mysite",
  effects_UNSTABLE: [persistAtom],
});
