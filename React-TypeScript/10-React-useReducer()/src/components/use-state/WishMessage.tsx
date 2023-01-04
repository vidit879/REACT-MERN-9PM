import React, {useState} from 'react';

export const WishMessage: React.FC = () => {

    const [msg, setMsg] = useState<string>("");

    const clickGM = () => {
        setMsg("Good Morning");
    }

    const clickGA = () => {
        setMsg("Good Afternoon");
    }

    const clickGE = () => {
        setMsg("Good Evening");
    }

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-sm-8">
                        <div className="card">
                            <div className="card-header">
                                <p className="h4">useState()</p>
                            </div>
                            <div className="card-body">
                                <p className="h3">Hello
                                    <span className="fw-bold"> {msg}</span>
                                </p>
                                <button className="btn btn-success me-2" onClick={clickGM}>Good Morning</button>
                                <button className="btn btn-warning me-2" onClick={clickGA}>Good Afternoon</button>
                                <button className="btn btn-danger me-2" onClick={clickGE}>Good Evening</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default WishMessage;