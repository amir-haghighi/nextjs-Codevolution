// app/Navs.js
'use client';

import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'home', href: '/' },
  { name: 'about', href: '/about' },
  { name: 'docs', href: '/docs' },
  { name: 'products', href: '/products' },
  { name: 'Login', href: '/login' },
  { name: 'Dashboard', href: '/dashboard' },
];

export default function Navs() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  return (
    <nav>
      {navLinks.map((link) => {
        const isActive =
          link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.href}
            className={
              isActive ? 'px-4 font-bold text-gray-800' : 'px-4 text-gray-50'
            }
          >
            {link.name}
          </Link>
        );
      })}
      <div>
        {segments.length > 1 &&
          segments.map((segment, index) => {
            const href = '/' + segments.slice(0, index + 1).join('/');
            return (
              <React.Fragment key={index}>
                <Link href={href} className='text-blue-600 hover:underline'>
                  {segment}
                </Link>

                {index < segments.length - 1 && ' / '}
              </React.Fragment>
            );
          })}
      </div>
    </nav>
  );
}
