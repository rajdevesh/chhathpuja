import React from "react";
import { NavLink } from "react-router-dom";
import DPChhath from './DPChhath.jpg';
function Barnav()
{
    return(
    <>
    <div className="container text-center">
        <img src={DPChhath} height="100" width="100"/>
    </div>
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
  
  <NavLink className="navbar-brand" to="/chhathpuja">Chhath Puja</NavLink>

  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>

  
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
      <NavLink className="nav-link" to="/chhathpuja">Home</NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" to="/history">History</NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" to="/significance">Significance</NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" to="/argh">Argh</NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" to="/devotees">Devotees</NavLink>
      </li>
    </ul>
  </div>
</nav>
    
    
    
    
    
    </>
    );
}
export default Barnav;
