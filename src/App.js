import Layout from "./Components/Layout/Layout";
import {BrowserRouter, Routes, Route} from 'react-router-dom';     // Routes = container,  Route = route set karnyasathi
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Menu from './Pages/Menu';
import Pagenotfound from './Pages/Pagenontfound';

function App() {
  return (
    <div>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="*" element={<Pagenotfound />} />

          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
