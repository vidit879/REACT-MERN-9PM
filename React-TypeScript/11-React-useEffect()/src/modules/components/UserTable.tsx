import React from 'react';
import {IUser} from "../models/IUser";

interface IProps {
    users: IUser[];
    selectUser: (user: IUser) => void;
}

export const UserTable: React.FC<IProps> = (props) => {
    const {users} = props;
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <table className="table table-striped table-hover text-center">
                            <thead>
                            <tr>
                                <th>SNO</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Company</th>
                                <th>Location</th>
                                <th>Website</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                users.map((user, index) => {
                                    return (
                                        <tr key={user.id} onClick={() => props.selectUser(user)}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.company.name}</td>
                                            <td>{user.address.city}</td>
                                            <td>{user.website}</td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
};
export default UserTable;