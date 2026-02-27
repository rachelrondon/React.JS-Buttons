import { useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import "./Show.css";

const Toggle = () => {

  const [theme, setTheme] = useState("light")
  const className = `layout ${theme}`;

  const toggleTheme = (theme) => {
    setTheme(theme);
  };

  return (
    <div className={className}>
      <div className="buttons">
        <button className="btn" value="light" onClick={((e) => toggleTheme(e.currentTarget.value))}><SunIcon/>Light theme</button>
        <button className="btn" value="dark" onClick={((e) => toggleTheme(e.currentTarget.value))}><MoonIcon/>Dark theme</button>
      </div>
    </div>
  )
};

export default Toggle;