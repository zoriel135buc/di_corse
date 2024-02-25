import "./App.css";
import User from "./componeds/User";
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
