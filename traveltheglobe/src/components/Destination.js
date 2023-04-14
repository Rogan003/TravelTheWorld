import React from 'react'
import { Link } from 'react-router-dom'

const Destination = (props) => {
  const address = "destinations/" + props.address;
  
  return (
      <div className="col s12 m12 l6 container">
        <div className="card large blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{props.item['naziv']}<Link className="btn-floating halfway-fab waves-effect waves-light red" to={address}><i className="material-icons">open_in_browser</i></Link></span>
            <p>{props.item['opis']}</p>
          </div>
        </div>
      </div>
  )
}

export default Destination
