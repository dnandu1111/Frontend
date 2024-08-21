import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductsList from './components/ProductsList';
import ProductDetails from './components/ProductDetails';

const App = () => {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<ProductsList />} exact />
            <Route path="/products/:id" element={<ProductDetails />} exact />
            </Routes>
        </Router>
    );
};

export default App;
