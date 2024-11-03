import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { useAxios } from '@/hooks/useAxios';
import { COUNTRY_CODE, DAYS_OF_WEEK } from '@/configs/constants';
import { getFormattedDate } from '@/components/common.ts';
import { AxiosMethods, HolidayResponse, SearchBtnProps, SearchHoliday } from '@/types';

/**
 * Search Button Component
 * @param {Object} props - The props object for the component.
 * @param props.fromDate - Start date of date picker
 * @param props.toDate - End date of date picker
 * @param props.setHolidayRows - holiday row data setState
 * @param props.setIsShowHolidayList - ‘hide and show’ the holiday list
 * @constructor
 */
export default function SearchBtn(props: SearchBtnProps): React.JSX.Element {
  const { fromDate, toDate, setHolidayRows, setIsShowHolidayList }: SearchBtnProps = props;
  const { axiosGet }: AxiosMethods = useAxios();

  // Create an array of year values between fromDate and toDate
  function getYearsArray(fromDateParam: Date, toDateParam: Date): number[] {
    const startYear = fromDateParam.getFullYear();
    const endYear = toDateParam.getFullYear();
    return Array.from({ length: endYear - startYear + 1 }, (_, index) => startYear + index);
  }

  // Click the search button to call the holiday API and process the required data
  const searchBtnClick = async (_event: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    setIsShowHolidayList(false);
    const yearArray: number[] = getYearsArray(fromDate, toDate);
    const holidayData: HolidayResponse[] = (
      await Promise.all(yearArray.map(year => axiosGet<HolidayResponse[]>(`${year}/${COUNTRY_CODE}`)))
    ).flat();

    const startDate: string = getFormattedDate('yyyy-mm-dd', fromDate);
    const endDate: string = getFormattedDate('yyyy-mm-dd', toDate);
    setHolidayRows(
      holidayData.reduce((acc: SearchHoliday[], holiday: HolidayResponse): SearchHoliday[] => {
        if (holiday.date >= startDate && holiday.date <= endDate) {
          acc.push({
            holidayDate: holiday.date,
            dayOfTheWeek: DAYS_OF_WEEK[new Date(holiday.date).getDay()],
            holidayInfo: holiday.localName
          });
        }
        return acc;
      }, [])
    );
  };

  return (
    <Button className="search-btn" variant="outlined" startIcon={<SearchIcon />} onClick={searchBtnClick}>
      검색
    </Button>
  );
}
