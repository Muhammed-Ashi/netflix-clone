import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import Rawpost from './Components/Navbar/Rawpost';

function App() {
  return (
    <div className="App">
     <Navbar/>
 <Banner/>
 <Rawpost/>
    </div>

    
  );
}

export default App;
