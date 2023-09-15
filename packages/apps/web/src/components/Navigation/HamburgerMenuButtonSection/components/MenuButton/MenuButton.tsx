import type { Dispatch, SetStateAction } from "react";

export interface IMenuButtonProps {
  isSideMenuOpen: boolean;
  setIsSideMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export default function MenuButton({
  isSideMenuOpen,
  setIsSideMenuOpen,
}: IMenuButtonProps) {
  return (
    <button
      id="menuToggle"
      className="p-2"
      onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
    >
      <img
        src="/assets/hamburger-menu.svg"
        alt="My Icon"
        className="w-6 h-6 float-right"
      />
    </button>
  );
}
