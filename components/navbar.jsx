// src/components/NavBar.jsx
import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">🌸 Hana no Mise</div>
      <ul className="nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Flores</a></li>
        <li><a href="#">Sobre Nosotros</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default navbar;
