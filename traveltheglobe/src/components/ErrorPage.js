import React from 'react'
import Logo from '../pics/logo.png'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <main className = "container center-align error">
      <div className = "flow-text section">
        Desila se greska! Nije moguce prikazati ovu stranicu!
      </div>
      <div className = "section">
        <Link to = "/"><img src = {Logo} alt = "Logo" className = "responsive-img" /></Link>
      </div>
      <div className = "flow-text section">
        Izvinjavamo se na ovome!
      </div>
    </main>
  )
}

export default ErrorPage
