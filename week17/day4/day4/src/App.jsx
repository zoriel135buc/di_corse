import { useState } from "react";
import BuggyCounter from "./Components/BuggyCounter";
import ErrorBoundary from "./Components/ErrorBoundary";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="header">
        <p>
          <b>
            "Click on the numbers to increase the counters."
            <br />
            "The counter is programmed to throw error when it reaches 5. This
            simulates a JavaScript error in a component."
          </b>
        </p>
        <hr />
        <p>
          These two counters are inside the same error boundary. If one crashes,
          the error boundary will replace both of them.
        </p>
        <br></br>
        <ErrorBoundary>
          <BuggyCounter />
          <br></br>
          <BuggyCounter />
        </ErrorBoundary>
        <hr />
        <p>
          These two counters are each inside of their own error boundary. So if
          one crashes, the other is not affected.
        </p>
        <ErrorBoundary>
          <BuggyCounter />
          <br></br>
        </ErrorBoundary>
        <ErrorBoundary>
          <BuggyCounter />
          <br></br>
        </ErrorBoundary>
        <hr />

        <p>
          This counter is not inside of boundary. So if crashes, all other
          components are deleted.
        </p>

        <br></br>
        <BuggyCounter />
      </div>
    </>
  );
}

export default App;
