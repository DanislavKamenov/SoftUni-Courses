import jwtDecode from 'jwt-decode';
import observer from '../infrastructure/observer';

function isTokenExpired(token) {
    // Check if token is expired
    try {
        const decoded = jwtDecode(token);
        if (decoded.exp < Date.now() / 1000) {
            return true;
        }
        else
            return false;
    }
    catch (err) {
        return false;
    }
}
function setToken(token) {
    // Saves user token to localStorage
    localStorage.setItem('token', token)
}
function getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('token')
}

export default {
    // LogIn user and handle server response
    logIn: (res) => {
        setToken(res.token);
        observer.trigger(observer.events.loginUser, res);
    },    
    loggedIn: () => {
        const token = getToken()
        return !!token && !isTokenExpired(token)
    },
    // Clear user token and profile data from localStorage
    logout: () => {
        localStorage.removeItem('token')
        observer.trigger(observer.events.logoutUser);
    },
    // Get current user profile
    // Returns empty object to allow checks like jwtDecode(getToken()).user.name === 'undefined'
    getProfile: () => getToken() ? jwtDecode(getToken()).user : {},
    setToken,
    getToken
}