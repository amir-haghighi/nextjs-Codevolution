import React from "react";

function aboutId({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  return (
    <div>
      <h1>layout for {params.id}</h1>
      {children}
    </div>
  );
}

export default aboutId;
