import React from 'react';
import experiences from '@/constants/experiences.json';
import dayjs from 'dayjs';
import { calcDate } from '@/libs/utils';

type Props = {};

const textSecondary = 'text-slate-700 dark:text-slate-300';

const Index = (props: Props) => {
  return (
    <section id='experience'>
      <div className='container px-6 pt-36'>
        <div className='max-w-xl m-auto flex flex-col gap-4 min-h-screen'>
          <h2 className='text-black dark:text-white text-2xl font-bold'>
            Where I’ve Worked
          </h2>
          <div>
            <div className='max-w-xl mx-auto'>
              <ul className='space-y-12'>
                {experiences.map((exp, i) => (
                  <li
                    key={i}
                    className='flex flex-col sm:flex-row items-start gap-x-4'
                  >
                    <div
                      className={`max-w-[140px] w-full flex flex-row sm:justify-end gap-1 text-sm ${textSecondary}`}
                    >
                      <p className='mt-[2px] whitespace-nowrap'>
                        {`${dayjs(exp.start_date).format('MMM YYYY')} - ${
                          exp.end_date
                            ? dayjs(exp.end_date).format('MMM YYYY')
                            : 'Present'
                        }`}
                      </p>
                    </div>
                    <div className='w-full flex-1'>
                      <div className='flex items-center justify-between space-x-4 dark:text-gray-400'>
                        <p className='text-black dark:text-white font-bold'>
                          {exp.position}
                        </p>
                        <span
                          className={`text-xs whitespace-nowrap ${textSecondary}`}
                        >
                          {calcDate(exp.start_date, exp.end_date || new Date())}
                        </span>
                      </div>
                      <div
                        className={`flex flex-col gap-2 text-sm ${textSecondary}`}
                      >
                        <div className='flex gap-1'>
                          {exp.company.website ? (
                            <a
                              href={exp.company.website}
                              target='_blank'
                              className={`font-bold hover:underline text-primary`}
                            >
                              {exp.company.name}
                            </a>
                          ) : (
                            <p className='font-bold text-primary'>
                              {exp.company.name}
                            </p>
                          )}
                          {'·'}
                          <span
                            className={`${textSecondary} font-normal text-sm`}
                          >
                            {exp.employment_type}
                          </span>
                        </div>
                      </div>
                      <p className={`${textSecondary} text-sm`}>
                        {exp.location}
                      </p>
                      <ol
                        className={`flex flex-wrap items-center gap-x-1 ${textSecondary}`}
                      >
                        {exp.techs.map((tech, i) => (
                          <React.Fragment key={tech}>
                            <li className='text-sm'>{tech}</li>
                            {i < exp.techs.length - 1 && '·'}
                          </React.Fragment>
                        ))}
                      </ol>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
