import React from 'react'
import { Link } from 'react-router-dom'

const Destination = (props) => {
  const address = "destinations/" + props.address;
  
  return (
      <div className="col s12 m12 l6 container">
        <div className="card horizontal small white hoverable valign-wrapper center-align">
          <div className = "card-image"> {/* nije bas najresponsive */}
            <img src = {props.item['slike'][0]}/>
          </div>
          <div className="card-content card-stacked black-text">
            <strong className="card-title">{props.item['naziv']}</strong>
            <Link className="btn waves-effect waves-light" to={address}>Pogledajte</Link>
          </div>
        </div>
      </div>
  )
}

export default Destination
