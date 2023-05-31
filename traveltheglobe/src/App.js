import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import ErrorPage from './components/ErrorPage'
import Header from './components/Header'
import Footer from './components/Footer'
import AgencyPage from './components/AgencyPage'
import DestinationPage from './components/DestinationPage'
import Admin from './components/Admin'
import { useEffect, useState } from 'react'
import { onValue, ref } from 'firebase/database'
import { db } from './firebase-config'
import 'materialize-css/dist/css/materialize.min.css'

function App() {
  const [agencies,setAgencies] = useState("a");
  const [destinations,setDestinations] = useState("d");
  const [users,setUsers] = useState("u");
  
  const loadData = (item,func) => {
    if(window.location.pathname !== '/dberror')
    {
      setAgencies("a");
      setDestinations("d");
      setUsers("u");
      var request = new XMLHttpRequest();
      var firebaseUrl = "https://traveltheglobe-af89d-default-rtdb.europe-west1.firebasedatabase.app";
      request.onreadystatechange = function () {
          if (this.readyState === 4) {
              if (this.status !== 200) {
                window.location = "/dberror";
              }
          }
      }

      request.open('GET', firebaseUrl + '/agencije.json');
      request.send();
    }
    else
    {
      setAgencies("a2");
      setDestinations("d2");
      setUsers("u2");
    }
    
    const query = ref(db, item);

    onValue(query, (snapshot) => {
      if(snapshot.exists())
      {
        func(snapshot.val());
      }
    });
  }

  useEffect(() => {
    loadData("agencije",setAgencies);
    loadData("destinacije",setDestinations);
    loadData("korisnici",setUsers);
  },[]);

  return (
    <Router>
      {
        (agencies === "a2" && destinations === "d2" && users === "u2") &&
        <>
        <Header users={users} />
        <Routes>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        </>
      }
      {
        (agencies === "a" || destinations === "d" || users === "u") && 
        <div className = "section progress">
          <div className = "indeterminate"></div>
        </div>
      }
      {
        !(agencies === "a" || destinations === "d" || users === "u") && !(agencies === "a2" && destinations === "d2" && users === "u2") &&
        <>
        <Header users={users} />
        <Routes>
          <Route path="/" element={<Home agencies={agencies} destinations={destinations} />} />
          <Route path="/agencies/:agencyId" element={<AgencyPage agencies={agencies} destinations={destinations} />} />
          <Route path="/agencies/:agencyId/destinations/:destsId/:destId" element={<DestinationPage destinations={destinations} />} />
          <Route path="/admin" element={<Admin agencies={agencies} destinations={destinations} users={users} />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        </>
      }
      <Footer />
    </Router>
  );
}

export default App;
