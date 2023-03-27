import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const calcDate = (start: any, end: any) => {
  // get the difference between the moments
  const diff = dayjs(start).diff(end);

  //express as a duration
  const diffDuration = dayjs.duration(diff);

  const yr = Math.abs(diffDuration.years());
  const mos = Math.abs(diffDuration.months());

  return yr > 0 ? `${yr} yr ${mos}  mos` : `${mos}  mos`;
};
