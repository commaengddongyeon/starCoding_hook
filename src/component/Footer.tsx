// CH5 - useContext
import React, {useContext} from 'react';{}
import { ThemeContext } from '../context/ThemeContext';

const Footer = () => {
  const {isDark, setIsDark} = useContext(ThemeContext);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div
      className='footer'
      style={{
        backgroundColor: isDark ? 'black' : 'lightgrey'
      }}
    >
        <button className='button' onClick={toggleTheme}>
           DarkMode
        </button>
    </div>
  )
}

export default Footer;
