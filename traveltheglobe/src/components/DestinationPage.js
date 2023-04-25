import React,{ useEffect, useState } from 'react'
import M from "materialize-css"
import { useParams, useNavigate } from 'react-router-dom';
import { ref, set } from "firebase/database";
import { db } from '../firebase-config';

const DestinationPage = (props) => {
    const { destsId } = useParams();
    const { destId } = useParams();
    const [edit,setEdit] = useState(false);
    const navigate = useNavigate();
    const [inputs,setInputs] = useState({});

  useEffect(() => {window.scrollTo(0, 0);},[]);
  useEffect(() => {
    var elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems,{});

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
        setInputs({naziv : props.destinations[destsId][destId]['naziv'],
        cena : props.destinations[destsId][destId]['cena'],
        maxosobe : props.destinations[destsId][destId]['maxOsoba'],
        opis : props.destinations[destsId][destId]['opis'],
        tip : props.destinations[destsId][destId]['tip'],
        prevoz : props.destinations[destsId][destId]['prevoz'],
        slike : pics});
    }
  });

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    setInputs(values => ({...values,[name] : value}))
  }

  function isImgUrl(url) {
    return /\.(jpg|jpeg|png|webp|avif|gif)$/.test(url)
  }

  const izmeni = (event) => {
    event.preventDefault();
    var isOkay = true;
    
    if(inputs.naziv === "")
    {
        isOkay = false;
        document.getElementById("naziv").classList.remove("valid");
        document.getElementById("naziv").classList.add("invalid");
    }

    if(inputs.opis === "")
    {
        isOkay = false;
        document.getElementById("opis").classList.remove("valid");
        document.getElementById("opis").classList.add("invalid");
    }

    if(inputs.slike === "")
    {
        isOkay = false;
        document.getElementById("slike").classList.remove("valid");
        document.getElementById("slike").classList.add("invalid");
    }

    inputs.slike.split("\n").forEach(value =>
        {
            if(!isImgUrl(value)){
            isOkay = false;
            document.getElementById("slike").classList.remove("valid");
            document.getElementById("slike").classList.add("invalid");
        }
    });

    if(inputs.cena === "" || inputs.cena[0] === '-')
    {
        isOkay = false;
        document.getElementById("cena").classList.remove("valid");
        document.getElementById("cena").classList.add("invalid");
    }

    if(inputs.maxosobe === "" || inputs.maxosobe[0] === '-')
    {
        isOkay = false;
        document.getElementById("maxosobe").classList.remove("valid");
        document.getElementById("maxosobe").classList.add("invalid");
    }

    if(isOkay &&
     !document.getElementById("cena").classList.contains("invalid") && 
     !document.getElementById("maxosobe").classList.contains("invalid"))
    {
        const editRef = ref(db, "destinacije/" + destsId + "/" + destId);
        set(editRef, {
            cena : inputs.cena,
            maxOsoba : inputs.maxosobe,
            naziv : inputs.naziv,
            opis : inputs.opis,
            prevoz : inputs.prevoz,
            tip : inputs.tip,
            slike : inputs.slike.split("\n")
          }).catch(() => navigate("/dberror"));
        setEdit(false);
    }
  }

  return (
    <main>
        {   !edit &&
            <>
                <div className = "center-align">
                    <div className = "contaier"><h1>{props.destinations[destsId][destId]['naziv']}</h1>
                        <a className="btn-floating btn-large waves-effect waves-light red margin" onClick={() => (setEdit(true))}><i className="material-icons">edit</i></a>
                        <button class="btn-floating btn-large waves-effect waves-light red margin" onClick = {() => (navigate(-1))}>
                            <i class="material-icons right">arrow_back</i>
                        </button>
                    </div>
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
                    <form className="col s12" onSubmit = {izmeni}>
                    <div className="row">
                        <div className="input-field col l6 s12">
                        <input id="naziv" type="text" className="validate" name = "naziv" value = {inputs.naziv || ""} onChange = {handleChange} />
                        <label for="naziv" className = "active">Naziv</label>
                        <span className = "helper-text" data-error = "Morate uneti naziv"></span>
                        </div>
                        <div className="input-field col l3 s6">
                        <input id="cena" type="number" className="validate" name = "cena" value = {inputs.cena || ""} onChange = {handleChange} />
                        <label for="cena" className = "active">Cena</label>
                        <span className = "helper-text" data-error = "Cena mora biti pozitivan ceo broj"></span>
                        </div>
                        <div className="input-field col l3 s6">
                        <input id="maxosobe" type="number" className="validate" name = "maxosobe" value = {inputs.maxosobe || ""} onChange = {handleChange} />
                        <label for="maxosobe" className = "active">Maksimalan broj osoba</label>
                        <span className = "helper-text" data-error = "Maksimalan broj osoba mora biti pozitivan ceo broj"></span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <textarea id="opis" className="materialize-textarea" name = "opis" onChange = {handleChange}>
                            {inputs.opis}
                        </textarea>
                        <label for="opis" className = "active">Opis</label>
                        <span className = "helper-text" data-error = "Morate uneti opis"></span>
                        </div>
                    </div>
                    <div className="row">
                        <label for="tip" className = "flow-text">Tip</label>
                    </div>
                    <div className = "row">
                        <label>
                            <input name="tip" type="radio" value = "Letovanje" checked = {inputs.tip === "Letovanje"} onChange = {handleChange} />
                            <span>Letovanje</span>
                        </label>
                        <label>
                            <input name="tip" type="radio" value = "Zimovanje" checked = {inputs.tip === "Zimovanje"} onChange = {handleChange} />
                            <span>Zimovanje</span>
                        </label>
                        <label>
                            <input name="tip" type="radio" value = "Gradovi Evrope" checked = {inputs.tip === "Gradovi Evrope"} onChange = {handleChange} />
                            <span>Gradovi Evrope</span>
                        </label>
                    </div>
                    <div className="row">
                        <label for="prevoz" className = "flow-text">Vrsta prevoza</label>
                    </div>
                    <div className = "row">
                        <label>
                            <input name="prevoz" type="radio" value = "avion" checked = {inputs.prevoz === "avion"} onChange = {handleChange} />
                            <span>Avion</span>
                        </label>
                        <label>
                            <input name="prevoz" type="radio" value = "autobus" checked = {inputs.prevoz === "autobus"} onChange = {handleChange} />
                            <span>Autobus</span>
                        </label>
                        <label>
                            <input name="prevoz" type="radio" value = "sopstveni" checked = {inputs.prevoz === "sopstveni"} onChange = {handleChange} />
                            <span>Sopstveni prevoz</span>
                        </label>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="slike" className="materialize-textarea" name = "slike" onChange = {handleChange}>
                                {inputs.slike}
                            </textarea>
                            <label for="slike" className = "active">Slike(linkovi, odvojite enterom)</label>
                            <span className = "helper-text" data-error = "Morate uneti validne slike"></span>
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
