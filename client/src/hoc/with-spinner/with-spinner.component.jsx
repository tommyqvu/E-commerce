import React from 'react';
import SpinnerCom from '../../components/spinner/spinner.component';
const WithSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? <SpinnerCom /> : <WrappedComponent {...otherProps} />;
  };
  return Spinner;
};

export default WithSpinner;
