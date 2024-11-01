import React from 'react';
import * as ReactSpinners from 'react-spinners';
import { SpinnerProps } from '@/types';

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
export default function Spinner(props: SpinnerProps): React.JSX.Element {
  const { spinnerType, size, color, loading, cssOverride, speedMultiplier }: SpinnerProps = props;
  const LoaderComponent = ReactSpinners[spinnerType];
  return (
    <div className="react-spinner-loading">
      <LoaderComponent
        size={size}
        color={color}
        loading={loading}
        cssOverride={cssOverride}
        speedMultiplier={speedMultiplier}
      />
    </div>
  );
}
