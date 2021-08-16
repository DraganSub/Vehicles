import React from "react"
import {Link} from "react-router-dom"

import * as ROUTES from "../Common/constants/routes.jsx"

const Navigation = () => (
  <div>
    <ul className="nav nav-pills nav_ul" 
      id="nav-list"
      style={{   
        listStyle: "none",
        textDecoration: "none",
        color: "white",
        fontFamily: "cursive"
      }}>
        
      <li className="nav-item">
        <Link to={ROUTES.HOME} className="nav-link" style={{color:"white"}}>Home</Link>
      </li>
      <li className="nav-item">
        <Link to={ROUTES.LIST_VEHICLE_MAKE} className="nav-link" style={{color:"white"}}>Vehicles Make</Link>
      </li>
      <li className="nav-item">
        <Link to={ROUTES.LIST_VEHICLE} className="nav-link"  style={{color:"white"}}>Vehicles Models</Link>
      </li>
    </ul>
  </div>
)
export default Navigation