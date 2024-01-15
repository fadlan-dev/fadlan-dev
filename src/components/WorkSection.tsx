import { Project } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  data: Project[];
};

const Index = ({ data }: Props) => {
  return (
    <section id='work'>
      <div className='container px-6 pt-36'>
        <div className='flex flex-col gap-4 min-h-screen'>
          <h2 className='text-foreground text-2xl font-bold'>
            Some Things I’ve Built
          </h2>
          <div>
            <ol className='flex flex-col gap-4'>
              {data.map((project, i) => (
                <li key={i} className='relativ p-0 md:p-6 rounded transition'>
                  <div className='flex gap-4 relative z-0'>
                    <Link
                      href={project.demo_url}
                      target='_blank'
                      className='basis-full md:basis-3/5 w-full h-full aspect-video relative rounded border border-border overflow-hidden transition'
                    >
                      <Image
                        className='object-cover opacity-10 dark:opacity-10 md:opacity-100 md:dark:opacity-100 '
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        priority
                      />
                    </Link>
                    <div className='flex flex-col items-start md:items-end absolute z-0 md:relative md:w-full md:h-full basis-2/5 text-start md:text-end self-center p-4 md:p-0'>
                      <p className='text-sm text-muted-foreground'>
                        Featured Project
                      </p>
                      {project.demo_url ? (
                        <Link
                          href={project.demo_url}
                          target='_blank'
                          className={`w-fit text-2xl text-foreground font-bold hover:underline`}
                        >
                          {project.title}
                        </Link>
                      ) : (
                        <p className={`text-2xl text-foreground font-bold`}>
                          {project.title}
                        </p>
                      )}
                      <div>
                        <p
                          className={`line-clamp-2 md:line-clamp-3 text-muted-foreground`}
                        >
                          {project.desc}
                        </p>
                      </div>
                      <div className='mt-1'>
                        <ol
                          className={`flex justify-start sm:justify-end flex-wrap gap-1 text-sm text-muted-foreground`}
                        >
                          {project.tech.map((tech, i) => (
                            <li
                              key={i}
                              className="last:after:content-[''] after:content-['·'] after:inline-block after:ml-1"
                            >
                              {tech}
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
