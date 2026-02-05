"use client";
import { SpotlightNavbar } from "../patterns/spotlight-navbar";

export function Navbar() {
  return (
    <div className="fixed top-6 left-0 right-0 z-100 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto">
        <SpotlightNavbar />
      </div>
    </div>
  );
}
