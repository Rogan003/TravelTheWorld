import React from 'react'
import { Link } from 'react-router-dom'

const Destination = (props) => {
  const address = "destinations/" + props.address;
  
  return (
      <div className="col s12 m12 l6 container">
        <div className="card horizontal small white hoverable valign-wrapper center-align">
          <div className = "card-image">
            <img src = {props.item['slike'][0]}/>
          </div>
          <div className="card-stacked black-text">
            <div className = "card-content"><strong className="card-title"><span className = "dest-card">{props.item['naziv']}</span></strong></div>
            <Link className="btn waves-effect waves-light center-align" to={address}>Pogledajte</Link>
          </div>
        </div>
      </div>
  )
}

export default Destination
