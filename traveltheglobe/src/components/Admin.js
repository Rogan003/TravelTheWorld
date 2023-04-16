import React, { useState, useEffect } from 'react'
import { db } from '../firebase-config';
import { onValue, ref } from "firebase/database";
import Destruction from './Destruction';
import M from 'materialize-css';
import AddDestinations from './AddDestinations';

const Admin = () => {
  const [view,setView] = useState(true);

  const [users,setUsers] = useState({});
  const [agencies,setAgencies] = useState({});
  const [destinations,setDestinations] = useState({});
  const [edit,setEdit] = useState(false);
  const [key,setKey] = useState(null);

  useEffect(() => {
    if(JSON.stringify(agencies) === '{}' && JSON.stringify(users) === '{}'&& JSON.stringify(destinations) === '{}')
    {
      let query = ref(db, "korisnici");

      onValue(query, (snapshot) => {
        if(snapshot.exists())
        {
          setUsers(snapshot.val());
        }
      });
      
      query = ref(db,"agencjie");

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
    }
    
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {});// druga varijanta staviti ovo u onclick <a>
  });

  return ( //pripaziti sta se desava kada se obrisu svi korisnici ili sve agencije
    <main className = "container center-align">
      {
        JSON.stringify(agencies) !== '{}' && JSON.stringify(users) !== '{}' &&
        <><h1>Admin stranica</h1><a class="btn-floating btn-large waves-effect waves-light red" onClick={() => {setView(!view);setEdit(false);}}><i class="material-icons">cached</i></a>
        {
          view && !edit &&
          <>
          <div className = "row">
              <h3>Korisnici</h3>
          </div>
          <table className = "highlight centered responsive-table white">
            <thead>
            <tr>
                <th>Korisnicko ime</th>
                <th>Lozinka</th>
                <th>Ime</th>
                <th>Prezime</th>
                <th>E-mail adresa</th>
                <th>Datum rodjenja</th>
                <th>Adresa stanovanja</th>
                <th>Broj telefona</th>
                <th>Izmeni</th>
                <th>Obrisi</th>
            </tr>
            </thead>

            <tbody>
                {
                    Object.values(users).map((value,index) => {
                        return (
                            <><tr key = {Object.keys(users)[index]}>
                                <td>{value['korisnickoIme']}</td>
                                <td>{value['lozinka']}</td>
                                <td>{value['ime']}</td>
                                <td>{value['prezime']}</td>
                                <td>{value['email']}</td>
                                <td>{value['datumRodjenja']}</td>
                                <td>{value['adresa']}</td>
                                <td>{value['telefon']}</td>
                                <td><a className="btn-floating btn-small waves-effect waves-light red" onClick = {() => {setEdit(true);setKey(Object.keys(users)[index]);}}><i class="material-icons">edit</i></a></td>
                                <td><a className="btn-floating btn-small waves-effect waves-light red modal-trigger" href={"#destruction" + index}><i class="material-icons">delete</i></a></td>
                            </tr>
                            <Destruction id = {"destruction" + index} naziv = {value['korisnickoIme']} /></>
                        );
                      })
                }
            </tbody>
          </table></>
        }
        {
          !view && !edit &&
          <>
          <div className = "row">
              <h3>Agencije</h3>
          </div>
          <table className = "highlight centered responsive-table white">
            <thead>
            <tr>
                <th>Naziv</th>
                <th>Adresa</th>
                <th>Godina otvaranja</th>
                <th>Logo</th>
                <th>Broj telefona</th>
                <th>E-mail adresa</th>
                <th>Izmeni</th>
                <th>Obrisi</th>
            </tr>
            </thead>

            <tbody>
                {// trenutno nemam destinacije ovde
                    Object.values(agencies).map((value,index) => {
                        return (
                            <><tr key = {Object.keys(agencies)[index]}>
                                <td>{value['naziv']}</td>
                                <td>{value['adresa']}</td>
                                <td>{value['godina']}</td>
                                <td><img src = {value['logo']} className = "responsive-img" /></td>
                                <td>{value['brojTelefona']}</td>
                                <td>{value['email']}</td>
                                <td><a className="btn-floating btn-small waves-effect waves-light red" onClick = {() => {setEdit(true);setKey(Object.keys(agencies)[index]);}}><i class="material-icons">edit</i></a></td>
                                <td><a className="btn-floating btn-small waves-effect waves-light red modal-trigger" href = {"#destructiona" + index}><i class="material-icons">delete</i></a></td>
                            </tr>
                            <Destruction id = {"destructiona" + index} naziv = {value['naziv']} /></>
                        );
                      })
                }
            </tbody>
          </table></>
        }
        {
          edit && view &&
          <div className="col s12 container center-align">
          <div className = "row">
              <h3>Izmeni {users[key]['korisnickoIme']}</h3>
          </div>
          <div className="row">
              <form className="col s12">
                <div className = "row">
                <div class="input-field col l6 s12">
                  <input id="ime" type="text" className="validate" value = {users[key]['ime']} />
                  <label className = "active" for="ime">Ime</label>
                </div>
                <div class="input-field col l6 s12">
                  <input id="prezime" type="text" class="validate" value = {users[key]['prezime']} />
                  <label className = "active" for="prezime">Prezime</label>
                </div>
              </div>
              <div className = "row">
                <div class="input-field col l6 s12">
                  <input id="username" type="text" class="validate" value = {users[key]['korisnickoIme']} />
                  <label className = "active" for="username">Korisnicko ime</label>
                </div>
                <div class="input-field col l6 s12">
                  <input id="password" type="password" class="validate" value = {users[key]['lozinka']} />
                  <label className = "active" for="password">Lozinka</label>
                </div>
              </div>
              <div className = "row">
                <div class="input-field col l6 s12">
                  <input id="email" type="email" class="validate" value = {users[key]['email']} />
                  <label className = "active" for="email">E-mail</label>
                </div>
                <div class="input-field col l6 s12">
                  <input id="datum" type="text" className="datepicker validate" value = {users[key]['datumRodjenja']} />
                  <label className = "active" for="datum">Datum rodjenja</label>
                </div>
              </div>
              <div className = "row">
                <div class="input-field col l8 s12">
                  <input id="adresa" type="text" class="validate" value = {users[key]['adresa']} />
                  <label className = "active" for="adresa">Adresa</label>
                </div>
                <div class="input-field col l4 s12">
                  <input id="telefon" type="text" class="validate" value = {users[key]['telefon']} />
                  <label className = "active" for="telefon">Broj telefona</label>
                </div>
              </div>
              <div className = "row">
                  <button class="btn waves-effect waves-light" onClick = {() => (setEdit(false))}>Back
                      <i class="material-icons right">arrow_back</i>
                  </button>
                  <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                      <i class="material-icons right">send</i>
                  </button>
              </div>
              </form>
          </div>
      </div>
        }
        {
          edit && !view &&
          <div className="col s12 container center-align">
          <div className = "row">
              <h3>Izmeni {agencies[key]['naziv']}</h3>
          </div>
          <div className="row">
              <form className="col s12">
                <div className = "row">
                <div class="input-field col l6 s12">
                  <input id="naziv" type="text" className="validate" value = {agencies[key]['naziv']} />
                  <label className = "active" for="naziv">Naziv</label>
                </div>
                <div class="input-field col l6 s12">
                  <input id="email" type="email" class="validate" value = {agencies[key]['email']} />
                  <label className = "active" for="email">E-mail</label>
                </div>
              </div>
              <div className = "row">
                <div class="input-field col l6 s12">
                  <input id="logo" type="text" class="validate" value = {agencies[key]['logo']} />
                  <label className = "active" for="logo">Logo</label>
                </div>
                <div class="input-field col l6 s12">
                  <input id="brojTelefona" type="text" class="validate" value = {agencies[key]['brojTelefona']} />
                  <label className = "active" for="brojTelefona">Broj telefona</label>
                </div>
              </div>
              <div className = "row">
                <div class="input-field col l8 s12">
                  <input id="adresa" type="text" class="validate" value = {agencies[key]['adresa']} />
                  <label className = "active" for="adresa">Adresa</label>
                </div>
                <div class="input-field col l4 s12">
                  <input id="godina" type="number" class="validate" value = {agencies[key]['godina']} />
                  <label className = "active" for="godina">Godina osnivanja</label>
                </div>
              </div>
              <div className = "row valign-wrapper">
                <div className = "offset-s2 col s3">
                  <h4>Destinacije</h4>
                </div>
                <div className = "offset-s1 col s6">
                  <a className="btn-floating btn-small waves-effect waves-light red modal-trigger" href = "#adddest"><i class="material-icons">add</i></a>
                  <AddDestinations />
                </div>
              </div>
              <div className = "row">
                {
                  Object.values(destinations[agencies[key]['destinacije']]).map((value,index) => {
                    let valkey = Object.keys(destinations[agencies[key]['destinacije']])[index];
                    return(
                      <><div className="offset-s2 col s3 flow-text">
                        {value['naziv']}
                      </div><div className="offset-s1 col s6">
                          <a className="btn-floating btn-small waves-effect waves-light red modal-trigger" href={"#destructiond" + valkey}><i class="material-icons">delete</i></a>
                          <Destruction id={"destructiond" + valkey} naziv={value['naziv']} />
                        </div></>
                    );
                  })
                }
              </div>
              <div className = "row">
                  <button class="btn waves-effect waves-light" onClick = {() => (setEdit(false))}>Back
                      <i class="material-icons right">arrow_back</i>
                  </button>
                  <button class="btn waves-effect waves-light">Submit
                      <i class="material-icons right">send</i>
                  </button>
              </div>
              </form>
          </div>
      </div>
        }
        </>
      }
    </main>
  )
}
//malo ove tabele nisu full responsive
// da li treba prikazati destinacije u admin panelu?
export default Admin
