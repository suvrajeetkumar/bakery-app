import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import Loader from './components/loader/index';
const CartPage = lazy(() => import("./pages/cartPage"));
const HomePage = lazy(() => import("./pages/homepage"));

function App() {
  return (
    <div className="App">
      <Navbar />
      <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      </Suspense>
    </div>
  );
}

export default App;
