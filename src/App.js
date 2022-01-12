import './App.css'

import React, { useState } from 'react';

import Navbar from './components/Navbar';
import Movies from './pages/Movies';
import AddMovie from './pages/AddMovie';


function App() {

  const [ toogleMenu, setToogleMenu ] = useState('');

  function changeMenu(pages) {
    setToogleMenu(pages);
  }

  return (
    <div>
      <Navbar clickMenu={changeMenu} />

      { 
        toogleMenu === 'movies' ?  <Movies /> : 
        toogleMenu === 'add-movie' && <AddMovie /> 
      }

      
      
    </div>
  );
}


export default App;
