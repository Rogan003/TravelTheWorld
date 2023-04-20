import React, { useState, useEffect } from 'react'
import Destruction from './Destruction';
import M from 'materialize-css';
import AddDestinations from './AddDestinations';

const Admin = (props) => {
  const [view,setView] = useState(true);

  const [edit,setEdit] = useState(false);
  const [key,setKey] = useState(null);

  useEffect(() => {    
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {});// druga varijanta staviti ovo u onclick <a>
  });

  return (
    <main className = "container center-align">
        <h1>Admin stranica</h1><a class="btn-floating btn-large waves-effect waves-light red" onClick={() => {setView(!view);setEdit(false);}}><i class="material-icons">cached</i></a>
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
                    Object.values(props.users).map((value,index) => {
                        return (
                            <><tr key = {Object.keys(props.users)[index]}>
                                <td>{value['korisnickoIme']}</td>
                                <td>{value['lozinka']}</td>
                                <td>{value['ime']}</td>
                                <td>{value['prezime']}</td>
                                <td>{value['email']}</td>
                                <td>{value['datumRodjenja']}</td>
                                <td>{value['adresa']}</td>
                                <td>{value['telefon']}</td>
                                <td><a className="btn-floating btn-small waves-effect waves-light red" onClick = {() => {setEdit(true);setKey(Object.keys(props.users)[index]);}}><i class="material-icons">edit</i></a></td>
                                <td><a className="btn-floating btn-small waves-effect waves-light red modal-trigger" href={"#destruction" + index}><i class="material-icons">delete</i></a></td>
                            </tr>
                            <Destruction id = {"destruction" + index} naziv = {value['korisnickoIme']} db = "korisnici" dbid =  {Object.keys(props.users)[index]} /></>
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
                {
                    Object.values(props.agencies).map((value,index) => {
                        return (
                            <><tr key = {Object.keys(props.agencies)[index]}>
                                <td>{value['naziv']}</td>
                                <td>{value['adresa']}</td>
                                <td>{value['godina']}</td>
                                <td><img src = {value['logo']} className = "responsive-img" /></td>
                                <td>{value['brojTelefona']}</td>
                                <td>{value['email']}</td>
                                <td><a className="btn-floating btn-small waves-effect waves-light red" onClick = {() => {setEdit(true);setKey(Object.keys(props.agencies)[index]);}}><i class="material-icons">edit</i></a></td>
                                <td><a className="btn-floating btn-small waves-effect waves-light red modal-trigger" href = {"#destructiona" + index}><i class="material-icons">delete</i></a></td>
                            </tr>
                            <Destruction id = {"destructiona" + index} naziv = {value['naziv']} db = "agencjie" dbid = {Object.keys(props.agencies)[index]} /></>
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
              <h3>Izmeni {props.users[key]['korisnickoIme']}</h3>
          </div>
          <div className="row">
              <form className="col s12">
                <div className = "row">
                <div class="input-field col l6 s12">
                  <input id="ime" type="text" className="validate" value = {props.users[key]['ime']} />
                  <label className = "active" for="ime">Ime</label>
                </div>
                <div class="input-field col l6 s12">
                  <input id="prezime" type="text" class="validate" value = {props.users[key]['prezime']} />
                  <label className = "active" for="prezime">Prezime</label>
                </div>
              </div>
              <div className = "row">
                <div class="input-field col l6 s12">
                  <input id="korime" type="text" class="validate" value = {props.users[key]['korisnickoIme']} />
                  <label className = "active" for="korime">Korisnicko ime</label>
                </div>
                <div class="input-field col l6 s12">
                  <input id="password" type="password" class="validate" value = {props.users[key]['lozinka']} />
                  <label className = "active" for="password">Lozinka</label>
                </div>
              </div>
              <div className = "row">
                <div class="input-field col l6 s12">
                  <input id="email" type="email" class="validate" value = {props.users[key]['email']} />
                  <label className = "active" for="email">E-mail</label>
                </div>
                <div class="input-field col l6 s12">
                  <input id="datum" type="text" className="datepicker validate" value = {props.users[key]['datumRodjenja']} />
                  <label className = "active" for="datum">Datum rodjenja</label>
                </div>
              </div>
              <div className = "row">
                <div class="input-field col l8 s12">
                  <input id="adresa" type="text" class="validate" value = {props.users[key]['adresa']} />
                  <label className = "active" for="adresa">Adresa</label>
                </div>
                <div class="input-field col l4 s12">
                  <input id="telefon" type="text" class="validate" value = {props.users[key]['telefon']} />
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
              <h3>Izmeni {props.agencies[key]['naziv']}</h3>
          </div>
          <div className="row">
              <form className="col s12">
                <div className = "row">
                <div class="input-field col l6 s12">
                  <input id="naziv" type="text" className="validate" value = {props.agencies[key]['naziv']} />
                  <label className = "active" for="naziv">Naziv</label>
                </div>
                <div class="input-field col l6 s12">
                  <input id="email" type="email" class="validate" value = {props.agencies[key]['email']} />
                  <label className = "active" for="email">E-mail</label>
                </div>
              </div>
              <div className = "row">
                <div class="input-field col l6 s12">
                  <input id="logo" type="text" class="validate" value = {props.agencies[key]['logo']} />
                  <label className = "active" for="logo">Logo</label>
                </div>
                <div class="input-field col l6 s12">
                  <input id="brojTelefona" type="text" class="validate" value = {props.agencies[key]['brojTelefona']} />
                  <label className = "active" for="brojTelefona">Broj telefona</label>
                </div>
              </div>
              <div className = "row">
                <div class="input-field col l8 s12">
                  <input id="adresa" type="text" class="validate" value = {props.agencies[key]['adresa']} />
                  <label className = "active" for="adresa">Adresa</label>
                </div>
                <div class="input-field col l4 s12">
                  <input id="godina" type="number" class="validate" value = {props.agencies[key]['godina']} />
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
                  Object.values(props.destinations[props.agencies[key]['destinacije']]).map((value,index) => {
                    let valkey = Object.keys(props.destinations[props.agencies[key]['destinacije']])[index];
                    return(
                      <div className = "section"><div className="offset-s2 col s3 flow-text">
                        {value['naziv']}
                      </div><div className="offset-s1 col s6">
                          <a className="btn-floating btn-small waves-effect waves-light red modal-trigger" href={"#destructiond" + valkey}><i class="material-icons">delete</i></a>
                          <Destruction id={"destructiond" + valkey} naziv={value['naziv']}
                          db = {"destinacije/" + props.agencies[key]['destinacije']}
                          dbid = {Object.keys(props.destinations[props.agencies[key]['destinacije']])[index]} />
                        </div></div>
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
    </main>
  )
}

export default Admin
