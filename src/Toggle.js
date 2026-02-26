import { useState } from 'react';

const Toggle = () => {

  const [isToggled, setIsToggled] = useState(false);

  return (
    <div>
      {isToggled ? 
      <button className="day" /> : <button className="night"/>}
    </div>
  )
};

export default Toggle;