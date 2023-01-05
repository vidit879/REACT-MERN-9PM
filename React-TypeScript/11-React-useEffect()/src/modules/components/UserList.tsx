import React, {useEffect, useState} from 'react';
import {IUser} from "../models/IUser";
import {UserService} from "../services/UserService";
import ErrorMessage from "./ErrorMessage";
import UserTable from "./UserTable";
import DisplayHeading from "./DisplayHeading";
import Spinner from "../../layout/Spinner";

interface IState {
    loading: boolean;
    users: IUser[];
    errorMessage: string;
}

export const UserList: React.FC = () => {
    const [state, setState] = useState<IState>({
        loading: false,
        users: [] as IUser[],
        errorMessage: ""
    });

    useEffect(() => {
        setState({...state, loading: true});
        UserService.getAllUsers().then((response) => {
            setState({
                ...state,
                loading: false,
                users: response.data
            });
        }).catch((error) => {
            setState({
                ...state,
                loading: false,
                errorMessage: error.message
            });
        });
    }, []);

    const selectUser = (user: IUser): void => {
        alert(JSON.stringify(user));
    };

    const {loading, users, errorMessage} = state;

    return (
        <>  {loading && <Spinner/>}
            <DisplayHeading heading={'User List'}/>
            {users.length > 0 && <UserTable users={users} selectUser={selectUser}/>}
            {errorMessage.length > 0 && <ErrorMessage message={errorMessage}/>}
        </>
    )
};
export default UserList;