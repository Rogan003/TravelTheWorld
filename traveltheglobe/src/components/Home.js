import React, { useEffect } from 'react' 
import Agency from './Agency'
import { Link } from 'react-router-dom';
import Logo from '../pics/logo.png'
import M from 'materialize-css'

const Home = (props) => {
  useEffect(() => {
    var elems = document.querySelectorAll('.autocomplete');
    var data = {}

    for(var agency in props.agencies)
    {
      data[props.agencies[agency]['naziv']] = null;
    }

    M.Autocomplete.init(elems, {data : data});
  });

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
        <div className = "row container">
          <div class="col s12">
            <div class="row">
              <div class="input-field col s12">
                <i class="material-icons prefix">search</i>
                <input type="text" id="autocomplete-input" class="autocomplete" />
                <label for="autocomplete-input">Pretrazite agencije...</label>
              </div>
            </div>
          </div>
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
