import jwtDecode from 'jwt-decode';
import webApi from './webApi';

const loginEndPoint = '/auth/login';
const registerEndPoint = '/auth/register';

function isTokenExpired (token) {
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
function setToken (idToken) {
    // Saves user token to localStorage
    localStorage.setItem('token', idToken)
}
function getToken () {
    // Retrieves the user token from localStorage
    return localStorage.getItem('token')
}

export default {
    logIn: (username, password) => {
        // LogIn user and handle server response
        return webApi.post(loginEndPoint,{username, password}, setToken);
    },
    register: (user) => {
        // Register user and handle server response
        return webApi.post(registerEndPoint, user, setToken);
    },
    loggedIn: () => {
        // Check if user is loggedIn        
        const token = getToken()
        return !!token && !isTokenExpired(token)
    },   
    logout: () => {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('token');
    },
    getProfile: () => {
        // Get current user profile
        // Returns empty object to allow checks like jwtDecode(getToken()).user.name === 'undefined'
        return getToken() ? jwtDecode(getToken()).user : {};
    }
}