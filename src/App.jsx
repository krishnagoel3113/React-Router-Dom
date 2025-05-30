import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavigationBar/Navbar/Navbar';
import Home from "./components/NavigationBar/Home/Home";
import AllTodos from './components/NavigationBar/ALLTODOS/AllTodos';
import Create from './components/NavigationBar/CreateTodos/Create';
import Feedback from './components/NavigationBar/Feedback/Feedback';
import Footer from './components/FooterBar/Footer';
import './App.css';
import { TodoContext } from './components/TodoContext/TodoContext';
import { useState } from 'react';
function App() {
  const[todos,setTodos] = useState([]);

  
  return (
    <TodoContext.Provider value={{todos,setTodos}}>
      <Router>
        <div className='box'>
          <Navbar />
          <div>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/alltodos' element={<AllTodos />} />
              <Route path='/create' element={<Create />} />
              <Route path='/feedback' element={<Feedback />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </TodoContext.Provider>
  );
}

export default App;
