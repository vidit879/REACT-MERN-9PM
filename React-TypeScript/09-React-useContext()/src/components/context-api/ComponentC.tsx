import React, {useContext} from 'react';
import {AppDataContext, UpdateChildContext} from "../../App";

export const ComponentC: React.FC = () => {

    /**
     * consume the context data
     */
    const theAppData = useContext(AppDataContext);
    const updateChildContext = useContext(UpdateChildContext);

    const clickSend = () => {
        updateChildContext.updateChild("Hello Iam from Child!");
    };

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body bg-danger">
                                <p>Component C</p>
                                <pre>{JSON.stringify(theAppData)}</pre>
                                <button className="btn btn-success" onClick={clickSend}>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default ComponentC;