import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import ProductInfo from "./components/ProductInfo";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/product/:id" element={<ProductInfo/>}/>
        </Routes>
    );
}

export default App;
