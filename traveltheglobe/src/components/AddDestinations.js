import React from 'react'

const AddDestinations = () => {
  return (
    <div id="adddest" className="modal">
      <div className="modal-content center-align container">
        <h4>Dodajte destinaciju</h4>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col l4 s12">
                <input id="naziv" type="text" className="validate" />
                <label for="naziv">Naziv</label>
              </div>
              <div className="input-field col l4 s4">
                <input id="cena" type="number" className="validate" />
                <label for="cena">Cena</label>
              </div>
              <div className="input-field col l4 s8">
                <input id="maxosobe" type="number" className="validate" />
                <label for="maxosobe">Maksimalan broj osoba</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea id="opis" className="materialize-textarea"></textarea>
                <label for="opis">Opis</label>
              </div>
            </div>
            <div className="row">
              <label for="tip" className="flow-text">Tip</label>
            </div>
            <div className="row">
              <label>
                <input name="tip" type="radio" />
                <span>Letovanje</span>
              </label>
              <label>
                <input name="tip" type="radio" />
                <span>Zimovanje</span>
              </label>
              <label>
                <input name="tip" type="radio" />
                <span>Gradovi Evrope</span>
              </label>
            </div>
            <div className="row">
              <label for="prevoz" className="flow-text">Vrsta prevoza</label>
            </div>
            <div className="row">
              <label>
                <input name="prevoz" type="radio" />
                <span>Avion</span>
              </label>
              <label>
                <input name="prevoz" type="radio" />
                <span>Autobus</span>
              </label>
              <label>
                <input name="prevoz" type="radio" />
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
          </form>
        </div>
      </div>
      <div className="modal-footer">
        <a href="#!" class="btn waves-effect waves-light modal-close">Back
          <i class="material-icons right">arrow_back</i>
        </a>
        <a href="#!" class="btn waves-effect waves-light modal-close">Submit
          <i class="material-icons right">send</i>
        </a>
      </div>
    </div>
  )
}

export default AddDestinations
