import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Destination from './Destination';
import { db } from '../firebase-config';
import { onValue, ref } from "firebase/database";

const AgencyPage = () => {
  const { agencyId } = useParams();
  
  const [agencies,setAgencies] = useState({});
  const [destinations,setDestinations] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    let query = ref(db, "agencjie");

    onValue(query, (snapshot) => {
      if(snapshot.exists())
      {
        setAgencies(snapshot.val());
      }
    });
    
    query = ref(db,"destinacije");

    onValue(query, (snapshot) => {
     if(snapshot.exists())
     {
       setDestinations(snapshot.val());
     }
    });

    /* if(!agencies.hasOwnProperty(agencyId))
    {
        navigate("/noagency");
    } */
  },[]);

  return ( // sta je stvar, setstate je asinhrona te treba koji sekund da se stvarno update, zato ovi uslovi i zato jos nema ovo gore, posle smisliti bolji nacin za to, await? citati, informisati se, smisliti
    <main> 
      { agencies.hasOwnProperty(agencyId) && JSON.stringify(destinations) !== '{}' &&
        <><div className="row">
                  <div className="center-align">
                      <h1>{agencies[agencyId]['naziv']}</h1>
                  </div>
              </div><div className="row">
                      <div className="col m8 offset-m2 l4 offset-l4">
                          <img className="responsive-img" src={agencies[agencyId]['logo']} alt="Logo" />
                      </div>
                  </div><div className="row">
                      <div className="center-align">
                          <h3>Podaci</h3>
                      </div>
                  </div><div className="row center-align">
                      <div className="col s6 l3">
                          Adresa:
                          <strong>{agencies[agencyId]['adresa']}</strong>
                      </div>
                      <div className="col s6 l3">
                          Godina osnivanja:
                          <strong>{agencies[agencyId]['godina']}</strong>
                      </div>
                      <div className="col s6 l3">
                          Broj telefona:
                          <strong>{agencies[agencyId]['brojTelefona']}</strong>
                      </div>
                      <div className="col s6 l3">
                          Email:
                          <a href={"mailto: " + agencies[agencyId]['email']} rel="noopener noreferrer" target="_blank">
                              <strong>{agencies[agencyId]['email']}</strong>
                          </a>
                      </div>
                  </div><div className="row">
                      <div className="center-align">
                          <h3>Destinacije</h3>
                      </div>
                  </div><div className="row container">
                      {Object.values(destinations[agencies[agencyId]['destinacije']]).map((value, index) => {
                          return (
                              <Destination item={value} key={index} />
                          );
                      })}
                  </div></>
      }
    </main>
  )
}

export default AgencyPage
