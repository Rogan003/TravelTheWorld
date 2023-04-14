import React, { useEffect, useState } from 'react'
import { db } from '../firebase-config' 
import Agency from './Agency'
import { onValue, ref } from "firebase/database";

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
    <main className = "center-align valign-wrapper">
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

export default Home
