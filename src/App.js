
import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './component/Main';
import Home from './component/Home';
import Notfound from './component/Notfound';
import Download from './component/Download';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path='/films' element={<Main/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/download' element={<Download/>}/>
          <Route path='*' element={<Notfound/>}/>
        </Routes>
    </Router>

  );
}

export default App;
