import React from 'react';

import { notFound } from 'next/navigation';

function Review({ params }: { params: { reviewId: string; id: string } }) {
  if (+params.reviewId > 1000) {
    return notFound();
  }
  return (
    <h1>
      Review {params.reviewId} of product {params.id}
    </h1>
  );
}

export default Review;
