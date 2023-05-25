import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Destination from './Destination';
import M from 'materialize-css';

const AgencyPage = (props) => {
  const { agencyId } = useParams();
  const [search,setSearch] = useState("");
  const [destinations,setDestinations] = useState(props.destinations[props.agencies[agencyId]['destinacije']]);
  const [highlightDests,setHighlightDests] = useState([]);

  const highlight = (dests) => {
    for(let nameId of dests)
    {
      let destCard = document.getElementById(nameId);
      if(destCard != null)
        destCard.classList.add("myhighlight");
    }
  }

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (!props.agencies.hasOwnProperty(agencyId)) {
      navigate("/noagency");
    }

    var elems = document.querySelectorAll('.autocomplete');
    var data = {}

    for(let dest in props.destinations[props.agencies[agencyId]['destinacije']])
    {
      data[props.destinations[props.agencies[agencyId]['destinacije']][dest]['naziv']] = null;
    }

    M.Autocomplete.init(elems, {data : data,onAutocomplete : (txt) => setSearch(txt)});
  }, []);

  useEffect(() => {
    if(search === "")
    {
      setDestinations(props.destinations[props.agencies[agencyId]['destinacije']]);
      setHighlightDests([]);
    }
    else
    {
      let passedDests = {};
      let localDests = [];
      let search_split = search.split(" ");

      for(let i = 0;i < search_split.length;i++){
        let newDests = {};
        for(let dest in props.destinations[props.agencies[agencyId]['destinacije']])
        {
          if(props.destinations[props.agencies[agencyId]['destinacije']][dest]['naziv'].toLowerCase().includes(search_split[i].toLowerCase()))
          {
            newDests[dest] = props.destinations[props.agencies[agencyId]['destinacije']][dest];
            localDests.push(props.destinations[props.agencies[agencyId]['destinacije']][dest]['naziv']);
          }
        }

        setHighlightDests(localDests);

        for(let dest in props.destinations[props.agencies[agencyId]['destinacije']])
        {
          if(props.destinations[props.agencies[agencyId]['destinacije']][dest]['prevoz'].toLowerCase().includes(search_split[i].toLowerCase()))
          {
            newDests[dest] = props.destinations[props.agencies[agencyId]['destinacije']][dest];
          }

          if(props.destinations[props.agencies[agencyId]['destinacije']][dest]['tip'].toLowerCase().includes(search_split[i].toLowerCase()))
          {
            newDests[dest] = props.destinations[props.agencies[agencyId]['destinacije']][dest];
          }
        }

        if(i === 0)
        {
          passedDests = {...newDests};
        }
        else
        {
          let officialDests = {};
          for(let dest in newDests)
          {
            if(passedDests.hasOwnProperty(dest))
            {
              officialDests[dest] = newDests[dest];
            }
          }
          passedDests = {...officialDests};
        }
      }

      setDestinations(passedDests);
    }
  },[search]);

  useEffect(() => {
    if(highlightDests.length > 0)
    {
      highlight(highlightDests);
    }
    else
    {
      let highlight = document.querySelectorAll(".myhighlight");
      highlight.forEach(elem => {elem.classList.remove("myhighlight")});
    }
  },[highlightDests]);

  return (
    <main> <div className="row">
      <div className="center-align">
        <h1>{props.agencies[agencyId]['naziv']}</h1>
      </div>
    </div><div className="row">
        <div className="center-align col m8 offset-m2 l4 offset-l4">
          <img className="responsive-img logo z-depth-3" src={props.agencies[agencyId]['logo']} alt="Logo" />
        </div>
      </div><div className="row">
        <div className="center-align">
          <h3>Podaci</h3>
        </div>
      </div><div className="row center-align container">
        <div className="card-panel white flow-text hoverable col s12 l6">
          <p>
            Adresa: <br />
            <strong>{props.agencies[agencyId]['adresa']}</strong>
          </p>
        </div>
        <div className="card-panel white flow-text hoverable col s12 l6">
          <p>
            Godina osnivanja: <br />
            <strong>{props.agencies[agencyId]['godina']}</strong>
          </p>
        </div>
        <div className="card-panel white flow-text hoverable col s12 l6">
          <p>
            Broj telefona: <br />
            <strong>{props.agencies[agencyId]['brojTelefona']}</strong>
          </p>
        </div>
        <div className="card-panel white flow-text hoverable col s12 l6">
          <p>
            Email: <br />
            <a href={"mailto: " + props.agencies[agencyId]['email']} rel="noopener noreferrer" target="_blank">
              <strong>{props.agencies[agencyId]['email']}</strong>
            </a>
          </p>
        </div>
      </div>
      <div className="row center-align card-panel white flow-text hoverable">
        <div className = "row container">
          <div class="col s12">
            <div class="row">
              <div class="input-field col s12">
                <i class="material-icons prefix">search</i>
                <input type="text" id="autocomplete-input" class="autocomplete" value = {search} onChange={e => setSearch(e.target.value)} />
                <label for="autocomplete-input">Pretrazite destinacije...</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="center-align">
          <h3>Destinacije</h3>
        </div>
      </div><div className="row container">
        {Object.values(destinations).map((value, index) => {
          return (
            <Destination item={value} key={Object.keys(destinations)[index]}
              address={props.agencies[agencyId]['destinacije'] + "/" + Object.keys(destinations)[index]} />
          );
        })}
      </div>
    </main>
  )
}

export default AgencyPage
