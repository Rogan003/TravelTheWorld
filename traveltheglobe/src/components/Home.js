import React, { useEffect, useState } from 'react'
import { db } from '../firebase-config' 
import Agency from './Agency'
import { onValue, ref } from "firebase/database";
import { Link } from 'react-router-dom';
import Logo from '../pics/logo.png'

const Home = () => {
  const [agencies,setAgencies] = useState({});

  useEffect(() => {
    const query = ref(db, "agencjie");
    
    onValue(query, (snapshot) => {
      if(snapshot.exists()){
        setAgencies(snapshot.val());
      }
    });
  },[]);

  return (
    <main className = "center-align">
      <div className = "row container">
        <Link to="/" className = "brand-logo"><img src = {Logo} alt = "Logo" className = "logo-img hoverable" /></Link>
      </div> {/* mozda izbaciti hoverable sa logoa */}
      <div className = "card-panel hoverable flow-text">
        <div className = "row container">
          <h1>Travel The Globe</h1>
        </div>
        <div className = "row container">
          <p>
            Dobrodosli na Travel The Globe! Ovde mozete videti najpopularnije turisticke agencije i destinacije na svetu!
            Istrazite sami!
          </p>
        </div>
      </div>
      <div className = "row container">
      {
        Object.values(agencies).map((value,index) => {
          return (
              <Agency item = {value} address = {Object.keys(agencies)[index]} key = {Object.keys(agencies)[index]} />
          );
        })
      }
      </div>
    </main>
  )
}

//dodati search
export default Home
