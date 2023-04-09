import React, {useEffect} from 'react'
import Logo from '../pics/logo.png'
import { Link } from 'react-router-dom'
import M from 'materialize-css';

const Header = () => {

  useEffect(() => {
    let sidenav = document.querySelector('#mobile-demo');
    M.Sidenav.init(sidenav, {});
  });

  return (
    <header className = "navbar-fixed">
      <nav>
        <div className = "nav-wrapper">
          <Link to="/" className = "brand-logo"><img src = {Logo} alt = "Logo" className = "responsive-img circle" /></Link>
          <Link href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/admin">Admin panel</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/admin">Admin panel</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
      </ul>
    </header>
  )
}

export default Header
