import React from 'react';
import './App.css';
import NavBar from "./layout/NavBar";
import UserList from "./modules/components/UserList";

const App: React.FC = () => {
    return (
        <>
            <NavBar heading={"useEffect()"} color={'bg-success'}/>
            {/*<Counter/>*/}
            <UserList/>
        </>
    );
}

export default App;
