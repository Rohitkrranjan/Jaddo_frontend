import './Navbar.css'
import { Link} from 'react-router-dom';

function Navbar() {

  return (
    <div className='navbar'>
     <div className='nav-logo'>
       <p>Jadoo</p>
     </div>
      <ul className='nav-menu'>
        <li><Link style={{textDecoration:'none',color:'black'}} to='/'>Destinations</Link></li>
        <li><Link style={{textDecoration:'none',color:'black'}} to='/hotel'>Hotels</Link></li>
        <li><Link style={{textDecoration:'none',color:'black'}} to='/flight'>Flights</Link></li>
        <li><Link style={{textDecoration:'none',color:'black'}} to='/booking'>Bookings</Link></li>
      </ul>
      <div className='navbar-login-cart'>
        <button className='login-btn'>Login</button>
        <button className='signup-btn'>Signup</button>
      </div>
    </div>


  )
}

export default Navbar