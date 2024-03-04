import "./App.css";
import User from "./componeds/User.js";
import robots from "./users.json";

function App() {
  return (
    <div>
      {robots.map((item) => {
        return <User userinfo={item} />;
      })}
    </div>
  );
}

export default App;
