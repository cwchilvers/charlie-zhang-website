import React from 'react';

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';

import CustomScrollbar from './components/Scrollbar';

function App() {
  return (
    <div className="App">
      {/* <CustomScrollbar> */}
        <Header />
        <Home />
        <About />
      {/* </CustomScrollbar> */}
    </div>
  );
}

export default App;
