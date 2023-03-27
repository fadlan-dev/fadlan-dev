import React from 'react';

type Props = {
  open: boolean;
  onToggle: () => void;
  className?: string;
};

const index = ({ open, onToggle, className }: Props) => {
  return (
    <button
      className={`w-10 h-10 relative hover:bg-zinc-100 dark:hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 rounded ${className}`}
      onClick={onToggle}
    >
      <span className='sr-only'>Open main menu</span>
      <div className='block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <span
          aria-hidden='true'
          className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
            open ? 'rotate-45' : ' -translate-y-1.5'
          }`}
        />
        <span
          aria-hidden='true'
          className={`block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out ${
            open ? 'opacity-0' : ''
          }`}
        />
        <span
          aria-hidden='true'
          className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${
            open ? '-rotate-45' : ' translate-y-1.5'
          }`}
        />
      </div>
    </button>
  );
};

export default index;
