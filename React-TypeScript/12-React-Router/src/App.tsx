import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./modules/layout/pages/home/Home";
import CustomerList from "./modules/customers/pages/customer-list/CustomerList";
import About from "./modules/layout/pages/about/About";
import NotFound404 from "./modules/layout/pages/not-found/NotFound404";
import CustomerDetails from "./modules/customers/pages/customer-details/CustomerDetails";

const App: React.FC = () => {
    return (
        <>
            <BrowserRouter>

                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/customers/list'} element={<CustomerList/>}/>
                    <Route path={'/customers/:customerId'} element={<CustomerDetails/>}/>
                    <Route path={'/about'} element={<About/>}/>
                    <Route path={'*'} element={<NotFound404/>}/>
                </Routes>
            </BrowserRouter>

        </>
    );
}

export default App;
