import axios from 'axios';

export class CustomerService {
    private static serverUrl: string = `https://gist.githubusercontent.com/thenaveensaggam/cbaba0dd800d5d676fa5670b1088a902/raw/1a1814f959c06d47974c1a680dac90bdbd08cf06/customers-06-01-2023.json`;

    /**
     * to get all the customers info
     */
    public static getAllCustomers(): Promise<any> {
        return axios.get(this.serverUrl);
    }
}