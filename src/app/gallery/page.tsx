'use client';
import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { images } from './_photos/photos';

function Gallery() {
  const router = useRouter();
  // const { isOpen, openModal, closeModal, ModalComponent } = useModal();
  const imageTags = images.map((image, index) => {
    return (
      <Link href={`/gallery/${index}`} key={index}>
        <Image
          src={image.href}
          alt={image.title}
          className='w-52 h-52 cursor-pointer rounded-xl gap'
          // onClick={() => router.push()}
        />
      </Link>
    );
  });
  return (
    <>
      <h1 className='font-bold text-3xl m-10 ml-28 '>photos</h1>
      <div className='flex flex-wrap gap-8 justify-center'>{imageTags}</div>
    </>
  );
}

export default Gallery;
