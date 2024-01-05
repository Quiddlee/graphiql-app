/* eslint-disable no-console */
import { Component } from 'react';

type MyProps = {
  fallback: JSX.Element;
  children: JSX.Element;
};

type MyState = {
  hasError: boolean;
};

class ErrorBoundary extends Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, info: React.ErrorInfo) {
    console.log(error, info.componentStack);
  }

  render() {
    const { hasError } = this.state;
    const { fallback, children } = this.props;
    if (hasError) {
      return fallback;
    }
    return children;
  }
}

export default ErrorBoundary;
