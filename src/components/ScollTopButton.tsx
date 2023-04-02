'use client';
import useScrollPosition from '@/hooks/useScroll';
import { useEffect } from 'react';
import { DoubleArrowUpIcon } from '@radix-ui/react-icons';

type Props = {};

const Index = (props: Props) => {
  const scrollPosition = useScrollPosition();
  const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

  const handleScrollToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  useEffect(() => {
    document.addEventListener('scroll', () => onScroll());
    return () => document.removeEventListener('scroll', () => onScroll());
  }, []);

  const onScroll = () => {
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    // let scrollPercentRounded = Math.round(scrollPercent * 100);
    let degrees = scrollPercent * 360;

    const bg = document.getElementsByClassName(
      'bg'
    ) as HTMLCollectionOf<HTMLElement>;

    if (bg) {
      bg[0].style.background = `conic-gradient(currentColor ${degrees}deg, transparent ${degrees}deg)`;
    }
  };

  return (
    <div
      className={` fixed right-6 bottom-6 transition z-10 rounded-full bg-white dark:bg-black ${
        scrollPosition > 64 ? 'visible shadow' : 'invisible'
      }`}
    >
      <div className='bg text-primary rounded-full p-1 '>
        <div className='bg-white dark:bg-black rounded-full'>
          <button
            className='w-10 h-10 flex justify-center items-center rounded-full text-black dark:text-white '
            onClick={handleScrollToTop}
          >
            <DoubleArrowUpIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
