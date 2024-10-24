import axios from 'axios';

export const SetAuthToken = token => {
    axios.defaults.baseURL='http://104.248.113.144:8080/api/v1/';
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        
    }
    else
        delete axios.defaults.headers.common["Authorization"];
};
export default SetAuthToken;


