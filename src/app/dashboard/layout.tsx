import React from 'react';

import { getRandomIntegerByMax } from '@/utils/utils';

function DashboardLayout({
  children,
  revenue,
  users,
  notifications,
  login,
}: {
  children: React.ReactNode;
  revenue: React.ReactNode;
  users: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const random = getRandomIntegerByMax(2);
  let isLoggedIn = true;
  if (random > 1) {
    isLoggedIn = false;
  }
  return isLoggedIn ? (
    <div className='flex'>
      {children}
      <div className='flex flex-col'>
        <div>{revenue}</div>
        <div>{users}</div>
      </div>
      <div className='flex'>{notifications}</div>
    </div>
  ) : (
    <>{login}</>
  );
}

export default DashboardLayout;
