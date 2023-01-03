import React from 'react';
import './App.css';
import NavBar from "./layout/NavBar";
import ParentComponent from "./components/basic/ParentComponent";
import ParentCard from "./components/intermediate/ParentCard";
import UserManager from "./user-manager/components/UserManager";

const App: React.FC = () => {
    return (
        <>
            <NavBar heading={"Component Interaction"} color={'bg-success'}/>
            {/* <ParentComponent/>*/}
            {/* <ParentCard/>*/}
            <UserManager/>
        </>
    );
}

export default App;
