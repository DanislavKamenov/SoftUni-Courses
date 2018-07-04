import jwtDecode from 'jwt-decode';
import webApi from './webApi';

const loginEndPoint = 'auth/login';
const registerEndPoint = 'auth/signup';

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
function setToken(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('token', idToken)
}
function getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('token')
}

export default {
    // LogIn user and handle server response
    logIn: ({ email, password }) =>
        new Promise((resolve, reject) =>
            webApi.post(loginEndPoint, { email, password })
                .then((res) => {
                    if (res.success) {
                        setToken(res.token);
                        resolve(res);
                    } else {
                        reject(res)
                    }
                })
                .catch(reject)
        ),
    // Register user and handle server response
    register: (user) =>
        new Promise((resolve, reject) => 
            webApi.post(registerEndPoint, user, setToken)
                .then((res) => {
                    if (res.success) {
                        setToken(res.token);
                        resolve(res);
                    } else {
                        reject(res)
                    }
                })
                .catch(reject)
        ),
    // Check if user is loggedIn       
    loggedIn: () => {         
        const token = getToken()
        return !!token && !isTokenExpired(token)
    },
    // Clear user token and profile data from localStorage
    logout: () => localStorage.removeItem('token'),
    // Get current user profile
    // Returns empty object to allow checks like jwtDecode(getToken()).user.name === 'undefined'
    getProfile: () => getToken() ? jwtDecode(getToken()).user : {},
    setToken,
    getToken
}