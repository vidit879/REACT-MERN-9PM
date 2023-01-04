import React from 'react';
import ComponentB from "./ComponentB";

export const ComponentA: React.FC = () => {
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body bg-info">
                                <p>Component A</p>
                                <ComponentB/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default ComponentA;