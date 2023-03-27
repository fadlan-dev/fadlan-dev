'use client';
import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import useScrollPosition from '../hooks/useScroll';
import useWindowSize from '../hooks/useWindowSize';
import HamburgerButton from './HamburgerButton';
import ThemeButton from './ThemeButton';

type Props = {};
const MENUS = ['about', 'experience', 'work', 'contact'];
const Index = (props: Props) => {
  const scrollPosition = useScrollPosition();
  const windowSize = useWindowSize();

  const [mounted, setMounted] = useState(false);
  const [isOpen, setOpen] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (windowSize.width > 639) {
      setOpen(false);
    }
  }, [windowSize]);

  const toggleMenu = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <nav
      id='navbar'
      className={`fixed z-10 left-0 top-0 w-full bg-white dark:bg-black  border-b-zinc-200 dark:border-b-zinc-800 transition-colors fill-none backdrop-blur ${
        scrollPosition > 64 ? 'border-b' : 'border-b-0'
      }
      ${
        isOpen
          ? 'bg-opacity-100 dark:bg-opacity-100'
          : 'bg-opacity-60 dark:bg-opacity-60'
      }`}
    >
      <div className='flex items-center justify-between h-20 px-6'>
        <div>
          <Link href='#home' className='text-primary bg-gradient'>
            <Logo />
          </Link>
        </div>
        <div className='flex flex-row items-center gap-2'>
          <ul
            className={
              isOpen
                ? 'bg-white dark:bg-black backdrop-blur absolute left-0 top-20 w-full flex flex-col shadow divide-y divide-slate-200 dark:divide-slate-800 border-y border-slate-200 dark:border-slate-800'
                : 'invisible sm:visible relative w-fit sm:flex flex-row items-center gap-4 '
            }
          >
            {MENUS.map((menu) => (
              <li
                key={menu}
                className='w-full text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white capitalize px-2 py-4 text-center sm:px-0 sm:py-0'
              >
                <Link href={`#${menu}`} onClick={() => setOpen(false)}>
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
          <div className='flex items-center gap-2 relative'>
            <ThemeButton />
            <HamburgerButton
              className='block sm:hidden'
              open={isOpen}
              onToggle={toggleMenu}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Index;
