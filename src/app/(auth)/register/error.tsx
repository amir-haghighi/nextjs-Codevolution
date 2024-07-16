'use client';
import React from 'react';

function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      {error.message}
      <button
        onClick={reset}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
      >
        Try again
      </button>
    </div>
  );
}

export default Error;
