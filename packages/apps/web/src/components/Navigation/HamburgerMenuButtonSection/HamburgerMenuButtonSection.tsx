import { useState } from "react";

import { SocialMediaAccounts, MenuButton } from "./components";
import SideMenuSection from "../SideMenuSection";

export default function HamburgerMenuButtonSection() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <div className="flex items-center">
      <SocialMediaAccounts />

      <MenuButton
        isSideMenuOpen={isSideMenuOpen}
        setIsSideMenuOpen={setIsSideMenuOpen}
      />

      <SideMenuSection
        isSideMenuOpen={isSideMenuOpen}
        setIsSideMenuOpen={setIsSideMenuOpen}
      />
    </div>
  );
}
