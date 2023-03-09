
import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Main from './component/Main';
import Home from './component/Home';
import Notfound from './component/Notfound';
import Download from './component/Download';

function App() {
  return (
    <BrowserRouter basename='/MovieKuy'>
        <Navbar />
        <Routes>
          <Route exact path='/MovieKuy' element={<Home />} />
          <Route path='/films' element={<Main />} />
          <Route path='/download' element={<Download />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
    </BrowserRouter>

  );
}

export default App;
