import gnu from '../../img/Gnu.svg';
import './Blind.css';
import React, { useState } from 'react';

 
const Cog = () => { 
  return (
    <div className='blind'>
        <img src={gnu} className="gnu" alt="semignu" />
    </div>
  );
};
 
export default Cog;
