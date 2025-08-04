// src/App.jsx
import React from 'react';
import NavBar from './components/navbar';
import ItemListContainer from './components/ItemList';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a Hana no Mise, tu floristería japonesa 🌸" />
    </>
  );
}

export default App;
