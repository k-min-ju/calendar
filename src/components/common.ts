import { FormatDate } from '@/types';

export const getFormattedDate = (format: FormatDate, date: Date): string => {
  const yyyy: string = date.getFullYear().toString();
  const mm: string = (date.getMonth() + 1).toString().padStart(2, '0');
  const dd: string = date.getDate().toString().padStart(2, '0');

  let result: string = '';

  switch (format) {
    case 'yyyy-mm-dd':
      result = `${yyyy}-${mm}-${dd}`;
      break;
    case 'yyyy-mm':
      result = `${yyyy}-${mm}`;
      break;
    case 'mm-dd':
      result = `${mm}-${dd}`;
      break;
    case 'yyyymmdd':
      result = `${yyyy}${mm}${dd}`;
      break;
    case 'yyyymm':
      result = `${yyyy}${mm}`;
      break;
    case 'mmdd':
      result = `${mm}${dd}`;
      break;
    default:
      throw new Error('Invalid format provided');
  }

  return result;
};
