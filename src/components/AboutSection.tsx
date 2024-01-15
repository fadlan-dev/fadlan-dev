import Image from 'next/image';
import React from 'react';

import certificates from '@/constants/certificates.json';
import Link from 'next/link';
import Avatar from './Avatar';

type Props = {};

const TECH_STACK = ['JavaScript', 'TypeScript', 'React', 'Nextjs'];

const Index = (props: Props) => {
  return (
    <section id='about'>
      <div className='container px-6 pt-36'>
        <div className='flex flex-col md:flex-row gap-4'>
          <div className=' basis-1/2 self-center'>
            <h2 className='text-foreground text-2xl font-bold'>About Me</h2>
            <p className='mt-4 text-muted-foreground'>
              I am a developer with a thorough knowledge of
              <span className='text-foreground font-medium px-1'>
                JavaScript, TypeScript, React and Nextjs.
              </span>
              I have a host of projects to demonstrate that, so feel free to
              check out my featured section or my portfolio. I&apos;m currently
              working as a web developer at
              <span className='text-foreground font-bold px-1'>
                THE MONK GAMES CO., LTD.
              </span>
              (Full-time) and in my free time I&apos;m learning Flutter
              implementation
            </p>
            <p className='mt-4 text-muted-foreground'>
              Here are a few technologies I’ve been working with recently:
            </p>
            <ol className='flex flex-row flex-wrap sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-1 text-foreground'>
              {TECH_STACK.map((tech, i) => (
                <React.Fragment key={tech}>
                  <li>
                    <p>{tech}</p>
                  </li>
                  {i < TECH_STACK.length - 1 ? <span>·</span> : ''}
                </React.Fragment>
              ))}
            </ol>
            <div className='mt-4'>
              <p className='text-muted-foreground'>Certificate :</p>
              <ol className='list-disc pl-6 text-foreground'>
                {certificates.map((cert, i) => (
                  <li key={cert.title}>
                    <Link
                      href={cert.img}
                      target='_blank'
                      className='hover:underline transition-all'
                    >
                      <span>{cert.title}</span>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className='basis-1/2 self-center'>
            <div className='flex items-center justify-center m-auto bg-foreground w-72 h-72 rounded-full overflow-hidden p-2'>
              {/* <Avatar /> */}
              <Image
                src='/images/me.png'
                width={220}
                height={220}
                className='object-contain'
                alt='Me'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
