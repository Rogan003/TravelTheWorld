import React from 'react'

const Destruction = (props) => {
  return (
    <div id={props.id} class="modal">
        <div class="modal-content">
            <p>Da li stvarno zelite da obrisete {props.naziv}?</p>
        </div>
        <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-red btn-flat">Ne</a>
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Da</a>
        </div>
    </div>
  )
}

export default Destruction
