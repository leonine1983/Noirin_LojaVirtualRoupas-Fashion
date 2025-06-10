// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Inicio';
import ProductList from './pages/ListarProdutos';
import ProductDetail from './pages/MostrarProduto';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="flex flex-column min-h-screen w-screen" style={{ backgroundColor: '#fff0f5' }}>
      <Header />
      <main className="flex-grow  m-auto" >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<ProductList />} />
          <Route path="/produtos/:id" element={<ProductDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App