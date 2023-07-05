// import Home from '../src/page/Home'

// function App() {
//     return(
//         <Home />
//     );
// }export default App;

// App.js

import React, { useState } from 'react';
import './App.css';
import './components/Styles/dark.css';
import Home from '../src/page/Home'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      {/* <button onClick={toggleDarkMode}>Alternar tema</button> */}
      <Home darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
    </div>
  );
}

export default App;
