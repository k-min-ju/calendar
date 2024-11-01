import React, { useState } from 'react';
import { ReactDatePicker } from '@/components';
import { SEARCH_MAX_DATE } from '@/configs/constants';
import { UseState } from '@/types';

/**
 * Calendar Component
 * @description top-level parent component.
 * @constructor
 */
export default function Calendar() {
  const today: Date = new Date();

  const [fromDate, setFromDate]: UseState<Date> = useState<Date>(new Date(today.getFullYear(), today.getMonth(), 1));
  const [toDate, setToDate]: UseState<Date> = useState<Date>(new Date(today.getFullYear(), today.getMonth() + 1, 0));
  const [isToDatePickerOpen, setIsToDatePickerOpen]: UseState<boolean> = useState<boolean>(false);

  const fromMinDate: Date = new Date(toDate.getFullYear() - 2, toDate.getMonth(), toDate.getDate());
  const toMaxDate: Date = new Date(fromDate.getFullYear() + 2, fromDate.getMonth(), fromDate.getDate());

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

  return (
    <>
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
          onClickOutside={(_event: MouseEvent) => setIsToDatePickerOpen(false)}
          toDateValue={toDate}
          minDate={fromMinDate}
          maxDate={toMaxDate > SEARCH_MAX_DATE ? SEARCH_MAX_DATE : toMaxDate}
          dateFormat="yyyy-MM-dd"
          isToDatePickerOpen={isToDatePickerOpen}
        />
      </div>
    </>
  );
}
