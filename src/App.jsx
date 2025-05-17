import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/NavigationBar/Navbar';
import Home from "./components/NavigationBar/Home";
import About from './components/NavigationBar/About'
import Contact from './components/NavigationBar/Contact'
import Feedback from './components/NavigationBar/Feedback'
import Footer from './components/FooterBar/Footer'
import './App.css'


function App() {


  return (
    <>
      <Router>
        <div className='container'>
        <Navbar />
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/feedback' element={<Feedback />} />
          </Routes>
        </div>
        <Footer/>
        </div>


      </Router>
    </>
  )
}

export default App
