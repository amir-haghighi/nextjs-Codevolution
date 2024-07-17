'use client';
import React from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import useModal from '@/hooks/modal/useModal';

import { images } from '../../_photos/photos';

function SinglePhoto({ params }: { params: { photoId: string } }) {
  const router = useRouter();
  const { isOpen, openModal, closeModal, ModalComponent, onClose } = useModal();

  onClose(() => {
    router.back(); // Navigate back when modal is closed
  });
  console.log('isOpen', isOpen);
  return (
    <>
      <h1 className='bg-red-400 w-96 h-96'>hiiii</h1>
      <ModalComponent>
        <div className='relative h-[85vh]'>
          <Image
            className='object-contain max-h-[90%]'
            alt={images[+params.photoId].title}
            src={images[+params.photoId].href}
          />
          <p className='font-bold p-4 pl-0'>{images[+params.photoId].title}</p>
        </div>
      </ModalComponent>
    </>
  );
}

export default SinglePhoto;
