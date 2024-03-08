import React from "react";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch = (error, errorInfo) => {
    this.setState({ hasError: true });
    console.log(error);
  };
  render() {
    if (this.state.hasError) {
      return <h3>we are soorry</h3>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
