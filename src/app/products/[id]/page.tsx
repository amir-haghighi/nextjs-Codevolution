import React from 'react';

function Details({ params }: { params: { id: string } }) {
  return <h1>Details of product {params.id} </h1>;
}

export default Details;
