import React from 'react' 
import Agency from './Agency'
import { Link } from 'react-router-dom';
import Logo from '../pics/logo.png'

const Home = (props) => {
  return (
    <main className = "center-align">
      <div className = "row container">
        <Link to="/" className = "brand-logo"><img src = {Logo} alt = "Logo" className = "logo-img hoverable" /></Link>
      </div>
      <div className = "card-panel hoverable flow-text">
        <div className = "row container">
          <h1>Travel The Globe</h1>
        </div>
        <div className = "row container">
          <p>
            Dobrodosli na Travel The Globe! Ovde mozete videti najpopularnije turisticke agencije i destinacije na svetu!
            Istrazite sami!
          </p>
        </div>
      </div>
      <div className = "row container">
      {
        Object.values(props.agencies).map((value,index) => {
          return (
              <Agency item = {value} address = {Object.keys(props.agencies)[index]} key = {Object.keys(props.agencies)[index]} />
          );
        })
      }
      </div>
    </main>
  )
}

export default Home
