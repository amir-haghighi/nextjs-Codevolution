import React from 'react';

import Link from 'next/link';

import Card from '@/components/ui/card';

function Notifications() {
  return (
    <Card>
      <h1>Notifications</h1>
      <Link href='dashboard/archive' className='btn'>
        Check the archive
      </Link>
    </Card>
  );
}

export default Notifications;
