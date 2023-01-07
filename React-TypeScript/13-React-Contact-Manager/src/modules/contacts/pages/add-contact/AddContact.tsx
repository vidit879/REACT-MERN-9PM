import React from 'react';
import NavBar from "../../../layout/pages/navbar/NavBar";
import Heading from "../../../layout/components/heading/Heading";
import {Link} from "react-router-dom";

export const AddContact: React.FC = () => {
    return (
        <>
            <NavBar color={'bg-dark'}/>
            <Heading heading={'Add Contact'} color={'text-success'}/>
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <form>
                                <div className="mb-2">
                                    <input className="form-control" placeholder="Name" type="text"/>
                                </div>
                                <div className="mb-2">
                                    <input className="form-control" placeholder="Photo Url" type="text"/>
                                </div>
                                <div className="mb-2">
                                    <input className="form-control" placeholder="Mobile" type="number"/>
                                </div>
                                <div className="mb-2">
                                    <input className="form-control" placeholder="Email" type="email"/>
                                </div>
                                <div className="mb-2">
                                    <input className="form-control" placeholder="Company" type="text"/>
                                </div>
                                <div className="mb-2">
                                    <input className="form-control" placeholder="Title" type="text"/>
                                </div>
                                <div className="mb-2">
                                    <select className="form-control">
                                        <option value="">Select a Group</option>
                                        <option value="">Family</option>
                                        <option value="">Colleague</option>
                                        <option value="">Friend</option>
                                        <option value="">Social</option>
                                        <option value="">Service</option>
                                    </select>
                                </div>
                                <div className="mb-2">
                                    <input className="btn btn-success me-2" type="submit" value="Create"/>
                                    <Link className="btn btn-dark" to="/contacts/admin">Cancel</Link>
                                </div>
                            </form>
                        </div>
                        <div className="col-sm-3">
                            <img alt="" className="img-fluid"
                                 src="https://www.citypng.com/public/uploads/small/11640168385jtmh7kpmvna5ddyynoxsjy5leb1nmpvqooaavkrjmt9zs7vtvuqi4lcwofkzsaejalxn7ggpim4hkg0wbwtzsrp1ldijzbdbsj5z.png"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
export default AddContact;