import React from "react";
import Inicio from "./components/Inicio";
import Contacto from "./components/Contacto";
import Nosotros from "./components/Nosotros";
import { Routes, Route, Link, NavLink } from "react-router-dom";
// import "./App.css";

//Se descarga la libreria con -> npm install react-router-dom

function App() {
  
      return (
        <div className="container mt-5">
          <div className="btn-group">
          {/* <h1>Welcome to React Router!</h1> */}
            
         <div className="btn-group">
          <Link to="/" className="btn btn-dark">
            Inicio
          </Link>
          <Link to="/Nosotros" className="btn btn-dark">
            Nosotros
          </Link>
          {/* class de activado mientras navego en esa seccion */}
          <NavLink to="Contacto" className="btn btn-dark" activeClassName="active">
            Contacto
          </NavLink>
          </div>
        </div>
        
        <hr />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Nosotros" element={<Nosotros />} />
       </Routes>
       
        </div>
  );
}

export default App;
