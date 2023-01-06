import React from 'react';
import NavBar from "../navbar/NavBar";
import Heading from "../../components/heading/Heading";

export const About: React.FC = () => {
    return (
        <>
            <NavBar heading={"React Routing"} color={'bg-success'}/>
            <Heading heading={'About'} color={'text-success'}/>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-sm-8">
                        <ul className="list-group">
                            <li className="list-group-item">
                                Name : <span className="fw-bold">React Routing</span>
                            </li>
                            <li className="list-group-item">
                                Version : <span className="fw-bold">1.0.1</span>
                            </li>
                            <li className="list-group-item">
                                Author : <span className="fw-bold">Young Developers</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
};
export default About;