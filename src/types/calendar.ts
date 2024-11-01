import React, { CSSProperties } from 'react';
import * as ReactSpinners from 'react-spinners';
import { DatePickerProps } from 'react-datepicker';
import { SetState } from '@/types/common.ts';
import { TableCellProps } from '@mui/material/TableCell/TableCell';

export interface HolidayResponse {
  date: string;
  localName: string;
  name: string;
  countryCode: string;
  fixed: boolean;
  global: boolean;
  counties: string | null;
  launchYear: string | null;
  types: string[];
}

export interface SearchHoliday {
  holidayDate: string;
  dayOfTheWeek: string;
  holidayInfo: string;
}

export type CustomDatePickerProps = DatePickerProps & {
  className: string;
  pickerType: 'from' | 'to';
  fromDateValue?: Date;
  toDateValue?: Date;
  isToDatePickerOpen?: boolean;
  onChange?: (date: Date | null, event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void;
};

export interface SearchBtnProps {
  fromDate: Date;
  toDate: Date;
  setHolidayRows: SetState<SearchHoliday[]>;
  setIsShowHolidayList: SetState<boolean>;
}

export type FormatDate = 'yyyy-mm-dd' | 'yyyy-mm' | 'mm-dd' | 'yyyymmdd' | 'yyyymm' | 'mmdd';

export interface TableColumns {
  label: string;
  tableCellProps?: TableCellProps;
}

export interface TableRows<T> {
  data: T[];
  tableCellProps?: TableCellProps[];
}

export interface CommonTableProps<T> {
  columns: TableColumns[];
  rows: TableRows<T>[];
}

export interface SpinnerProps {
  spinnerType: keyof typeof ReactSpinners;
  size?: number;
  color?: string;
  loading: boolean;
  cssOverride?: CSSProperties;
  speedMultiplier?: number;
}
