'use client';
import React from 'react';

import { getRandomIntegerByMax } from '@/utils/utils';

function Register() {
  const random = getRandomIntegerByMax(1);
  if (random === 1) {
    throw new Error('Error Handling by Amir 😎');
  }
  return (
    <>
      <h1>Register</h1>
      <p>
        This page has error handling Mechnism , and will throw error with the
        chance of 50%
      </p>
    </>
  );
}

export default Register;
