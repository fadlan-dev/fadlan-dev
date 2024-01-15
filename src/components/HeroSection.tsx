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
          <p className='text-muted-foreground'>Hi, my name is</p>
          <h2 className='w-fit text-4xl sm:text-6xl font-bold mt-2 text-foreground'>
            Fadlan Jehteerokee
          </h2>
          <h2 className='w-fit text-3xl sm:text-6xl font-bold text-muted-foreground'>
            Front end developer.
          </h2>
          <div className='flex items-center gap-2 text-muted-foreground mt-2'>
            <p>Coding</p>
            <span>·</span>
            <p>Running</p>
          </div>
          <div className='flex flex-row gap-2 text-muted-foreground mt-2'>
            <Link
              href={'https://github.com/fadlan-dev'}
              aria-label='Go to github'
              target='_blank'
            >
              <GitHubLogoIcon width={24} height={24} />
            </Link>
            <Link
              href={'https://www.linkedin.com/in/fadlan-jehteerokee/'}
              aria-label='Go to linkedin'
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
