import { type ClassValue, clsx } from 'clsx';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const calcDate = (start: string, end: string | null) => {
  const startDate = dayjs(start).startOf('month');
  const endDate = end ? dayjs(end).endOf('month') : dayjs().endOf('month'); // If end is null, use current month

  // Calculate the difference in months
  const diffMonths = endDate.diff(startDate, 'month');

  // Add one more month if there's any partial month
  const diffMonthsAdjusted =
    endDate.date() >= startDate.date() ? diffMonths + 1 : diffMonths;

  // //express as a duration
  // const diffDuration: duration.Duration = dayjs.duration(diff);

  const years = Math.floor(diffMonthsAdjusted / 12);
  const remainingMonths = diffMonthsAdjusted % 12;

  if (diffMonthsAdjusted > 12) {
    return `${years} yr ${remainingMonths ? `${remainingMonths} mos` : ''}`;
  }

  return `${diffMonthsAdjusted} mos`;
};
