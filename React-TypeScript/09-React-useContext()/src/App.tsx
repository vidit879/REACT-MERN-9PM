import React, {useState} from 'react';
import './App.css';
import NavBar from "./layout/NavBar";
import ComponentA from "./components/context-api/ComponentA";
import {AppData} from "./components/context-api/models/AppData";

interface UpdateChildType {
    updateChild: (msg: string) => void
}

export const AppDataContext = React.createContext<AppData>({} as AppData);
export const UpdateChildContext = React.createContext<UpdateChildType>({} as UpdateChildType);

const App: React.FC = () => {

    const [appData, setAppData] = useState<AppData>({
        name: "React JS",
        version: 18.0,
        author: "Meta"
    });

    const [childText, setChildText] = useState<string>("");

    const updateChildFn = (msg: string): void => {
        setChildText(msg);
    };

    return (
        <>
            <NavBar heading={"Context API"} color={'bg-success'}/>

            <div className="container mt-3">
                <div className="row">
                    <div className="col-sm-8">
                        <div className="card">
                            <div className="card-body bg-light">
                                <pre>{JSON.stringify(appData)}</pre>
                                <pre>From Child : {JSON.stringify(childText)}</pre>
                                <p>App Component</p>

                                {/** Provide the context data */}
                                <AppDataContext.Provider value={appData}>
                                    <UpdateChildContext.Provider value={{updateChild: updateChildFn}}>
                                        <ComponentA/>
                                    </UpdateChildContext.Provider>
                                </AppDataContext.Provider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default App;
