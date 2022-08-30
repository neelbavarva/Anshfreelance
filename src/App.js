// import logo from './logo.svg';
import './App.css';
import Nav from './components/Homepage/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Homepage/Home';
import Decentral from './components/Homepage/Decentral';
import Nftdigital from './components/Homepage/Nftdigital';
import Aboutus from './components/Aboutus/Aboutus';
import Conn from './components/Contacts/Contact.js';
import Footer from './components/Homepage/Footer'
import Login from './components/Login/Login.js'
import Signup from './components/Signup/Signup.js'
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/aboutus' element={<Aboutus/>} />
            <Route path='/contact' element={<Conn/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
