import React from 'react';

import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText,
} from './error-boundary.styles';
class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(err, info) {
    console.log(err);
  }
  render() {
    if (this.state.hasError) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/lKJiT77.png' />
          <ErrorImageText>Something went wrong...</ErrorImageText>
        </ErrorImageOverlay>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
