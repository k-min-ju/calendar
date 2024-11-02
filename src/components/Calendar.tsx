import React, { useState } from 'react';
import { CommonTable, ReactDatePicker, SearchBtn, Spinner } from '@/components';
import { SEARCH_MAX_DATE } from '@/configs/constants';
import { SearchHoliday, TableColumns, TableRows, UseState } from '@/types';
import { TableCellProps } from '@mui/material/TableCell/TableCell';
import { useLoading } from '@/context/LoadingProvider.tsx';

/**
 * Calendar Component
 * @description top-level parent component.
 * @constructor
 */
export default function Calendar(): React.JSX.Element {
  const today: Date = new Date();

  const [fromDate, setFromDate]: UseState<Date> = useState<Date>(new Date(today.getFullYear(), today.getMonth(), 1));
  const [toDate, setToDate]: UseState<Date> = useState<Date>(new Date(today.getFullYear(), today.getMonth() + 1, 0));
  const [isToDatePickerOpen, setIsToDatePickerOpen]: UseState<boolean> = useState<boolean>(false);
  const [holidayRows, setHolidayRows]: UseState<SearchHoliday[]> = useState<SearchHoliday[]>([]);
  const [isShowHolidayList, setIsShowHolidayList]: UseState<boolean> = useState<boolean>(false);
  const { isLoading } = useLoading();

  const fromMinDate: Date = new Date(toDate.getFullYear() - 2, toDate.getMonth(), toDate.getDate());
  const toMaxDate: Date = new Date(fromDate.getFullYear() + 2, fromDate.getMonth(), fromDate.getDate());
  const tableColumns: TableColumns[] = [
    { label: '날짜', tableCellProps: { align: 'center' } },
    { label: '요일', tableCellProps: { align: 'center' } },
    { label: '공휴일', tableCellProps: { align: 'center' } }
  ];
  const rowTableCellProps: TableCellProps[] = Array.from({ length: holidayRows.length }, () => ({ align: 'center' }));
  const tableRows: TableRows<SearchHoliday>[] = [{ data: holidayRows, tableCellProps: rowTableCellProps }];

  // from date picker change event
  const fromDateChange = (date: Date | null): void => {
    if (date) setFromDate(date);
    setIsToDatePickerOpen(true);
  };

  // to date picker change event
  const toDateChange = (date: Date | null): void => {
    if (date) setToDate(date);
    setIsToDatePickerOpen(false);
  };

  // holiday count click event
  const holidayCntClick = (_event: React.MouseEvent<HTMLSpanElement>): void => {
    setIsShowHolidayList(true);
  };

  return (
    <>
      {isLoading ? (
        <Spinner
          spinnerType="MoonLoader"
          loading={isLoading}
          color="#1400b7"
          size={80}
          cssOverride={{ top: '50%', left: '50%' }}
        />
      ) : null}
      <div className="calendar-search-bar">
        <ReactDatePicker
          className="react-datepicker-input from-datepicker"
          pickerType="from"
          onChange={fromDateChange}
          fromDateValue={fromDate}
          minDate={fromMinDate}
          dateFormat="yyyy-MM-dd"
        />
        <ReactDatePicker
          className="react-datepicker-input"
          pickerType="to"
          onChange={toDateChange}
          onInputClick={() => setIsToDatePickerOpen(true)}
          onClickOutside={(_event: MouseEvent): void => setIsToDatePickerOpen(false)}
          toDateValue={toDate}
          minDate={fromMinDate}
          maxDate={toMaxDate > SEARCH_MAX_DATE ? SEARCH_MAX_DATE : toMaxDate}
          dateFormat="yyyy-MM-dd"
          isToDatePickerOpen={isToDatePickerOpen}
        />
        <SearchBtn
          fromDate={fromDate}
          toDate={toDate}
          setHolidayRows={setHolidayRows}
          setIsShowHolidayList={setIsShowHolidayList}
        />
      </div>
      <div className="calendar-holiday-count">
        공휴일 수 <span onClick={holidayCntClick}>{holidayRows.length}</span>
      </div>
      {isShowHolidayList && <CommonTable columns={tableColumns} rows={tableRows} />}
    </>
  );
}
