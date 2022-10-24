import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import Rawpost from './Components/Navbar/Rawpost';
 import { originals,ActionMovies } from './url';
function App() {
  return (
    <div className="App">
     <Navbar/>
 <Banner/>
 <Rawpost url={originals} title={'Netflix Orginals'}/>
 <Rawpost url={ActionMovies} title='Action' isSmall />
    </div>

    
  );
}

export default App;
