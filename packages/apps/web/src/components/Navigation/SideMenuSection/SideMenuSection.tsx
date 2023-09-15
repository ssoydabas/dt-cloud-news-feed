import { Dispatch, SetStateAction } from "react";

import { regularTransition } from "~root/styles/transition";

import { SideMenuButtons } from "./components";

export interface ISideMenuSectionProps {
  isSideMenuOpen: boolean;
  setIsSideMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export default function SideMenuSection({
  isSideMenuOpen,
  setIsSideMenuOpen,
}: ISideMenuSectionProps) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex justify-end z-50 ${regularTransition} ${
        isSideMenuOpen ? "" : "pointer-events-none"
      }`}
    >
      <div
        className={`absolute top-0 left-0 w-full h-full bg-black z-10 ${regularTransition} ${
          isSideMenuOpen ? "opacity-50" : "opacity-0"
        }`}
        onClick={() => {
          setIsSideMenuOpen(!isSideMenuOpen);
        }}
      ></div>

      <div
        className={`flex flex-col items-center w-80 h-full pt-36 pb-12 bg-white shadow-lg z-20 ${regularTransition} transform ${
          isSideMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <SideMenuButtons
          onClick={() => {
            setIsSideMenuOpen(false);
          }}
        />
      </div>
    </div>
  );
}
