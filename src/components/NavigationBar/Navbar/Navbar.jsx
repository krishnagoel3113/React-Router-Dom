import { NavLink,Link } from 'react-router-dom'
import './Navbar.css';
import Logo from '../Logo';
const Navbar = () => {
  return (
    <>
      <nav>

       <div className="navbar-container">
        <div className="logo-container">
          <Link to="/"><Logo /></Link>
        </div>

        <ul className='nav-links'>
          <li><NavLink to='/' end>Home</NavLink></li>
          <li><NavLink to='/alltodos'>All Todos</NavLink></li>
          <li><NavLink to='/create'>Create</NavLink></li>
          <li><NavLink to='/feedback'>Feedback</NavLink></li>
        </ul>
      </div>
        
      </nav>
    </>

  )
}

export default Navbar