import React from 'react';
import * as ReactSpinners from 'react-spinners';
import { SpinnerProps, SpinnerTypeKeys } from '@/types';

/**
 * https://www.davidhu.io/react-spinners/
 * @param {Object} props - Props change for each spinner component.
 * @param props.spinnerType - Spinner type
 * @constructor
 */
export default function Spinner<T extends SpinnerTypeKeys>({
  spinnerType,
  ...props
}: SpinnerProps<T>): React.JSX.Element {
  const LoaderComponent = ReactSpinners[spinnerType] as React.ComponentType;
  return (
    <div className="react-spinner-loading">
      <LoaderComponent {...props} />
    </div>
  );
}
