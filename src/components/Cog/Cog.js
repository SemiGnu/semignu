import cog from '../../img/Gear.svg';
import './Cog.css';
import React, { useState } from 'react';

 
const Cog = () => {
  const [spees, setSpeed] = useState(0);
 
  return (
    <img src={cog} className="spinning-cog" alt="spinning cog" />
  );
};
 
export default Cog;
