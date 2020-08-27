// Function that will take in the token and if the token is there add it to the headers if not its gonna delete from the header
import api from './api';

// Send every request rather than picking and choosing which one to send
const setAuthToken = token => {
    if (token) {
        api.defaults.headers.common['x-auth-token'] = token;
        localStorage.setItem('token', token);
    } else {
        delete api.defaults.headers.common['x-auth-token'];
        localStorage.removeItem('token');
    }
};

export default setAuthToken;