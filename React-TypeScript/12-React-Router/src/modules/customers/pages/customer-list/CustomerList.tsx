import React, {useEffect, useState} from 'react';
import NavBar from "../../../layout/pages/navbar/NavBar";
import Heading from "../../../layout/components/heading/Heading";
import {ICustomer} from "../../models/ICustomer";
import {CustomerService} from "../../services/CustomerService";
import Spinner from "../../../layout/components/spinner/Spinner";
import ErrorMessage from "../../../layout/components/error-message/ErrorMessage";
import {Link} from "react-router-dom";

interface IState {
    loading: boolean;
    customers: ICustomer[];
    errorMessage: string;
}

export const CustomerList: React.FC = () => {

    const [state, setState] = useState<IState>({
        loading: false,
        customers: [] as ICustomer[],
        errorMessage: ""
    });

    /**
     * when the page is loaded
     */
    useEffect(() => {
        getAllCustomersFromServer();
    }, []);

    const getAllCustomersFromServer = () => {
        setState({...state, loading: true});
        CustomerService.getAllCustomers().then((response) => {
            setState({
                ...state,
                loading: false,
                customers: response.data
            })
        }).catch((error) => {
            setState({
                ...state,
                loading: false,
                errorMessage: error.message
            })
        });
    };

    const {loading, errorMessage, customers} = state;

    return (
        <>
            {loading && <Spinner/>}
            <NavBar heading={"React Routing"} color={'bg-success'}/>
            <Heading heading={'Customer List'} color={'text-success'}/>
            {
                !loading && errorMessage.length > 0 && <ErrorMessage message={errorMessage}/>
            }
            {
                !loading && customers.length > 0 &&
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <table className="table table-hover text-center table-striped">
                                <thead className="bg-light">
                                <tr>
                                    <th>SNO</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Email</th>
                                    <th>Location</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    customers.map((customer, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{customer.login.uuid.substring(customer.login.uuid.length - 5)}</td>
                                                <td>
                                                    <img src={customer.picture.large} alt="" width={50} height={50}/>
                                                </td>
                                                <td>
                                                    <Link to={`/customers/${customer.login.uuid}`}>
                                                        {customer.name.title}. {customer.name.first} {customer.name.last}
                                                    </Link>
                                                </td>
                                                <td>{customer.dob.age} yrs</td>
                                                <td>{customer.email}</td>
                                                <td>{customer.location.city}</td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            }
        </>
    )
};
export default CustomerList;