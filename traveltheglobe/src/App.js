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
    const query = ref(db, item);
  
    onValue(query, (snapshot) => {
      if(snapshot.exists())
      {
        func(snapshot.val());
      }
    }); // .catch(() => {navigate("/dberror")}) ovu foru namestiti nekako drugacije, navigate moze samo u routeru da se koristi
  }     // preko onog statusa upita

  useEffect(() => {
    loadData("agencije",setAgencies);
    loadData("destinacije",setDestinations);
    loadData("korisnici",setUsers);
  },[]);

  return (
    <Router>
      {
        (agencies === "a" || destinations === "d" || users === "u") && 
        <div className = "section progress">
          <div className = "indeterminate"></div>
        </div>
      }
      {
        !(agencies === "a" || destinations === "d" || users === "u") &&
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
