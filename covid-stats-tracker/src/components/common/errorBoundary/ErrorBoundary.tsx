import React from 'react';

import { Error } from '../error/Error';
import { IErrorBoundaryState } from './IErrorBoundaryState';

export class ErrorBoundary extends React.Component<{}, IErrorBoundaryState> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <Error />;
    }

    return this.props.children;
  }
}
