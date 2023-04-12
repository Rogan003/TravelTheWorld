import React from 'react'
import { Link } from 'react-router-dom'

const Agency = (props) => {
    const address = "agencies/" + props.address;
    return (
        <div className="col s12 m6 l4 container">
            <div className="card large">
                <div className="card-image waves-effect waves-block waves-light">
                    <img src={props.item['logo']} className="activator responsive-img" />
                    <Link className="btn-floating halfway-fab waves-effect waves-light red" to={address}><i className="material-icons">open_in_browser</i></Link>
                </div> {/* drugo dugme? */}
                <div className="card-content activator"> {/* izmeniti mnogo manje da bude */}
                    <span className="card-title activator">{props.item['naziv']}<i className="material-icons right ">add_circle</i></span>
                </div>
                <div class="card-reveal container"> {/* odraditi CSS */}
                    <div className="row">
                        <div className="center-align">
                            <span className = "card-title"><h3>Podaci</h3><i className="material-icons right">close</i></span>
                        </div>
                    </div>
                    <div className="row center-align">
                        <div className="col s6 l3">
                            Adresa:
                            <strong>{props.item['adresa']}</strong>
                        </div>
                    </div>
                    <div className="row center-align">
                        <div className="col s6 l3">
                            Godina osnivanja:
                            <strong>{props.item['godina']}</strong>
                        </div>
                    </div>
                    <div className="row center-align">
                        <div className="col s6 l3">
                            Broj telefona:
                            <strong>{props.item['brojTelefona']}</strong>
                        </div>
                    </div>
                    <div className="row center-align">
                        <div className="col s6 l3">
                            Email:
                            <a href={"mailto: " + props.item['email']} rel="noopener noreferrer" target="_blank">
                                <strong>{props.item['email']}</strong>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Agency
