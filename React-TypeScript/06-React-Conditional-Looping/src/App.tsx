import React from 'react';
import './App.css';
import NavBar from "./layout/NavBar";
import ProductCart from "./components/ProductCart";
import ProductsDisplay from "./components/ProductsDisplay";

const App: React.FC = () => {
    return (
        <>
            <NavBar heading={"Conditional Rendering & Looping"} color={'bg-success'}/>
            <ProductsDisplay/>
            {/*<ProductCart/>*/}
        </>
    );
}

export default App;
