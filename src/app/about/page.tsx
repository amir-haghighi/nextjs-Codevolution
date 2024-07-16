import React from 'react';

import Link from 'next/link';

function About() {
  return (
    <div>
      About
      <Link href='/aaabout'>"/aaabout"</Link>
      <Link href='abouttt' replace>
        "aaabout"
      </Link>
      <Link href='/'>home</Link>
    </div>
  );
}

export default About;
