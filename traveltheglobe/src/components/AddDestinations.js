import React, { useState } from 'react'
import M from 'materialize-css';
import { useNavigate } from 'react-router-dom';
import { ref, set, push } from "firebase/database";
import { db } from '../firebase-config';

const AddDestinations = (props) => {
  const [inputs,setInputs] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    setInputs(values => ({...values,[name] : value}))
  }

  function isImgUrl(url) {
    return /\.(jpg|jpeg|png|webp|avif|gif)$/.test(url)
  }

  const addDest = () => {
    let isOkay = true;

    if(!inputs.dest_naziv || inputs.dest_naziv === "")
    {
        isOkay = false;
        document.getElementById("dest_naziv").classList.remove("valid");
        document.getElementById("dest_naziv").classList.add("invalid");
    }

    if(!inputs.dest_opis || inputs.dest_opis === "")
    {
        isOkay = false;
        document.getElementById("dest_opis").classList.remove("valid");
        document.getElementById("dest_opis").classList.add("invalid");
    }

    if(!inputs.dest_slike || inputs.dest_slike === "")
    {
        isOkay = false;
        document.getElementById("dest_slike").classList.remove("valid");
        document.getElementById("dest_slike").classList.add("invalid");
    }
    else
    {
      inputs.dest_slike.split("\n").forEach(value =>
          {
              if(!isImgUrl(value)){
              isOkay = false;
              document.getElementById("dest_slike").classList.remove("valid");
              document.getElementById("dest_slike").classList.add("invalid");
          }
      });
    }

    if(!inputs.dest_cena || inputs.dest_cena === "" || inputs.dest_cena[0] === '-')
    {
        isOkay = false;
        document.getElementById("dest_cena").classList.remove("valid");
        document.getElementById("dest_cena").classList.add("invalid");
    }

    if(!inputs.dest_maxOsoba || inputs.dest_maxOsoba === "" || inputs.dest_maxOsoba[0] === '-')
    {
        isOkay = false;
        document.getElementById("dest_maxOsoba").classList.remove("valid");
        document.getElementById("dest_maxOsoba").classList.add("invalid");
    }

    if(!inputs.dest_tip)
    {
      isOkay = false;
    }

    if(!inputs.dest_prevoz)
    {
      isOkay = false;
    }
    if(isOkay &&
     !document.getElementById("dest_cena").classList.contains("invalid") && 
     !document.getElementById("dest_maxOsoba").classList.contains("invalid"))
    {
        const postListRef = ref(db, "destinacije/" + props.dests_key);
        const newPostRef = push(postListRef);
        set(newPostRef, {
            cena : inputs.dest_cena,
            maxOsoba : inputs.dest_maxOsoba,
            naziv : inputs.dest_naziv,
            opis : inputs.dest_opis,
            prevoz : inputs.dest_prevoz,
            tip : inputs.dest_tip,
            slike : inputs.dest_slike.split("\n")
          }).catch(() => navigate("/dberror"));
          let instance = M.Modal.getInstance(document.getElementById("adddest"));
          instance.close();
    }
  }

  return (
    <div id="adddest" className="modal">
      <div className="modal-content center-align container">
        <h4>Dodajte destinaciju</h4>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col l4 s12">
                <input id="dest_naziv" type="text" className="validate" name = "dest_naziv" value = {inputs.dest_naziv || ""} onChange={handleChange} />
                <label for="dest_naziv">Naziv</label>
                <span className = "helper-text" data-error = "Morate uneti naziv"></span>
              </div>
              <div className="input-field col l4 s4">
                <input id="dest_cena" type="number" className="validate" name = "dest_cena" value = {inputs.dest_cena || ""} onChange = {handleChange} />
                <label for="dest_cena">Cena</label>
                <span className = "helper-text" data-error = "Cena mora biti pozitivan ceo broj"></span>
              </div>
              <div className="input-field col l4 s8">
                <input id="dest_maxOsoba" type="number" className="validate" name = "dest_maxOsoba" value = {inputs.dest_maxOsoba || ""} onChange={handleChange} />
                <label for="dest_maxOsoba">Maksimalan broj osoba</label>
                <span className = "helper-text" data-error = "Maksimalan broj osoba mora biti pozitivan ceo broj"></span>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea id="dest_opis" className="materialize-textarea" name = "dest_opis" onChange={handleChange}>
                  {inputs.dest_opis || ""}
                </textarea>
                <label for="dest_opis">Opis</label>
                <span className = "helper-text" data-error = "Morate uneti opis"></span>
              </div>
            </div>
            <div className="row">
              <label for="dest_tip" className="flow-text">Tip</label>
            </div>
            <div className="row">
              <label>
                <input name="dest_tip" type="radio" value = "Letovanje" checked = {inputs.dest_tip === "Letovanje"} onChange = {handleChange} />
                <span>Letovanje</span>
              </label>
              <label>
                <input name="dest_tip" type="radio" value = "Zimovanje" checked = {inputs.dest_tip === "Zimovanje"} onChange = {handleChange} />
                <span>Zimovanje</span>
              </label>
              <label>
                <input name="dest_tip" type="radio" value = "Gradovi Evrope" checked = {inputs.dest_tip === "Gradovi Evrope"} onChange = {handleChange} />
                <span>Gradovi Evrope</span>
              </label>
            </div>
            <div className="row">
              <label for="dest_prevoz" className="flow-text">Vrsta prevoza</label>
            </div>
            <div className="row">
              <label>
                <input name="dest_prevoz" type="radio" value = "avion" checked = {inputs.dest_prevoz === "avion"} onChange = {handleChange} />
                <span>Avion</span>
              </label>
              <label>
                <input name="dest_prevoz" type="radio" value = "autobus" checked = {inputs.dest_prevoz === "autobus"} onChange = {handleChange} />
                <span>Autobus</span>
              </label>
              <label>
                <input name="dest_prevoz" type="radio" value = "sopstveni" checked = {inputs.dest_prevoz === "sopstveni"} onChange = {handleChange} />
                <span>Sopstveni prevoz</span>
              </label>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea id="dest_slike" className="materialize-textarea" name = "dest_slike" onChange = {handleChange}>
                  {inputs.dest_slike || ""}
                </textarea>
                <label for="dest_slike">Slike(linkovi, odvojite enterom)</label>
                <span className = "helper-text" data-error = "Morate uneti validne slike"></span>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="modal-footer">
        <a href="#!" class="btn waves-effect waves-light modal-close">Nazad
          <i class="material-icons right">arrow_back</i>
        </a>
        <button class="btn waves-effect waves-light" onClick={addDest}>Dodaj destinaciju
          <i class="material-icons right">send</i>
        </button>
      </div>
    </div>
  )
}

export default AddDestinations