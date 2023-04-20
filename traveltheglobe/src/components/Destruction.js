import React from 'react'
import { db } from '../firebase-config';
import { ref, remove } from 'firebase/database';

const Destruction = (props) => {
  const destruction = () => {
    const reference = ref(db, props.db + '/' + props.dbid);
    remove(reference);
  }
  return (
    <div id={props.id} class="modal">
        <div class="modal-content">
            <p>Da li stvarno zelite da obrisete {props.naziv}?</p>
        </div>
        <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-red btn-flat">Ne</a>
            <a href="#!" class="modal-close waves-effect waves-green btn-flat" onClick = {() => destruction()}>Da</a>
        </div>
    </div>
  )
}

export default Destruction
