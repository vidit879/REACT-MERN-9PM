import React from 'react';

interface IProps {
    heading: string;
}

export const DisplayHeading: React.FC<IProps> = (props) => {
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success">{props.heading}</p>
                        <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                            blanditiis cupiditate dicta
                            dignissimos doloribus ducimus ea, incidunt minus molestiae natus numquam, officia quo quos
                            repellat totam ut voluptatem. Neque, non.</p>
                    </div>
                </div>
            </div>
        </>
    )
};
export default DisplayHeading;