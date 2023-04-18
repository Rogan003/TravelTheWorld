import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css';
import Login from './Login';
import Register from './Register'

const Header = (props) => {

  useEffect(() => {
    //let sidenav = document.querySelector('#mobile-demo');
    //M.Sidenav.init(sidenav, {});
    M.AutoInit();
  },[]);

  return (
    <header>
      <div className = "navbar-fixed">
        <nav>
          <div className = "nav-wrapper">
            <Link href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
            <ul id="nav-mobile" className="container hide-on-med-and-down">
              <li><Link to="/">Pocetna</Link></li>
              <li><Link to="/admin">Admin panel</Link></li>
              <li><a className = "modal-trigger" href = "#login">Login</a></li>
              <li><a className = "modal-trigger" href = "#register">Registracija</a></li>
            </ul>
          </div>
        </nav>
      </div>

      <ul className="sidenav" id="mobile-demo">
          <li><Link className='sidenav-close' to="/">Pocetna</Link></li>
          <li><Link className='sidenav-close' to="/admin">Admin panel</Link></li>
          <li><a className = "modal-trigger" href = "#login">Login</a></li>
          <li><a className = "modal-trigger" href = "#register">Registracija</a></li>
      </ul>

      <Login users = {props.users} />
      <Register />
    </header>
  )
}

export default Header
