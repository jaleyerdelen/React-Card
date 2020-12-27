import React from 'react'
import React from 'react'
import {Link} from "react-router-dom";

export default function Navbar(props) {
  return (
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
         <li class="nav-item">
          <Link to="./" className="nav-link active" aria-current="page">Home</Link>
         </li>
        <li class="nav-item">
           <Link to="./About" className="nav-link active" aria-current="page">About</Link>
        </li>
        <li class="nav-item">
          <Link to="./Contact" className="nav-link active" aria-current="page">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
