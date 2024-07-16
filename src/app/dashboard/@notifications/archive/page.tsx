import React from 'react';

import Link from 'next/link';

function ArchiveNotifications() {
  return (
    <div className='card bg-base-300  p-4 shadow-xl  m-4'>
      <h1>Notifications</h1>
      <p className='text-blue-700'>Archived</p>
      <Link href='/dashboard' className='btn'>
        get back to default
      </Link>
    </div>
  );
}

export default ArchiveNotifications;
