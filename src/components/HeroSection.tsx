import Link from 'next/link';
import React from 'react';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { twMerge } from 'tailwind-merge';

type Props = {};

const Index = (props: Props) => {
  return (
    <section id='home'>
      <div className='container px-6'>
        <div className='h-screen flex flex-col justify-center'>
          <p className='text-slate-800 dark:text-slate-200'>Hi, my name is</p>
          <h2 className='w-fit text-4xl sm:text-6xl font-bold mt-2 text-back dark:text-white'>
            Fadlan Jehteerokee
          </h2>
          <h2 className='w-fit text-3xl sm:text-6xl font-bold text-primary'>
            Front end developer.
          </h2>
          <div className='flex items-center gap-2 text-slate-800 dark:text-slate-200 mt-2'>
            <p>Coding</p>
            <span>·</span>
            <p>Running</p>
          </div>
          <div className='flex flex-row gap-2 text-slate-800 dark:text-slate-200 mt-2'>
            <Link href={'https://github.com/fadlan-dev'} target='_blank'>
              <GitHubLogoIcon width={24} height={24} />
            </Link>
            <Link
              href={'https://www.linkedin.com/in/fadlan-jehteerokee/'}
              target='_blank'
            >
              <LinkedInLogoIcon width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
