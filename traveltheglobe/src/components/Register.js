import React, { useEffect } from 'react'
import M from 'materialize-css';

const Register = () => {
  useEffect(
    () => {
        M.AutoInit();
    }, []
  );
  return (
    <div id="register" className="modal">
      <div className="modal-content center-align container">
        <h4>Register</h4>
        <div className = "row">
          <form className = "col s12">
            <div className = "row">
              <div class="input-field col l6 s12">
                <input id="ime" type="text" class="validate" />
                <label for="ime">Ime</label>
              </div>
              <div class="input-field col l6 s12">
                <input id="prezime" type="text" class="validate" />
                <label for="prezime">Prezime</label>
              </div>
            </div>
            <div className = "row">
              <div class="input-field col l6 s12">
                <input id="username" type="text" class="validate" />
                <label for="username">Korisnicko ime</label>
              </div>
              <div class="input-field col l6 s12">
                <input id="password" type="password" class="validate" />
                <label for="password">Password</label>
              </div>
            </div>
            <div className = "row">
              <div class="input-field col l6 s12">
                <input id="email" type="email" class="validate" />
                <label for="email">E-mail</label>
              </div>
              <div class="input-field col l6 s12">
                <input id="datum" type="text" className="datepicker validate" />
                <label for="datum">Datum rodjenja</label>
              </div>
            </div>
            <div className = "row">
              <div class="input-field col l8 s12">
                <input id="adresa" type="text" class="validate" />
                <label for="adresa">Adresa u formatu: ulica i broj, mesto/grad, poštanski broj</label>
              </div>
              <div class="input-field col l4 s12">
                <input id="telefon" type="text" class="validate" />
                <label for="telefon">Broj telefona</label>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect waves-red btn-flat">Cancel</a>
        <a href="#!" className="modal-close waves-effect waves-green btn-flat">Register</a>
      </div>
    </div>
  )
}

export default Register
