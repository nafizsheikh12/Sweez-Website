import logo from './logo.svg';
import './App.css';

import Navbar from './component/navbar/Navbar';
import Home from './page/home/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
    </div>
  );
}

export default App;
