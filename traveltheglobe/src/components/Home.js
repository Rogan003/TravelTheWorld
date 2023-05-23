import React, { useState, useEffect } from 'react' 
import Agency from './Agency'
import { Link } from 'react-router-dom';
import Logo from '../pics/logo.png'
import M from 'materialize-css'

const Home = (props) => {
  const [search,setSearch] = useState("");
  const [agencies,setAgencies] = useState(props.agencies);

  useEffect(() => {
    var elems = document.querySelectorAll('.autocomplete');
    var data = {}

    for(var agency in props.agencies)
    {
      data[props.agencies[agency]['naziv']] = null;
    }

    M.Autocomplete.init(elems, {data : data});
    
    if(search === "")
    {
      setAgencies(props.agencies);
      let highlight = document.querySelectorAll(".agency-name");
      highlight.forEach(elem => {elem.style.backgroundColor = "white"});
    }
    else // ovde autocomplete pravi problem? inace radi super, ali nesto nece zbog ovog setAgencies dole
    {
      let passedAgencies = {};

      for(var agency in props.agencies)
      {
        if(props.agencies[agency]['naziv'].toLowerCase().includes(search.toLowerCase()))
        {
          passedAgencies[agency] = props.agencies[agency]
        }
      }

      let highlight = document.querySelectorAll(".agency-name");
      highlight.forEach(elem => {elem.style.backgroundColor = "yellow"});

      setAgencies(passedAgencies);
    }

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
                <input type="text" id="autocomplete-input" class="autocomplete" value = {search} onChange={e => setSearch(e.target.value)} />
                <label for="autocomplete-input">Pretrazite agencije...</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className = "row container">
      {
        Object.values(agencies).map((value,index) => {
          return (
              <Agency item = {value} address = {Object.keys(agencies)[index]} key = {Object.keys(agencies)[index]} />
          );
        })
      }
      </div>
    </main>
  )
}

export default Home
