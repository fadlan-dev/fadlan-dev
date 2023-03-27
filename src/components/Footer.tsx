'use client';
import React, { useEffect, useState } from 'react';

type Props = {};

const Footer = (props: Props) => {
  const [mounted, setMounted] = useState(false);
  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <footer className='h-20'>
      <div className='container p-6'>
        <p className='text-center text-sm  text-slate-800 dark:text-slate-200'>
          Designed & Built by Fadlan Jehteerokee
        </p>
      </div>
    </footer>
  );
};

export default Footer;
