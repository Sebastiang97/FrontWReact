import React from 'react'
import { NavLink } from 'react-router-dom'


export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">JobSearch</NavLink>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link " to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/empleos">Empleos</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/categorias">Categorias</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/postulacion">Postulaciones</NavLink>
                    </li>
                </ul>
                <span className="navbar-text">
                    Loguot 
                </span>
            </div>
        </div>
    </nav>
  )
}
