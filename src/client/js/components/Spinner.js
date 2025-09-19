import React from 'react';
import '../../css/Spinner.css';

export const Spinner = () => <div className="Spinner" />;

export const SpinnerPage = ({className}) => (
  <div className={`SpinnerPage ${className}`}>
    <Spinner />
  </div>
);
