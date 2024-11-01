import React from 'react';
import { DatePickerProps } from 'react-datepicker';

export type CustomDatePickerProps = DatePickerProps & {
  className: string;
  pickerType: 'from' | 'to';
  fromDateValue?: Date;
  toDateValue?: Date;
  isToDatePickerOpen?: boolean;
  onChange?: (date: Date | null, event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void;
};
