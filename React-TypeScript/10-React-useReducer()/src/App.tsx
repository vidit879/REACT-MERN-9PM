import React, {useState} from 'react';
import './App.css';
import NavBar from "./layout/NavBar";
import WishMessage from "./components/use-state/WishMessage";
import GreetMessage from "./components/use-reducer/GreetMessage";

const App: React.FC = () => {
    return (
        <>
            <NavBar heading={"useReducer()"} color={'bg-success'}/>
            {/*<WishMessage/>*/}
            <GreetMessage/>
        </>
    );
}

export default App;
