import React from "react";

import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1>Welcome Home!</h1>
      <Link href="/about">About</Link>
    </div>
  );
}

export default HomePage;
