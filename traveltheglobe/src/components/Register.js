import React, { useEffect, useState } from 'react'
import M from 'materialize-css';
import { useNavigate } from'react-router-dom'
import { ref, push, set } from "firebase/database";
import { db } from '../firebase-config';


const Register = (props) => {
  const [inputs,setInputs] = useState({});

  const navigate = useNavigate();

  const register = (event) => {
    event.preventDefault();
      var isOkay = true;
  
      if(inputs.korisnickoIme && inputs.korisnickoIme !== "")
      {
        Object.values(props.users).map(value => {
          if(value['korisnickoIme'] === inputs.korisnickoIme)
          {
            isOkay = false;
            document.getElementById("korisnickoIme").classList.remove("valid");
            document.getElementById("korisnickoIme").classList.add("invalid");
          }
        });
      }
      else
      {
        isOkay = false;
        document.getElementById("korisnickoIme").classList.remove("valid");
        document.getElementById("korisnickoIme").classList.add("invalid");
      }
      
      if(inputs.telefon && inputs.telefon !== "")
      {
        let phone = inputs.telefon.replaceAll(" ","");
        if(phone[0] === "+")
        {
          phone = phone.substring(1);
        }

        if(!+phone)
        {
          isOkay = false;
          document.getElementById("telefon").classList.remove("valid");
          document.getElementById("telefon").classList.add("invalid");
        }
      }
      else
      {
        isOkay = false;
        document.getElementById("telefon").classList.remove("valid");
        document.getElementById("telefon").classList.add("invalid");
      }
      
      if(!inputs.pass || inputs.pass.length < 8)
      {
        isOkay = false;
        document.getElementById("pass").classList.remove("valid");
        document.getElementById("pass").classList.add("invalid");
      }

      if(!inputs.datum || Date.parse(inputs.datum) > Date.now())
      {
        isOkay = false;
        document.getElementById("datum").classList.remove("valid");
        document.getElementById("datum").classList.add("invalid");
      }

      if(!inputs.ime || inputs.ime === "")
      {
        isOkay = false;
        document.getElementById("ime").classList.remove("valid");
        document.getElementById("ime").classList.add("invalid");
      }

      if(!inputs.prezime || inputs.prezime === "")
      {
        isOkay = false;
        document.getElementById("prezime").classList.remove("valid");
        document.getElementById("prezime").classList.add("invalid");
      }

      if(!inputs.adresa || inputs.adresa === "")
      {
        isOkay = false;
        document.getElementById("adresa").classList.remove("valid");
        document.getElementById("adresa").classList.add("invalid");
      }

      if(!inputs.email)
      {
        isOkay = false;
        document.getElementById("email").classList.remove("valid");
        document.getElementById("email").classList.add("invalid");
      }
      
      if(isOkay && document.getElementById("email").classList.contains("valid"))
      {
        const postListRef = ref(db, 'korisnici');
        const newPostRef = push(postListRef);
        set(newPostRef, {
          "korisnickoIme": inputs.korisnickoIme,
          "lozinka": inputs.pass,
          "ime": inputs.ime,
          "prezime": inputs.prezime,
          "email": inputs.email,
          "datumRodjenja": inputs.datum,
          "adresa": inputs.adresa,
          "telefon": inputs.telefon
        }).catch(() => navigate("/dberror"));
        
        M.toast({html: 'Uspesno ste registrovani!'});
        var instance = M.Modal.getInstance(document.getElementById("register"));
        instance.close();
      }
  }

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    setInputs(values => ({...values,[name] : value}))
  }

  useEffect(
    () => {
        var elems = document.querySelectorAll('#datum');
        M.Datepicker.init(elems,{format:"yyyy-mm-dd",
        defaultDate: new Date("2003-03-01"),
          onClose:()=>{
              handleChange({target:{name:"datum",value:elems[0].value}});
          }
      });
    }
  );
  return (
    <div id="register" className="modal">
      <form onSubmit = {register}>
      <div className="modal-content center-align container">
        <h4>Registracija</h4>
        <div className = "row">
            <div className = "row">
              <div class="input-field col l6 s12">
                <input id="ime" type="text" class="validate" name = "ime" value = {inputs.ime || ""} onChange = {handleChange} />
                <label for="ime">Ime</label>
                <span className = "helper-text" data-error = "Neispravno ime"></span>
              </div>
              <div class="input-field col l6 s12">
                <input id="prezime" type="text" class="validate" name = "prezime" value = {inputs.prezime || ""} onChange = {handleChange} />
                <label for="prezime">Prezime</label>
                <span className = "helper-text" data-error = "Neispravno prezime"></span>
              </div>
            </div>
            <div className = "row">
              <div class="input-field col l6 s12">
                <input id="korisnickoIme" type="text" class="validate" name = "korisnickoIme" value = {inputs.korisnickoIme || ""} onChange = {handleChange} />
                <label for="korisnickoIme">Korisnicko ime</label>
                <span className = "helper-text" data-error = "Neispravno korisnicko ime(zauzeto korisnicko ime ili prazno polje)"></span>
              </div>
              <div class="input-field col l6 s12">
                <input id="pass" type="password" class="validate" name = "pass" value = {inputs.pass || ""} onChange = {handleChange} />
                <label for="pass">Lozinka</label>
                <span className = "helper-text" data-error = "Lozinka mora imati bar osam karaktera"></span>
              </div>
            </div>
            <div className = "row">
              <div class="input-field col l6 s12">
                <input id="email" type="email" class="validate" name = "email" value = {inputs.email || ""} onChange = {handleChange} />
                <label for="email">E-mail</label>
                <span className = "helper-text" data-error = "Neispravan format email-a"></span>
              </div>
              <div class="input-field col l6 s12">
                <input id="datum" type="text" className="datepicker validate" name = "datum" value = {inputs.datum || ""} />
                <label for="datum">Datum rodjenja</label>
                <span className = "helper-text" data-error = "Neispravan datum rodjenja"></span>
              </div>
            </div>
            <div className = "row">
              <div class="input-field col l8 s12">
                <input id="adresa" type="text" class="validate" name = "adresa" value = {inputs.adresa || ""} onChange = {handleChange} />
                <label for="adresa">Adresa</label>
                <span className = "helper-text" data-error = "Neispravna adresa"></span>
              </div>
              <div class="input-field col l4 s12">
                <input id="telefon" type="text" class="validate" name = "telefon" value = {inputs.telefon || ""} onChange = {handleChange} />
                <label for="telefon">Broj telefona(+381 6x xxx..)</label>
                <span className = "helper-text" data-error = "Neispravan broj telefona"></span>
              </div>
            </div>
        </div>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect waves-red btn-flat">Ponisti</a>
        <input className="waves-effect waves-green btn-flat" type = "submit" value = "Registruj se" />
      </div>
      </form>
    </div>
  )
}

export default Register
