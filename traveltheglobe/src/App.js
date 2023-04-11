import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import ErrorPage from './components/ErrorPage'
import Header from './components/Header'
import Footer from './components/Footer'
import AgencyPage from './components/AgencyPage'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/agencies/:agencyId" element = {<AgencyPage />} />
        <Route path = "*" element = {<ErrorPage />} /> {/* mozda staviti drugacije error? U smislu da nije sa header i footer */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
