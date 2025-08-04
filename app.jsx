// src/App.jsx
import React from 'react';
import NavBar from './components/navbar';
import ItemListContainer from './components/ItemList';

function App() {
  return (
    <>
      <navbar />
      <ItemList greeting="Bienvenido la Floreria Japonesa 🌸" />
    </>
  );
}

export default App;
