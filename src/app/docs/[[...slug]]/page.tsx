import React from 'react';

function page({ params }: { params: { slug: string[] } }) {
  const { slug } = params;
  if (slug?.length === 2) {
    return (
      <h1>
        Docs {slug[0]} / feature {slug[1]}
      </h1>
    );
  } else if (slug?.length === 1) {
    return <h1>Docs {slug[0]}</h1>;
  }
  return <h1>Docs Home</h1>;
}
export default page;
