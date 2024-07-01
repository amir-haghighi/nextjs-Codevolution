import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "no matter what is in parent!",
    default: "like there title : ....",
    template: "%s hiiiiiiii",
  },
};
function aboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>aboutLayout</h1>
      {children}
    </div>
  );
}

export default aboutLayout;
