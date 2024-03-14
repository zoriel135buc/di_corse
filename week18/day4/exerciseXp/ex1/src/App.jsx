import { ThemeProvider, useTheme } from "./Components/ThemeContext";
import "./App.css";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <button onClick={toggleTheme}>toggleTheme</button>
      <p>Current Theme: {theme}</p>
    </div>
  );
};

function Content() {
  const { theme } = useTheme();
  const themeStyles = {
    light: {
      backgroundColor: "#ffffff",
      color: "#333333",
    },
    dark: {
      backgroundColor: "#333333",
      color: "#ffffff",
    },
  };
  return (
    <div style={themeStyles[theme]} className="conte">
      <h2>This is the Content</h2>
    </div>
  );
}

function App() {
  return (
    <>
      <ThemeProvider>
        <div className="App">
          <h1>Theme Switcher Example</h1>
          <ThemeSwitcher />
          <Content />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
