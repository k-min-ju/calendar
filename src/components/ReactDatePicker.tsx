import React from 'react';
import DatePicker from 'react-datepicker';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { SEARCH_MAX_DATE, SEARCH_MIN_DATE, SEARCH_MIN_YEAR } from '@/configs/constants.ts';
import { CustomDatePickerProps } from '@/types';

/**
 * ReactDatePicker Component
 * @param {Object} props - The props object for the component.
 * @param props.className - Class name for custom style.
 * @param props.pickerType - Determine the type of date picker.
 * @param props.onChange - Callback function to handle date changes.
 * @param props.onInputClick - Date picker click event.
 * @param props.onClickOutside - External click event in date picker.
 * @param props.fromDateValue - Current value of the start date.
 * @param props.toDateValue - Current value of the end date.
 * @param props.minDate - Minimum selection date value in date picker.
 * @param props.maxDate - Maximum selection date value in date picker.
 * @param props.dateFormat - The format to display the selected date.
 * @param props.isToDatePickerOpen - Whether 'end date' date picker is open or not.
 * @constructor
 */
export default function ReactDatePicker(props: CustomDatePickerProps): React.JSX.Element {
  const {
    className,
    pickerType,
    onChange,
    onInputClick,
    onClickOutside,
    fromDateValue,
    toDateValue,
    minDate,
    maxDate,
    dateFormat,
    isToDatePickerOpen
  }: CustomDatePickerProps = props;

  return (
    <>
      <DatePicker
        className={className}
        selected={pickerType === 'from' ? fromDateValue : toDateValue}
        onChange={onChange}
        onInputClick={onInputClick}
        onClickOutside={onClickOutside}
        startDate={fromDateValue}
        endDate={toDateValue}
        minDate={minDate ? minDate : SEARCH_MIN_DATE}
        maxDate={maxDate ? maxDate : SEARCH_MAX_DATE}
        dateFormat={dateFormat}
        showYearDropdown={true}
        scrollableYearDropdown
        yearDropdownItemNumber={new Date().getFullYear() - SEARCH_MIN_YEAR}
        showMonthDropdown={true}
        showMonthYearDropdown={true}
        toggleCalendarOnIconClick
        showIcon
        icon={<DateRangeIcon />}
        open={isToDatePickerOpen}
        placeholderText={pickerType === 'from' ? 'From Date' : 'To Date'}
      />
    </>
  );
}
