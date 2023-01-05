import React, {useEffect, useState} from 'react';

export const Counter: React.FC = () => {
    console.log('Component is Created');

    const [count, setCount] = useState<number>(0);

    const clickIncr = (): void => {
        setCount(count + 1);
    };

    const clickDecr = (): void => {
        setCount(count - 1 > 0 ? count - 1 : 0);
    };

    useEffect(() => {
        console.log('Component is Fully Rendered');
    }, [])

    useEffect(() => {
        console.log('Component is Rendered for count variable');
    }, [count])

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <p className="display-2">{count}</p>
                                <button className="btn btn-success me-2" onClick={clickIncr}>increment</button>
                                <button className="btn btn-danger" onClick={clickDecr}>decrement</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Counter;