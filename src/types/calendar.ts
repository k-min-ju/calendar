import React from 'react';
import { DatePickerProps } from 'react-datepicker';
import { SetState } from '@/types/common.ts';

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
  setHolidayResponse: SetState<HolidayResponse[]>;
}
