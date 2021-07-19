// getUser and setUser functions
const USER = 'USER';

export function getUser(){
    const userString = localStorage.getItem(USER);
    return JSON.parse(userString);
}

export function saveUser(userObject){
    const userString = JSON.stringify(userObject);
    localStorage.setItem(USER, userString);
}