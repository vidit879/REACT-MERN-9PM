import axios from 'axios';

export class UserService {
    private static serverURl: string = "https://jsonplaceholder.typicode.com";

    /**
     * get all users
     */
    public static getAllUsers(): Promise<any> {
        return axios.get(`${this.serverURl}/users`);
    }
}