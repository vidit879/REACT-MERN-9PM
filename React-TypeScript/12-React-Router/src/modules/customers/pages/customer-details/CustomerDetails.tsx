import React from 'react';
import NavBar from "../../../layout/pages/navbar/NavBar";
import {useParams, useSearchParams} from "react-router-dom";

export const CustomerDetails: React.FC = () => {
    const {customerId} = useParams();
   
    return (
        <>
            <NavBar heading={"React Routing"} color={'bg-success'}/>
            <pre>{customerId}</pre>
        </>
    )
};
export default CustomerDetails;