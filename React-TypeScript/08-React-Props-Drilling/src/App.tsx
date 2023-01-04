import React, {useState} from 'react';
import './App.css';
import NavBar from "./layout/NavBar";
import ComponentA from "./components/props-drilling/ComponentA";
import {AppData} from "./components/props-drilling/models/AppData";
import ComponentB from "./components/props-drilling/ComponentB";

const App: React.FC = () => {

    const [appData, setAppData] = useState<AppData>({
        name: "React JS",
        version: 18.0,
        author: "Meta"
    });

    return (
        <>
            <NavBar heading={"Props Drilling"} color={'bg-success'}/>

            <div className="container mt-3">
                <div className="row">
                    <div className="col-sm-8">
                        <div className="card">
                            <div className="card-body bg-light">
                                <pre>{JSON.stringify(appData)}</pre>
                                <p>App Component</p>
                                <ComponentA appData={appData}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default App;
