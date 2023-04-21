import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Destination from './Destination';

const AgencyPage = (props) => {
  const { agencyId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (!props.agencies.hasOwnProperty(agencyId)) {
      navigate("/noagency");
    }
  }, []);

  return (
    <main> <div className="row">
      <div className="center-align">
        <h1>{props.agencies[agencyId]['naziv']}</h1>
      </div>
    </div><div className="row">
        <div className="col m8 offset-m2 l4 offset-l4">
          <img className="responsive-img logo z-depth-3" src={props.agencies[agencyId]['logo']} alt="Logo" />
        </div>
      </div><div className="row">
        <div className="center-align">
          <h3>Podaci</h3>
        </div>
      </div><div className="row center-align card-panel white flow-text hoverable">
        <div className="col s6 l3">
          <p>
            Adresa:
            <strong>{props.agencies[agencyId]['adresa']}</strong>
          </p>
        </div>
        <div className="col s6 l3">
          <p>
            Godina osnivanja:
            <strong>{props.agencies[agencyId]['godina']}</strong>
          </p>
        </div>
        <div className="col s12 l3">
          <p>
            Broj telefona:
            <strong>{props.agencies[agencyId]['brojTelefona']}</strong>
          </p>
        </div>
        <div className="col s12 l3">
          <p>
            Email:
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
                <input type="text" id="autocomplete-input" class="autocomplete" />
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
        {Object.values(props.destinations[props.agencies[agencyId]['destinacije']]).map((value, index) => {
          return (
            <Destination item={value} key={Object.keys(props.destinations[props.agencies[agencyId]['destinacije']])[index]}
              address={props.agencies[agencyId]['destinacije'] + "/" + Object.keys(props.destinations[props.agencies[agencyId]['destinacije']])[index]} />
          );
        })}
      </div>
    </main>
  )
}

export default AgencyPage
