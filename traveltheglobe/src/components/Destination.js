import React,{ useEffect } from 'react'
import M from "materialize-css"

const Destination = (props) => {
  useEffect(() => {
    var elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems,{});
  },[]);

  return (
    <div className="col s12">
        <div className = "center-align">
            <h5>{props.item['naziv']}</h5>
            <p>
                {props.item['opis']}
            </p>
            <p>Tip putovanja: {props.item['tip']}</p>
            <p>Prevoz: {props.item['prevoz']}</p>
            <p>Cena: {props.item['cena']}</p>
            <p>Maksimalan broj osoba: {props.item['maxOsoba']}</p>
        </div>
        <div className="carousel">
        {
            props.item['slike'].map((data) => { return (<a className="carousel-item"><img src={data} alt = "Destination" /></a>); })
        }
        </div>
    </div>
  )
}

export default Destination
