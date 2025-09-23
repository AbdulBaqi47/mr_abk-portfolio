import React from "react";
import MainFooter from "./footer-ui";

export default function Footer() {
  return (
    <div
      className="relative min-h-screen"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed -bottom-3 min-h-screen w-full 2xl:-bottom-32 ">
        <MainFooter />
      </div>
    </div>
  );
}
