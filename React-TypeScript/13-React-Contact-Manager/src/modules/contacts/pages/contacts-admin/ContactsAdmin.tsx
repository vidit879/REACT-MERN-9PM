import React, {useEffect, useState} from 'react';
import NavBar from "../../../layout/pages/navbar/NavBar";
import Heading from "../../../layout/components/heading/Heading";
import {Link} from "react-router-dom";
import {IContact} from "../../models/IContact";
import {ContactService} from "../../services/ContactService";
import Spinner from "../../../layout/components/spinner/Spinner";
import ErrorMessage from "../../../layout/components/error-message/ErrorMessage";
import ContactCard from "../../components/ContactCard";

interface IState {
    loading: boolean;
    contacts: IContact[];
    errorMessage: string;
}

export const ContactsAdmin: React.FC = () => {

    const [state, setState] = useState<IState>({
        loading: false,
        contacts: [] as IContact[],
        errorMessage: ""
    });

    useEffect(() => {
        getAllContactsFromServer();
    }, []);

    const getAllContactsFromServer = () => {
        setState({...state, loading: true});
        ContactService.getAllContacts().then((response) => {
            setState({
                ...state,
                loading: false,
                contacts: response.data
            })
        }).catch((error) => {
            setState({
                ...state,
                loading: false,
                errorMessage: error.message
            })
        });
    }

    const {loading, contacts, errorMessage} = state;

    return (
        <>
            {loading && <Spinner/>}
            <NavBar color={'bg-dark'}/>
            <Heading heading={'Manage Contacts'} color={'text-dark'}/>
            {!loading && errorMessage.length > 0 && <ErrorMessage message={errorMessage}/>}
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <form>
                            <div className="row">
                                <div className="col">
                                    <input className="form-control" placeholder="Search here" type="text"/>
                                </div>
                                <div className="col">
                                    <input className="btn btn-dark me-2" type="submit"/>
                                    <Link className="btn btn-success" to={'/contacts/add'}>
                                        <i className="bi bi-plus-circle-fill"></i> New</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {
                contacts.length > 0 ? <section className="mt-3">
                    <div className="container">
                        <div className="row">
                            {
                                contacts.map((contact, index) => {
                                    return (
                                        <div className="col-sm-6 mt-3" key={contact.id}>
                                            {
                                                contact && <ContactCard contact={contact}/>
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section> : <>
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col text-center">
                                <p className="h4 text-danger">No Contacts Found</p>
                            </div>
                        </div>
                    </div>
                </>
            }


        </>
    )
};
export default ContactsAdmin;