import User from "../models/User";

let user = null;

export function login(username, password) {
    if (username == "test" && password == "test") {
        user = new User(username, password, "Hello World")
    }
}

export function isLoggedIn(){
    return user !== null;
}

export function logout(){
    user = null;
}