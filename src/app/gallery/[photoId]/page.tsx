'use client';
import React from 'react';

import Image from 'next/image';

import { images } from '../_photos/photos';

function SinglePhoto({ params }: { params: { photoId: string } }) {
  return (
    <>
      <div>
        <Image
          alt={images[+params.photoId].title}
          src={images[+params.photoId].href}
        />
        <p className='font-bold p-4 pl-0'>{images[+params.photoId].title}</p>
      </div>
    </>
  );
}

export default SinglePhoto;
