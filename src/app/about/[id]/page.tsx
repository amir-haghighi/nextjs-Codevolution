import React from "react";

import { Metadata } from "next";

type Props = {
  params: { id: string };
};
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) =>
    setTimeout(() => {
      resolve(`About Amir${params.id}`);
    }, 2000)
  );
  return {
    title: `About amir${title}`,
  };
};

function page({ params }: Props) {
  return (
    <div>
      About <span>{params.id}</span>
    </div>
  );
}

export default page;
