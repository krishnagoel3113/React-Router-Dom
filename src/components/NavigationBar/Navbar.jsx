import { NavLink } from 'react-router-dom'
import './Navbar.css';
import Logo from './Logo';
const Navbar = () => {
  return (
    <>
   <nav>
    
    <ul>
        <li> <Logo /> </li>
        <li><NavLink to='/' end >Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        <li><NavLink to='/feedback'>Feedback</NavLink></li>
    </ul>
   </nav>
    </>
   
  )
}

export default Navbar