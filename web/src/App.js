import logo from './logo.svg';

import Event from './components/Event';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
    </div>
  );
}

export default App;
