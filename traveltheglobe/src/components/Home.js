import React, { useState, useEffect } from 'react' 
import Agency from './Agency'
import { Link } from 'react-router-dom';
import Logo from '../pics/logo.png'
import M from 'materialize-css'

const Home = (props) => {
  const [search,setSearch] = useState("");
  const [agencies,setAgencies] = useState(props.agencies);
  const [highlightAgencies,setHighlightAgencies] = useState([]);

  const highlight = (agencies) => {
    for(let nameId of agencies)
    {
      let agencyCard = document.getElementById(nameId);
      agencyCard.classList.add("myhighlight");
    }
  }

  useEffect(() => {
    var elems = document.querySelectorAll('.autocomplete');
    var data = {}

    for(var agency in props.agencies)
    {
      data[props.agencies[agency]['naziv']] = null;
    }

    M.Autocomplete.init(elems, {data : data, onAutocomplete : (txt) => setSearch(txt)});
  },[]);

  useEffect(() => {
    if(search === "")
    {
      setAgencies(props.agencies);
      setHighlightAgencies([]);
    }
    else
    {
      let passedAgencies = {};
      let localAgencies = [];

      for(let agency in props.agencies)
      {
        if(props.agencies[agency]['naziv'].toLowerCase().includes(search.toLowerCase()))
        {
          passedAgencies[agency] = props.agencies[agency];
          localAgencies.push(props.agencies[agency]['naziv']);
        }
      }

      setHighlightAgencies(localAgencies);

      for(let agency in props.agencies)
      {
        for(let dest in props.destinations[props.agencies[agency]['destinacije']])
        {
          if(props.destinations[props.agencies[agency]['destinacije']][dest]['naziv'].toLowerCase().includes(search.toLowerCase()))
          {
            passedAgencies[agency] = props.agencies[agency];
            break;
          }
        }
      }

      setAgencies(passedAgencies);
    }
  },[search]);

  useEffect(() => {
    if(highlightAgencies.length > 0)
    {
      highlight(highlightAgencies);
    }
    else
    {
      let highlight = document.querySelectorAll(".myhighlight");
      highlight.forEach(elem => {elem.classList.remove("myhighlight")});
    }
  },[highlightAgencies]);

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
