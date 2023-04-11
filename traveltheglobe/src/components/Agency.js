import React from 'react'
import { Link } from 'react-router-dom'

const Agency = (props) => {
    const address = "agencies/" + props.address;
  return (
        <div className="col s12 l3 center-align">
            <div className="card">
            <div className="card-image">
                <img src={props.img} />
                <Link className="btn-floating halfway-fab waves-effect waves-light red" to = {address}><i className="material-icons">open_in_browser</i></Link>
            </div> {/* drugo dugme? */}
            <div className="card-content">
                <span className="card-title">{props.name}</span>
            </div>
            </div>
        </div>
  )
}

export default Agency
