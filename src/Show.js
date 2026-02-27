import { useState } from 'react';
import { SunIcon, MoonIcon } from'@heroicons/react/24/outline';
import './Show.css';


const Show = () => {


 const [theme, setTheme] = useState("light");
 const className = `layout ${theme}`;
  const updateTheme = (theme) => {
   setTheme(theme);
 }


 return (
   <div className={className}>
     <div className="buttons">
       <button className="btn" value="light" onClick={((e) => updateTheme(e.currentTarget.value))}>
         <SunIcon />
         Light theme
       </button>
       <button className="btn" value="dark" onClick={((e) => updateTheme(e.currentTarget.value))}>
         <MoonIcon />
         Dark theme
       </button>
     </div>
   </div>
 )
};


export default Show;