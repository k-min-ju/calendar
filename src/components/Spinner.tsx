import React from 'react';
import * as ReactSpinners from 'react-spinners';
import { SpinnerProps, SpinnerTypeKeys } from '@/types';

/**
 * https://www.davidhu.io/react-spinners/
 * @param {Object} props - The props object for the component.
 * @param props.spinnerType - Spinner type
 * @param props.size - Spinner size
 * @param props.color - Spinner color
 * @param props.loading - When true, spinner is displayed
 * @param props.cssOverride - Spinner css
 * @param props.speedMultiplier - Spinner rotation speed
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
