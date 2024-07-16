import React from 'react';

import Link from 'next/link';

import Card from '@/components/ui/Card';

function Login() {
  return (
    <Card>
      Please login to continue
      <Link href='/login' className='btn'>
        go to Login
      </Link>
    </Card>
  );
}

export default Login;
