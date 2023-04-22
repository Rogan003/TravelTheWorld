import React,{ useEffect, useState } from 'react'
import M from "materialize-css"
import { useParams, useNavigate } from 'react-router-dom';

const DestinationPage = (props) => {
    const { destsId } = useParams();
    const { destId } = useParams();
    const [edit,setEdit] = useState(false);
    const navigate = useNavigate();
    const [inputs,setInputs] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);

    var elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems,{});
    M.updateTextFields(); // ne pomaze, videti da li ostaviti posle

    if(!props.destinations.hasOwnProperty(destsId) || !props.destinations[destsId].hasOwnProperty(destId))
    {
        navigate("/nodestination");
    }

    if(document.getElementById("opis"))
    {
        M.textareaAutoResize(document.getElementById("opis"));
    }

    if(document.getElementById("slike"))
    {
        M.textareaAutoResize(document.getElementById("slike"));
    }

    if(!inputs.hasOwnProperty("slike"))
    {
        let pics = "";
        
        props.destinations[destsId][destId]['slike'].forEach(element => {
            pics += element + "\n";
        });
        
        pics = pics.substring(0,pics.length - 1);
        setInputs({slike : pics});
    }
  });

  return (
    <main>
        {   !edit &&
            <>
                <div className = "center-align">
                    <span><h1>{props.destinations[destsId][destId]['naziv']}</h1><a className="btn-floating btn-large waves-effect waves-light red" onClick={() => (setEdit(true))}><i className="material-icons">edit</i></a></span>
                    <div className="center-align card-panel white flow-text hoverable">
                        <div className = "col s12 container">
                            <p>
                                {props.destinations[destsId][destId]['opis']}
                            </p>
                        </div>
                    </div>
                    <div className="center-align card-panel white flow-text hoverable">
                        <div classname = "col s12">
                            <p>Tip putovanja: {props.destinations[destsId][destId]['tip']}</p>
                        </div>
                        <div classname = "col s12">
                            <p>Prevoz: {props.destinations[destsId][destId]['prevoz']}</p>
                        </div>
                        <div classname = "col s12">
                            <p>Cena: {props.destinations[destsId][destId]['cena']} dinara</p>
                        </div>
                        <div classname = "col s12">
                            <p>Maksimalan broj osoba: {props.destinations[destsId][destId]['maxOsoba']}</p>
                        </div>
                    </div>
                </div>
                <div className="carousel">
                {
                    props.destinations[destsId][destId]['slike'].map((data) => { return (<a className="carousel-item"><img src={data} alt = "Destination" className = "responsive-img" /></a>); })
                }
                </div>
            </>
        }
        {
            edit &&
            <div className="col s12 container center-align">
                <span>
                    <h1>Izmeni {props.destinations[destsId][destId]['naziv']}</h1>
                    <a className="btn-floating btn-large waves-effect waves-light red" onClick={() => (setEdit(false))}><i className="material-icons">edit</i></a>
                </span>
                <div className="row">
                    <form className="col s12">
                    <div className="row">
                        <div className="input-field col l6 s12">
                        <input id="naziv" type="text" className="validate" value = {props.destinations[destsId][destId]['naziv']} />
                        <label for="naziv" className = "active">Naziv</label>
                        </div>
                        <div className="input-field col l3 s6">
                        <input id="cena" type="number" className="validate" value = {props.destinations[destsId][destId]['cena']} />
                        <label for="cena" className = "active">Cena</label>
                        </div>
                        <div className="input-field col l3 s6">
                        <input id="maxosobe" type="number" className="validate" value = {props.destinations[destsId][destId]['maxOsoba']} />
                        <label for="maxosobe" className = "active">Maksimalan broj osoba</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <textarea id="opis" className="materialize-textarea" value = {props.destinations[destsId][destId]['opis']}></textarea>
                        <label for="opis" className = "active">Opis</label>
                        </div>
                    </div>
                    <div className="row">
                        <label for="tip" className = "flow-text">Tip</label>
                    </div>
                    <div className = "row">
                        <label>
                            {   props.destinations[destsId][destId]['tip'] === "Letovanje" &&
                                <input name="tip" type="radio" checked />
                            }
                            {   props.destinations[destsId][destId]['tip'] !== "Letovanje" &&
                                <input name="tip" type="radio" />
                            }
                            <span>Letovanje</span>
                        </label>
                        <label>
                            {   props.destinations[destsId][destId]['tip'] === "Zimovanje" &&
                                <input name="tip" type="radio" checked />
                            }
                            {   props.destinations[destsId][destId]['tip'] !== "Zimovanje" &&
                                <input name="tip" type="radio" />
                            }
                            <span>Zimovanje</span>
                        </label>
                        <label>
                            {   props.destinations[destsId][destId]['tip'] === "Gradovi Evrope" &&
                                <input name="tip" type="radio" checked />
                            }
                            {   props.destinations[destsId][destId]['tip'] !== "Gradovi Evrope" &&
                                <input name="tip" type="radio" />
                            }
                            <span>Gradovi Evrope</span>
                        </label>
                    </div>
                    <div className="row">
                        <label for="prevoz" className = "flow-text">Vrsta prevoza</label>
                    </div>
                    <div className = "row">
                        <label>
                            {   props.destinations[destsId][destId]['prevoz'] === "avion" &&
                                <input name="prevoz" type="radio" checked />
                            }
                            {   props.destinations[destsId][destId]['prevoz'] !== "avion" &&
                                <input name="prevoz" type="radio" />
                            }
                            <span>Avion</span>
                        </label>
                        <label>
                            {   props.destinations[destsId][destId]['prevoz'] === "autobus" &&
                                <input name="prevoz" type="radio" checked />
                            }
                            {   props.destinations[destsId][destId]['prevoz'] !== "autobus" &&
                                <input name="prevoz" type="radio" />
                            }
                            <span>Autobus</span>
                        </label>
                        <label>
                            {   props.destinations[destsId][destId]['prevoz'] === "sopstveni" &&
                                <input name="prevoz" type="radio" checked />
                            }
                            {   props.destinations[destsId][destId]['prevoz'] !== "sopstveni" &&
                                <input name="prevoz" type="radio" />
                            }
                            <span>Sopstveni prevoz</span>
                        </label>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="slike" className="materialize-textarea">
                                {inputs.slike}
                            </textarea>
                            <label for="slike">Slike(linkovi, odvojite enterom)</label>
                        </div>
                    </div>
                    <div className = "row">
                        <button class="btn waves-effect waves-light" type="submit" name="action">Izmeni destinaciju
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

export default DestinationPage
