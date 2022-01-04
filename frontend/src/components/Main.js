
import React from 'react'
import Footer from './partials/Footer'
import Navbar from './partials/Navbar'

export default function Main() {
  return (
    <div>
      <Navbar/>
      <div className="content">
        <hr />
      </div>
      <Footer/>
    </div>
  )
}
