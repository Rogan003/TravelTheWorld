import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import ErrorPage from './components/ErrorPage'
import Header from './components/Header'
import Footer from './components/Footer'
import AgencyPage from './components/AgencyPage'
import DestinationPage from './components/DestinationPage'
import Admin from './components/Admin'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/agencies/:agencyId" element = {<AgencyPage />} />
        <Route path = "/agencies/:agencyId/destinations/:destsId/:destId" element = {<DestinationPage />} />
        <Route path = "/admin" element = {<Admin />} />
        <Route path = "*" element = {<ErrorPage />} /> {/* mozda staviti drugacije error? U smislu da nije sa header i footer */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
