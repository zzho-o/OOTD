import { create } from "zustand";

const useStore = create(set => ({
  userProfile: JSON.parse(localStorage.getItem("userProfile")) || null,
  setUserProfile: profile => {
    set({ userProfile: profile });
    localStorage.setItem("userProfile", JSON.stringify(profile));
  },
}));

export default useStore;
