import { Routes, Route } from "react-router-dom";
import './App.css';
import { ChangeColor } from './Components/ChangeColor';
import { Login } from './Components/Login';
import { Navbar } from './Components/Navbar';
import { Profile } from './Components/Profile';
import { Home } from './Container/Home';
import { About } from './Container/About';


function App() {
  return (
   
    <div className="App">
        <Navbar />
        <div>
          <Routes >
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={< About />} />
          </Routes> 
        </div> 
    </div>
    
  );
}

export default App;
