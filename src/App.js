import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  return <button onClick={toggleTheme}>
  Current theme: {theme}
</button>;
}

export default App;
