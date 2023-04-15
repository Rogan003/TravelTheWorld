import React,{ useEffect, useState } from 'react'
import M from "materialize-css"
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../firebase-config';
import { onValue, ref } from "firebase/database";

const DestinationPage = () => {
    const { destsId } = useParams();
    const { destId } = useParams();
    const [destinations,setDestinations] = useState({});
    const [edit,setEdit] = useState(false);
    const navigate = useNavigate();

  useEffect(() => {
    var elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems,{});

    if(JSON.stringify(destinations) === '{}') // ako nema destinacija ne moze se ni doci ovde tkd je ovo dovoljno dobro resenje
    {
        const query = ref(db,"destinacije");

        onValue(query, (snapshot) => {
        if(snapshot.exists())
        {
            setDestinations(snapshot.val());
        }

        if(!snapshot.val().hasOwnProperty(destsId) || !snapshot.val()[destsId].hasOwnProperty(destId)) //dodato kasnije
        {
            navigate("/nodestination");
        }
        });
    }
  });

  return (
    <main>
        {   !edit && destinations.hasOwnProperty(destsId) && destinations[destsId].hasOwnProperty(destId) &&
            <>
                <div className = "center-align">
                    <span><h1>{destinations[destsId][destId]['naziv']}</h1><a className="btn-floating btn-large waves-effect waves-light red" onClick={() => (setEdit(true))}><i className="material-icons">edit</i></a></span>
                    <div className="center-align card-panel white flow-text hoverable">
                        <div className = "col s12 container">
                            <p>
                                {destinations[destsId][destId]['opis']}
                            </p>
                        </div>
                    </div>
                    <div className="center-align card-panel white flow-text hoverable">
                        <div classname = "col s12">
                            <p>Tip putovanja: {destinations[destsId][destId]['tip']}</p>
                        </div>
                        <div classname = "col s12">
                            <p>Prevoz: {destinations[destsId][destId]['prevoz']}</p>
                        </div>
                        <div classname = "col s12">
                            <p>Cena: {destinations[destsId][destId]['cena']}</p>
                        </div>
                        <div classname = "col s12">
                            <p>Maksimalan broj osoba: {destinations[destsId][destId]['maxOsoba']}</p>
                        </div>
                    </div>
                </div>
                <div className="carousel">
                {
                    destinations[destsId][destId]['slike'].map((data) => { return (<a className="carousel-item"><img src={data} alt = "Destination" className = "responsive-img" /></a>); })
                }
                </div>
            </>
        }
        {
            edit && destinations.hasOwnProperty(destsId) && destinations[destsId].hasOwnProperty(destId) &&
            
            <div className="col s12 container center-align">
                <span>
                    <h5>Izmeni {destinations[destsId][destId]['naziv']}</h5>
                    <a className="btn-floating btn-large waves-effect waves-light red" onClick={() => (setEdit(false))}><i className="material-icons">edit</i></a>
                </span>
                <div className="row">
                    <form className="col s12">
                    <div className="row">
                        <div className="input-field col l6 s12">
                        <input id="naziv" type="text" className="validate" value = {destinations[destsId][destId]['naziv']} />
                        <label for="naziv" className = "active">Naziv</label>
                        </div>
                        <div className="input-field col l3 s6">
                        <input id="cena" type="number" className="validate" value = {destinations[destsId][destId]['cena']} />
                        <label for="cena" className = "active">Cena</label>
                        </div>
                        <div className="input-field col l3 s6">
                        <input id="maxosobe" type="number" className="validate" value = {destinations[destsId][destId]['maxOsoba']} />
                        <label for="maxosobe" className = "active">Maksimalan broj osoba</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <textarea id="opis" className="materialize-textarea" value = {destinations[destsId][destId]['opis']}></textarea>
                        <label for="opis" className = "active">Opis</label>
                        </div>
                    </div>
                    <div className="row">
                        <label for="tip">Tip</label>
                    </div>
                    <div className = "row">
                        <label>
                            {   destinations[destsId][destId]['tip'] === "Letovanje" &&
                                <input name="tip" type="radio" checked />
                            }
                            {   destinations[destsId][destId]['tip'] !== "Letovanje" &&
                                <input name="tip" type="radio" />
                            }
                            <span>Letovanje</span>
                        </label>
                        <label>
                            {   destinations[destsId][destId]['tip'] === "Zimovanje" &&
                                <input name="tip" type="radio" checked />
                            }
                            {   destinations[destsId][destId]['tip'] !== "Zimovanje" &&
                                <input name="tip" type="radio" />
                            }
                            <span>Zimovanje</span>
                        </label>
                        <label>
                            {   destinations[destsId][destId]['tip'] === "Gradovi Evrope" &&
                                <input name="tip" type="radio" checked />
                            }
                            {   destinations[destsId][destId]['tip'] !== "Gradovi Evrope" &&
                                <input name="tip" type="radio" />
                            }
                            <span>Gradovi Evrope</span>
                        </label>
                    </div>
                    <div className="row">
                        <label for="prevoz">Vrsta prevoza</label>
                    </div>
                    <div className = "row">
                        <label>
                            {   destinations[destsId][destId]['prevoz'] === "avion" &&
                                <input name="prevoz" type="radio" checked />
                            }
                            {   destinations[destsId][destId]['prevoz'] !== "avion" &&
                                <input name="prevoz" type="radio" />
                            }
                            <span>Avion</span>
                        </label>
                        <label>
                            {   destinations[destsId][destId]['prevoz'] === "autobus" &&
                                <input name="prevoz" type="radio" checked />
                            }
                            {   destinations[destsId][destId]['prevoz'] !== "autobus" &&
                                <input name="prevoz" type="radio" />
                            }
                            <span>Autobus</span>
                        </label>
                        <label>
                            {   destinations[destsId][destId]['prevoz'] === "sopstveni" &&
                                <input name="prevoz" type="radio" checked />
                            }
                            {   destinations[destsId][destId]['prevoz'] !== "sopstveni" &&
                                <input name="prevoz" type="radio" />
                            }
                            <span>Sopstveni prevoz</span>
                        </label>
                    </div>
                    <div className="row">
                        <div className="file-field input-field">
                            <div className="btn">
                                <span>Slike</span> 
                                <input type="file" multiple />
                            </div>
                            <div className="file-path-wrapper">
                                <input className="file-path validate" type="text" placeholder="Upload one or more files" />
                            </div>
                        </div>
                    </div>
                    <div className = "row">
                        <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                            <i class="material-icons right">send</i>
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        }
    </main>
  )
}
// jedino pitanje sta za slike? jel ostavljamo linkove ili dajemo fajl da se okaci?
// textarea prefill ulepsati kao i radio button ostalo okej
// onLoad={M.textareaAutoResize(document.getElementById("opis"))}, ovo nece
export default DestinationPage
