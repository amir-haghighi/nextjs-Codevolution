import React from 'react';

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className='card bg-base-300  p-4 shadow-xl  m-4  flex items-center justify-center'>
      {children}
    </div>
  );
}

export default Card;
