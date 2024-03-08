import { useState } from "react";
import EvantExample from "./Compponents/EvantExample";
import Form from "./Compponents/Form";
import Counter from "./Compponents/Counter";
import ErrorBoundary from "./ErrorBoundary";

import "./App.css";

function App() {
  const [countApp, setcountApp] = useState(10);
  return (
    <>
      <div>
        {/* <h2>Forms</h2>
        <Form />  */}
        <h2>Error Boundary</h2>
        <ErrorBoundary>
          <Counter />
        </ErrorBoundary>

        {/* <Counter /> */}

        {/* <h2>Evant Handler</h2> 
        {countApp}
        <EvantExample countApp={countApp} setcountApp={setcountApp} />  */}
      </div>
    </>
  );
}

export default App;
