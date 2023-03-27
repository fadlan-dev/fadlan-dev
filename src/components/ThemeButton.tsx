'use client';
import { useTheme } from '@wits/next-themes';
import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { MoonIcon, SunIcon, DesktopIcon } from '@radix-ui/react-icons';

type Props = {};

const Index = (props: Props) => {
  const { theme, systemTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  /* Checking if the system theme is set and if it is, it sets the theme to the system theme. */
  useEffect(() => {
    const localStorageTheme = localStorage.getItem('theme');
    if (systemTheme) {
      setTheme(localStorageTheme || systemTheme);
    }
  }, [systemTheme]);

  /* A function that returns a different icon depending on the theme. */
  const iconSwitcher = () => {
    if (theme === 'light') return <SunIcon />;
    if (theme === 'dark') return <MoonIcon />;
    return <DesktopIcon />;
  };

  /* A function that takes a theme as a parameter and sets the theme to the theme that is passed in. */
  const toggleTheme = useCallback(
    (theme: string) => {
      setTheme(theme);
    },
    [theme]
  );

  const DropdownMenuItem = ({
    children,
    onClick,
    ...props
  }: {
    children: ReactNode;
    onClick?: () => void;
  }) => {
    return (
      <DropdownMenu.Item
        onClick={onClick}
        {...props}
        className={
          'group bg-white dark:bg-black hover:bg-slate-100 dark:hover:bg-zinc-900 text-sm rounded flex items-center h-7 px-2 py-1 relative select-none outline-none cursor-pointer'
        }
      >
        {children}
      </DropdownMenu.Item>
    );
  };

  const Separator = () => {
    return (
      <DropdownMenu.Separator className='h-[0.1px] bg-slate-200 dark:bg-zinc-800  m-1' />
    );
  };

  if (typeof document === undefined) return null;

  return (
    <>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild className='relative select-none'>
          <button
            aria-label='Theme options'
            className={` w-8 h-8 flex justify-center items-center text-sm rounded text-slate-800 dark:text-slate-200 hover:bg-zinc-100 dark:hover:bg-zinc-900 outline-none transition-colors ${
              !mounted ? 'bg-zinc-100 dark:bg-zinc-900 animate-pulse' : ''
            }`}
          >
            {mounted && iconSwitcher()}
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content
          sticky='always'
          align='end'
          className='bg-white dark:bg-black border dark:border-zinc-800 rounded p-1 mr-2'
        >
          <DropdownMenuItem onClick={() => toggleTheme('system')}>
            <DesktopIcon className='mr-2' /> System
          </DropdownMenuItem>
          <Separator />
          <DropdownMenuItem onClick={() => toggleTheme('dark')}>
            <MoonIcon className='mr-2' /> Dark
          </DropdownMenuItem>
          <Separator />
          <DropdownMenuItem onClick={() => toggleTheme('light')}>
            <SunIcon className='mr-2' />
            Light
          </DropdownMenuItem>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </>
  );
};

export default Index;
