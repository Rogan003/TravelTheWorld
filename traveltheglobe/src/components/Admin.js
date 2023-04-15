import React, { useState, useEffect } from 'react'
import { db } from '../firebase-config';
import { onValue, ref } from "firebase/database";
import Destruction from './Destruction';
import M from 'materialize-css';

const Admin = () => {
  const [view,setView] = useState(false);

  const [users,setUsers] = useState({});
  const [agencies,setAgencies] = useState({});

  useEffect(() => {
    if(JSON.stringify(agencies) === '{}' && JSON.stringify(users) === '{}')
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
    }
    
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {});// druga varijanta staviti ovo u onclick <a>
  });

  return ( //pripaziti sta se desava kada se obrisu svi korisnici ili sve agencije
    <main className = "container center-align">
      {
        JSON.stringify(agencies) !== '{}' && JSON.stringify(users) !== '{}' &&
        <><h1>Admin stranica</h1><a class="btn-floating btn-large waves-effect waves-light red" onClick={() => (setView(!view))}><i class="material-icons">cached</i></a>
        {
          view &&
          <>
          <div className = "row">
              <h3>Korisnici</h3>
          </div>
          <table className = "highlight centered responsive-table">
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
                                <td><a className="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">edit</i></a></td>
                                <td><a className="btn-floating btn-large waves-effect waves-light red modal-trigger" href={"#destruction" + index}><i class="material-icons">delete</i></a></td>
                            </tr>
                            <Destruction id = {"destruction" + index} naziv = {value['korisnickoIme']} /></>
                        );
                      })
                }
            </tbody>
          </table></>
        }
        {
          !view &&
          <>
          <div className = "row">
              <h3>Agencije</h3>
          </div>
          <table className = "highlight centered responsive-table">
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
                                <td><a className="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">edit</i></a></td>
                                <td><a className="btn-floating btn-large waves-effect waves-light red modal-trigger" href = {"#destructiona" + index}><i class="material-icons">delete</i></a></td>
                            </tr>
                            <Destruction id = {"destructiona" + index} naziv = {value['naziv']} /></>
                        );
                      })
                }
            </tbody>
          </table></>
        }</>
      }
    </main>
  )
}
//malo ove tabele nisu full responsive al ae
export default Admin
