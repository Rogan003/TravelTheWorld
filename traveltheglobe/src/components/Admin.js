import React, { useState, useEffect } from 'react'
import Destruction from './Destruction';
import M from 'materialize-css';
import AddDestinations from './AddDestinations';
import { useNavigate } from'react-router-dom'
import { ref, set } from "firebase/database";
import { db } from '../firebase-config';

const Admin = (props) => {
  const [view,setView] = useState(true);
  const [edit,setEdit] = useState(false);
  const [key,setKey] = useState(null);
  const [inputs,setInputs] = useState({});

  const navigate = useNavigate();

  function isImgUrl(url) {
    return /\.(jpg|jpeg|png|webp|avif|gif)$/.test(url)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  useEffect(() => {
    if(edit)
    {
      if(props.agencies.hasOwnProperty(key))
      {
        setInputs({
          agencija_naziv : props.agencies[key]['naziv'],
          agencija_adresa : props.agencies[key]['adresa'],
          agencija_godina : props.agencies[key]['godina'],
          agencija_logo : props.agencies[key]['logo'],
          agencija_email : props.agencies[key]['email'],
          agencija_brojTelefona : props.agencies[key]['brojTelefona'],
          agencija_destinacije : props.agencies[key]['destinacije']
        });
      }
      else
      {
        setInputs({
          ime2 : props.users[key]['ime'],
          prezime2 : props.users[key]['prezime'],
          korime2 : props.users[key]['korisnickoIme'],
          lozinka2 : props.users[key]['lozinka'],
          email2 : props.users[key]['email'],
          datumRodjenja2 : props.users[key]['datumRodjenja'],
          adresa2 : props.users[key]['adresa'],
          telefon2 : props.users[key]['telefon']
        });

        var elems = document.querySelectorAll('#datumRodjenja2');
        M.Datepicker.init(elems,{format:"yyyy-mm-dd",
        defaultDate: new Date(inputs.datumRodjenja2),
        setDefaultDate: true,
          onClose:()=>{
              handleChange({target:{name:"datumRodjenja2",value: elems[0].value}});
          }
        });
      }
    }
    else
    {
      setInputs({});
    }
  },[edit]);

  useEffect(() => {
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {});// druga varijanta staviti ovo u onclick <a>

    var elems2 = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems2, {});
  });

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    setInputs(values => ({...values,[name] : value}))
  }

  const editUser = (event) => {
    event.preventDefault();
      var isOkay = true;
  
      if(inputs.korime2 && inputs.korime2 !== "")
      {
        Object.values(props.users).map(value => {
          if(value['korisnickoIme'] === inputs.korime2 && value['korisnickoIme'] !== props.users[key]['korisnickoIme'])
          {
            isOkay = false;
            document.getElementById("korime2").classList.remove("valid");
            document.getElementById("korime2").classList.add("invalid");
          }
        });
      }
      else
      {
        isOkay = false;
        document.getElementById("korime2").classList.remove("valid");
        document.getElementById("korime2").classList.add("invalid");
      }
      
      if(inputs.telefon2 && inputs.telefon2 !== "")
      {
        let phone = inputs.telefon2.replaceAll(" ","");
        if(phone[0] === "+")
        {
          phone = phone.substring(1);
        }

        if(!+phone)
        {
          isOkay = false;
          document.getElementById("telefon2").classList.remove("valid");
          document.getElementById("telefon2").classList.add("invalid");
        }
      }
      else
      {
        isOkay = false;
        document.getElementById("telefon2").classList.remove("valid");
        document.getElementById("telefon2").classList.add("invalid");
      }
      
      if(!inputs.lozinka2 || inputs.lozinka2.length < 8)
      {
        isOkay = false;
        document.getElementById("lozinka2").classList.remove("valid");
        document.getElementById("lozinka2").classList.add("invalid");
      }

      if(!inputs.datumRodjenja2 || Date.parse(inputs.datumRodjenja2) > Date.now())
      {
        isOkay = false;
        document.getElementById("datumRodjenja2").classList.remove("valid");
        document.getElementById("datumRodjenja2").classList.add("invalid");
      }

      if(!inputs.ime2 || inputs.ime2 === "")
      {
        isOkay = false;
        document.getElementById("ime2").classList.remove("valid");
        document.getElementById("ime2").classList.add("invalid");
      }

      if(!inputs.prezime2 || inputs.prezime2 === "")
      {
        isOkay = false;
        document.getElementById("prezime2").classList.remove("valid");
        document.getElementById("prezime2").classList.add("invalid");
      }

      if(!inputs.adresa2 || inputs.adresa2 === "")
      {
        isOkay = false;
        document.getElementById("adresa2").classList.remove("valid");
        document.getElementById("adresa2").classList.add("invalid");
      }

      if(!inputs.email2)
      {
        isOkay = false;
        document.getElementById("email2").classList.remove("valid");
        document.getElementById("email2").classList.add("invalid");
      }
      
      if(isOkay && document.getElementById("email2").classList.contains("valid"))
      {
        const editUserRef = ref(db, 'korisnici/' + key);
        set(editUserRef, {
          "korisnickoIme": inputs.korime2,
          "lozinka": inputs.lozinka2,
          "ime": inputs.ime2,
          "prezime": inputs.prezime2,
          "email": inputs.email2,
          "datumRodjenja": inputs.datumRodjenja2,
          "adresa": inputs.adresa2,
          "telefon": inputs.telefon2
        }).catch(() => navigate("/dberror"));
        setEdit(false);
        setView(true);
      }
  }

  const editAgency = (event) => {
    event.preventDefault();
    let isOkay = true;

    if(!inputs.agencija_naziv || inputs.agencija_naziv === "")
    {
      isOkay = false;
      document.getElementById("agencija_naziv").classList.remove("valid");
      document.getElementById("agencija_naziv").classList.add("invalid");
    }

    if(!inputs.agencija_adresa || inputs.agencija_adresa === "")
    {
      isOkay = false;
      document.getElementById("agencija_adresa").classList.remove("valid");
      document.getElementById("agencija_adresa").classList.add("invalid");
    }

    if(inputs.agencija_brojTelefona && inputs.agencija_brojTelefona !== "")
      {
        let phone = inputs.agencija_brojTelefona.replaceAll(" ","");
        phone = phone.replaceAll("-","");
        if(phone[0] === "+")
        {
          phone = phone.substring(1);
        }
        
        if(phone[3] === "/" && +phone.substring(0,3))
        {
          phone = phone.substring(4);
        }

        if(!+phone)
        {
          isOkay = false;
          document.getElementById("agencija_brojTelefona").classList.remove("valid");
          document.getElementById("agencija_brojTelefona").classList.add("invalid");
        }
      }
      else
      {
        isOkay = false;
        document.getElementById("agencija_brojTelefona").classList.remove("valid");
        document.getElementById("agencija_brojTelefona").classList.add("invalid");
      }

      if(!inputs.agencija_email)
      {
        isOkay = false;
        document.getElementById("agencija_email").classList.remove("valid");
        document.getElementById("agencija_email").classList.add("invalid");
      }
      
      if(!inputs.agencija_godina || inputs.agencija_godina !== "")
      {
        if(!+inputs.agencija_godina || +inputs.agencija_godina > 2023)
        {
          isOkay = false;
          document.getElementById("agencija_godina").classList.remove("valid");
          document.getElementById("agencija_godina").classList.add("invalid");
        }
      }
      else
      {
        isOkay = false;
        document.getElementById("agencija_godina").classList.remove("valid");
        document.getElementById("agencija_godina").classList.add("invalid");
      }

      if(!inputs.agencija_logo || inputs.agencija_logo === "" || !isImgUrl(inputs.agencija_logo))
      {
        isOkay = false;
        document.getElementById("agencija_logo").classList.remove("valid");
        document.getElementById("agencija_logo").classList.add("invalid");
      }

    if(isOkay && document.getElementById("agencija_email").classList.contains("valid"))
    {
      const editAgencyRef = ref(db, 'agencije/' + key);
        set(editAgencyRef, {
          "naziv": inputs.agencija_naziv,
          "adresa": inputs.agencija_adresa,
          "brojTelefona": inputs.agencija_brojTelefona,
          "email": inputs.agencija_email,
          "godina": inputs.agencija_godina,
          "logo": inputs.agencija_logo,
          "destinacije": inputs.agencija_destinacije
        }).catch(() => navigate("/dberror"));
        setEdit(false);
        setView(true);
    }
  }

  return (
    <main className = "container center-align">
        <h1>Admin stranica</h1>
        <a class="btn-floating btn-large waves-effect waves-light red tooltipped" data-position="right" data-tooltip="Korisnici/Agencije" onClick={() => {setView(!view);setEdit(false);}}>
          <i class="material-icons">cached</i>
        </a>
        <div className = "hide-on-large-only row small-info">Korisnici/Agencije</div>
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
                            <Destruction id = {"destructiona" + index} naziv = {value['naziv']} db = "agencije" dbid = {Object.keys(props.agencies)[index]} /></>
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
              <form className="col s12" onSubmit = {editUser}>
                <div className = "row">
                <div class="input-field col l6 s12">
                  <input id="ime2" type="text" className="validate" name = "ime2" value = {inputs.ime2} onChange = {handleChange} />
                  <label className = "active" for="ime">Ime</label>
                  <span className = "helper-text" data-error = "Neispravno ime"></span>
                </div>
                <div class="input-field col l6 s12">
                  <input id="prezime2" type="text" class="validate" name = "prezime2" value = {inputs.prezime2} onChange = {handleChange} />
                  <label className = "active" for="prezime2">Prezime</label>
                  <span className = "helper-text" data-error = "Neispravno prezime"></span>
                </div>
              </div>
              <div className = "row">
                <div class="input-field col l6 s12">
                  <input id="korime2" type="text" class="validate" name = "korime2" value = {inputs.korime2} onChange = {handleChange} />
                  <label className = "active" for="korime">Korisnicko ime</label>
                  <span className = "helper-text" data-error = "Neispravno korisnicko ime(prazno ili zauzeto)"></span>
                </div>
                <div class="input-field col l6 s12">
                  <input id="lozinka2" type="password" class="validate" name = "lozinka2" value = {inputs.lozinka2} onChange = {handleChange} />
                  <label className = "active" for="lozinka2">Lozinka</label>
                  <span className = "helper-text" data-error = "Lozinka mora imati bar osam karaktera"></span>
                </div>
              </div>
              <div className = "row">
                <div class="input-field col l6 s12">
                  <input id="email2" type="email" class="validate" name = "email2" value = {inputs.email2} onChange = {handleChange} />
                  <label className = "active" for="email2">E-mail</label>
                  <span className = "helper-text" data-error = "Neispravan email"></span>
                </div>
                <div class="input-field col l6 s12">
                  <input id="datumRodjenja2" type="text" className="datepicker validate" name = "datumRodjenja2" value = {inputs.datumRodjenja2} />
                  <label className = "active" for="datumRodjenja2">Datum rodjenja</label>
                  <span className = "helper-text" data-error = "Neispravan datum rodjenja"></span>
                </div>
              </div>
              <div className = "row">
                <div class="input-field col l8 s12">
                  <input id="adresa2" type="text" class="validate" name = "adresa2" value = {inputs.adresa2} onChange = {handleChange} />
                  <label className = "active" for="adresa2">Adresa</label>
                  <span className = "helper-text" data-error = "Neispravna adresa"></span>
                </div>
                <div class="input-field col l4 s12">
                  <input id="telefon2" type="text" class="validate" name = "telefon2" value = {inputs.telefon2} onChange = {handleChange} />
                  <label className = "active" for="telefon2">Broj telefona</label>
                  <span className = "helper-text" data-error = "Neispravan broj telefona"></span>
                </div>
              </div>
              <div className = "row">
                  <button class="btn waves-effect waves-light" onClick = {() => (setEdit(false))}>Nazad
                      <i class="material-icons right">arrow_back</i>
                  </button>
                  <button class="btn waves-effect waves-light" type="submit" name="action2">Izmenite korisnika
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
              <form className="col s12" onSubmit = {editAgency}>
                <div className = "row">
                <div class="input-field col l6 s12">
                  <input id="agencija_naziv" type="text" className="validate" name = "agencija_naziv" value = {inputs.agencija_naziv} onChange = {handleChange} />
                  <label className = "active" for="agencija_naziv">Naziv</label>
                  <span className = "helper-text" data-error = "Naziv ne moze biti prazno polje!"></span>
                </div>
                <div class="input-field col l6 s12">
                  <input id="agencija_email" type="email" class="validate" name = "agencija_email" value = {inputs.agencija_email} onChange = {handleChange} />
                  <label className = "active" for="agencija_email">E-mail</label>
                  <span className = "helper-text" data-error = "Neispravan format e-maila!"></span>
                </div>
              </div>
              <div className = "row">
                <div class="input-field col l6 s12">
                  <input id="agencija_logo" type="text" class="validate" name = "agencija_logo" value = {inputs.agencija_logo} onChange = {handleChange} />
                  <label className = "active" for="agencija_logo">Logo</label>
                  <span className = "helper-text" data-error = "Nepostojeca slika!"></span>
                </div>
                <div class="input-field col l6 s12">
                  <input id="agencija_brojTelefona" type="text" class="validate" name = "agencija_brojTelefona" value = {inputs.agencija_brojTelefona} onChange = {handleChange} />
                  <label className = "active" for="agencija_brojTelefona">Broj telefona</label>
                  <span className = "helper-text" data-error = "Neispravan format telefona!"></span>
                </div>
              </div>
              <div className = "row">
                <div class="input-field col l8 s12">
                  <input id="agencija_adresa" type="text" class="validate" name = "agencija_adresa" value = {inputs.agencija_adresa} onChange = {handleChange} />
                  <label className = "active" for="agencija_adresa">Adresa</label>
                  <span className = "helper-text" data-error = "Adresa ne moze biti prazno polje!"></span>
                </div>
                <div class="input-field col l4 s12">
                  <input id="agencija_godina" type="number" class="validate" name = "agencija_godina" value = {inputs.agencija_godina} onChange = {handleChange} />
                  <label className = "active" for="agencija_godina">Godina osnivanja</label>
                  <span className = "helper-text" data-error = "Godina mora biti broj i u proslosti!"></span>
                </div>
              </div>
              <div className = "row valign-wrapper">
                <div className = "col s7">
                  <h4>Destinacije</h4>
                </div>
                <div className = "col s5">
                  <a className="btn-floating btn-small waves-effect waves-light red modal-trigger" href = "#adddest"><i class="material-icons">add</i></a>
                  <AddDestinations dests_key = {inputs.agencija_destinacije} />
                </div>
              </div>
              <div className = "row">
                {
                  Object.values(props.destinations[props.agencies[key]['destinacije']]).map((value,index) => {
                    let valkey = Object.keys(props.destinations[props.agencies[key]['destinacije']])[index];
                    return(
                      <div className = "section"><div className="col s7 flow-text">
                        {value['naziv']}
                      </div><div className="col s5 flow-text">
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
                  <button class="btn waves-effect waves-light" onClick = {() => (setEdit(false))}>Nazad
                      <i class="material-icons right">arrow_back</i>
                  </button>
                  <button class="btn waves-effect waves-light" type="submit" name="agencija_action">Izmenite agenciju
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
