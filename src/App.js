import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from './Shared/Components/Navbar/Navbar';
import Footer from './Shared/Components/Footer/Footer';
import CopyRight from './Shared/Components/CopyRight/CopyRight'
import Layouts from './Shared/Components/Layouts/Layouts';
import { Route, Routes } from 'react-router-dom';
import RequestService from './Shared/Pages/RequestService/RequestService';
import ScrollToTop from './Shared/Components/Scroll/Scroll';
import Privacy from './Shared/Pages/Privacy/Privacy';
import Terms from './Shared/Pages/Terms/Terms';

function App() {
  return (
    <div className="App">
    <Navbar />
    <ScrollToTop />
    <Routes>
    <Route path='/' element={<Layouts />}/>
    <Route path='/request-service' element={<RequestService />}/>
    <Route path='/privacy' element={<Privacy />}/>
    <Route path='/terms' element={<Terms />}/>
    </Routes>
    <Footer />
    <CopyRight />
    </div>
  );
}

export default App;
