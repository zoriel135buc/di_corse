import User from "./User";
import User1 from "./User1";
import User2 from "./User2";
import "./App.css";
import Hello from "./Hello";
import robots from "./users.json";

console.log(robots);
const users = [
  { id: 1, name: "john", email: "jjj@gmail.com" },
  { id: 2, name: "Marry", email: "mmm@gmail.com" },
  { id: 3, name: "Anne", email: "aaa@gmail.com" },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello title="props" subtitle="learning about props object" />
        {users.map((item) => {
          return <User name={item.name} a={item.email} />;
        })}
      </header>
    </div>
  );
}
export default App;
