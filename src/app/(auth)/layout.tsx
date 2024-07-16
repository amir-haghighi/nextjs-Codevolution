'use client';
import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Login', href: '/login' },
  { name: 'Register', href: '/register' },
  { name: 'Forgot Password', href: '/forgot-password' },
];
function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  console.log('pathname', pathname);
  return (
    <>
      <div className='bg-slate-400'>
        {navLinks.map((link) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <Link
              href={link.href}
              key={link.href}
              className={
                isActive
                  ? 'px-4 font-bold text-gray-800 '
                  : 'px-4 text-gray-500'
              }
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      {children}
    </>
  );
}

export default AuthLayout;
