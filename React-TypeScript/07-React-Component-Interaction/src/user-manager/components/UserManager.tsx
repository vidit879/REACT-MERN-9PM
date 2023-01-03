import React, {useState} from 'react';
import UserList from "./UserList";
import UserCard from "./UserCard";
import {IUser} from "../models/IUser";

export const UserManager: React.FC = () => {

    const [user, setUser] = useState<IUser>({} as IUser);

    const receiveUser = (user: IUser): void => {
        setUser(user);
    };

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success">User Manager</p>
                        <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eos
                            est facilis, id ipsam ipsum magnam molestias, mollitia necessitatibus officiis porro vero.
                            Doloremque et impedit iste possimus repudiandae sunt temporibus.</p>
                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-sm-9">
                        <UserList receiveUser={receiveUser}/>
                    </div>
                    <div className="col-sm-3">
                        <UserCard user={user}/>
                    </div>
                </div>
            </div>
        </>
    )
};
export default UserManager;