import React from 'react'

const Login = () => {
  return ( //modal odjednom jeste resposnive :)))
    <div id="login" className="modal">
      <div className="modal-content center-align container">
        <h4>Login</h4>
        <div className = "row">
          <form className = "col s12">
            <div class="input-field col l6 s12">
              <input id="username" type="text" class="validate" />
              <label for="username">Username</label>
            </div>
            <div class="input-field col l6 s12">
              <input id="password" type="password" class="validate" />
              <label for="password">Password</label>
            </div>
          </form>
        </div>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect waves-red btn-flat">Cancel</a>
        <a href="#!" className="modal-close waves-effect waves-green btn-flat">Login</a>
      </div>
    </div>
  )
}

export default Login
