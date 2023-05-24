import React from 'react'
import { Link } from 'react-router-dom'

const Agency = (props) => {
    const address = "agencies/" + props.address;
    return (
        <div className="col s12 m6 l4 container">
            <div className="card small hoverable">
                <div className="card-image waves-effect waves-block waves-light">
                    <img src={props.item['logo']} className="activator responsive-img" />
                </div>
                <div className="card-content activator">
                    <span className="card-title activator"><span id = {props.item['naziv']}>{props.item['naziv']}</span><i className="material-icons right ">add_circle</i></span>
                    <span> 
                        <Link className="btn waves-effect waves-light" to={address}>Otvorite {props.item['naziv']}</Link>
                    </span>
                </div>
                <div className="card-reveal container valign-wrapper">
                    <div className="row">
                        <span className = "card-title">
                            <h3>{props.item['naziv']}</h3>
                            <i className="material-icons">close</i>
                        </span>
                    </div>
                    <div className="row">
                        <div className="col s12 l6">
                            <p>
                                Adresa:
                                <strong>{props.item['adresa']}</strong>
                            </p>
                        </div>
                        <div className="col s12 l6">
                            <p>
                                Godina osnivanja:
                                <strong>{props.item['godina']}</strong>
                            </p>
                        </div>
                    </div>
                    <div className="row center-align">
                        <div className="col s12 l6">
                            <p>
                                Telefon:
                                <strong>{props.item['brojTelefona']}</strong>
                            </p>
                        </div>
                        <div className="col s12 l6">
                            <p>
                                Email:
                                <a href={"mailto: " + props.item['email']} rel="noopener noreferrer" target="_blank">
                                    <strong>{props.item['email']}</strong>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Agency
