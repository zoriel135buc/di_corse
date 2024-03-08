import React from "react";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      errorInfo: null,
      hasError: false,
    };
  }
  componentDidCatch = (error, errorInfo) => {
    this.setState({ hasError: true, errorInfo: errorInfo, error: error });
    console.log(error);
  };
  render() {
    if (this.state.hasError) {
      return (
        <>
          <h3>somthing get wrong</h3>
          <h3>
            {" "}
            <details style={{ whiteSpace: "pre-wrap" }}>
              {this.state.hasError && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          </h3>
        </>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
