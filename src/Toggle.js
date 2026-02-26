import { useState } from 'react';
import "./Toggle.css";

const Toggle = () => {

  const [theme, setTheme] = useState("day")
  const className = `layout ${theme}`;

  const toggleTheme = (theme) => {
    setTheme(theme);
  };

  return (
    <div className={className}>
      <div className="buttons">
        <button className="btn" value="day" onClick={((e) => toggleTheme(e.target.value))}>Day</button>
        <button className="btn" value="auto" onClick={((e) => toggleTheme(e.target.value))}>Auto</button>
        <button className="btn" value="night" onClick={((e) => toggleTheme(e.target.value))}>Night</button>
      </div>
    </div>
  )
};

export default Toggle;