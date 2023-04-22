import React, { useState } from 'react'
import M from 'materialize-css'

const Login = (props) => {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [errMsg,setErrMsg] = useState("");

  const login = (event) => {
    event.preventDefault();
    var exists = false;
  
    Object.values(props.users).map(value => {
      if(value['korisnickoIme'] === username && value['lozinka'] === password)
      {
        exists = true;
        var instance = M.Modal.getInstance(document.getElementById("login"));
        instance.close();
      }
    });
  
    if(!exists)
    {
      setErrMsg("Pogresno korisnicko ime ili lozinka");
      document.getElementById("username").classList.remove("valid");
      document.getElementById("username").classList.add("invalid");
      document.getElementById("password").classList.remove("valid");
      document.getElementById("password").classList.add("invalid");
    }
  }

  return (
    <div id="login" className="modal">
      <form onSubmit = {login}>
      <div className="modal-content center-align container">
        <h4>Prijavi se</h4>
        <div className = "row">
            <div class="input-field col l6 s12">
              <input id="username" type="text" className = "validate" value = {username} onChange = {e => setUsername(e.target.value)}/>
              <label for="username">Korisnicko ime</label>
              <span className = "helper-text" data-error = {errMsg}></span>
            </div>
            <div class="input-field col l6 s12">
              <input id="password" type="password" className = "validate" value = {password} onChange = {e => setPassword(e.target.value)} />
              <label for="password">Lozinka</label>
              <span className = "helper-text" data-error = {errMsg}></span>
            </div>
        </div>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect waves-red btn-flat">Ponisti</a>
        <input className="waves-effect waves-green btn-flat" type = "submit" value = "Prijavi se" />
      </div>
      </form>
    </div>
  )
}

//mozda pokusati dodati foru da na enter odradi submit
export default Login
