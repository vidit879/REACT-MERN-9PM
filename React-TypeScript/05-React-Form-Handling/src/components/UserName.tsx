import React, {useState} from 'react';

interface IUser {
    username: string;
    password: string;
}

export const UserName: React.FC = () => {

    const [user, setUser] = useState<IUser>({
        username: "",
        password: ""
    });

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };


    return (
        <>
            {/*<pre>{JSON.stringify(register)}</pre>*/}
            <div className="container mt-3">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body bg-primary">
                                <form>
                                    <input
                                        value={user.username}
                                        name={'username'}
                                        onChange={event => onInputChange(event)}
                                        type="text" className="form-control" placeholder="Username"/>
                                    <input
                                        value={user.password}
                                        name={'password'}
                                        onChange={event => onInputChange(event)}
                                        type="password" className="form-control mt-2" placeholder="Password"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default UserName;