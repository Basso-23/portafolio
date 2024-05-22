import React, { useState, useEffect } from "react";

const Navbar = () => {
  return (
    <section>
      <div className="glass">
        <div className="navbar-container pageSize lg:flex hidden ">
          <div className="navbar-link">Correo Electrónico</div>
          <a className="navbar-link">Github</a>
          <a className="navbar-link">LinkedIn</a>
          <a className="navbar-link last">Currículum</a>
          <div className="available">
            <div>Disponible</div> <div className="pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
